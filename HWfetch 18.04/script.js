const state = localStorage.getItem("IND")
  ? { userId: localStorage.getItem("IND") }
  : { userId: 1 };

const save = (id) => {
  localStorage.removeItem("IND");
  localStorage.setItem("IND", id);
};

async function getUserInfo(id) {
  const userUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
  const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
  const usersId = `https://jsonplaceholder.typicode.com/users`;

  const [userResponse, postsResponse, idResponse] = await Promise.all([
    fetch(userUrl),
    fetch(postsUrl),
    fetch(usersId),
  ]);

  if (userResponse.ok && postsResponse.ok && idResponse.ok) {
    const [user, posts, id] = await Promise.all([
      userResponse.json(),
      postsResponse.json(),
      idResponse.json(),
    ]);

    state.user = user;
    state.posts = posts;
    state.id = id;
    state.status = true;
  } else {
    state.status = false;
  }
}

const createElements = (localState, actions) => {
  const arrPosts = [];

  const mainConteiner = document.createElement("div");
  mainConteiner.classList.add("mainConteiner");

  const userContainer = document.createElement("div");
  userContainer.classList.add("userContainer");

  const userInfo = document.createElement("div");
  userInfo.classList.add("userInfo");
  const nameUs = document.createElement("p");
  nameUs.classList.add("name");
  nameUs.innerText = localState.user.name;
  const emaleUs = document.createElement("p");
  emaleUs.classList.add("emale");
  emaleUs.innerText = localState.user.email;
  userInfo.append(nameUs, emaleUs);

  const userInfo2 = document.createElement("div");
  userInfo2.classList.add("userInfo2");
  const userPhoto = document.createElement("div");
  userPhoto.classList.add("userPhoto");
  const numUser = document.createElement("p");
  numUser.classList.add("numUser");
  numUser.innerHTML = `ID:${localState.userId}`;
  userInfo2.append(userPhoto, numUser);

  const leftBtn = document.createElement("button");
  leftBtn.classList.add("leftBtn");
  leftBtn.innerText = "<";
  leftBtn.addEventListener("click", () => actions.moovLeft());
  const rightBtn = document.createElement("button");
  rightBtn.classList.add("rightBtn");
  rightBtn.innerHTML = ">";
  rightBtn.addEventListener("click", () => actions.moovRight());
  const stateBTN = document.createElement("button");
  stateBTN.classList.add("stateBTN");
  stateBTN.innerText = `state`;
  stateBTN.addEventListener("click", () => console.log(localState));
  const errorMessage = document.createElement("p");
  errorMessage.innerHTML = "There is no user";
  errorMessage.classList.add("errorMessageOff");
  errorForUser = () => {
    if (localState.status !== true) {
      errorMessage.classList.remove("errorMessageOff");
      errorMessage.classList.add("errorMessage");
      setTimeout(() => {
        errorMessage.classList.remove("errorMessage");
        errorMessage.classList.add("errorMessageOff");
      }, 1000);
    }
  };

  errorForUser();

  userContainer.append(userInfo, userInfo2, leftBtn, rightBtn, stateBTN);

  const postsContainer = document.createElement("posts");
  const posts = localState.posts.map((el) => {
    const post = document.createElement("div");
    post.classList.add("post");
    const postsTitle = document.createElement("p");
    postsTitle.classList.add("postsTitle");
    postsTitle.innerText = el.title;
    const postsDescr = document.createElement("p");
    postsDescr.classList.add("postsDescr");
    postsDescr.innerText = el.body;
    post.append(postsTitle, postsDescr);

    return post;
  });

  postsContainer.append(...posts);
  mainConteiner.append(errorMessage, userContainer, postsContainer);
  arrPosts.push(mainConteiner);
  return arrPosts;
};

const render = (root, localState, actions) => {
  const elements = createElements(localState, actions);
  root.replaceChildren();
  root.append(...elements);
};

const getActions = (root, localState) => ({
  start: async () => {
    await getUserInfo(localState.userId);
    save(localState.userId);
    render(root, localState, actions);
  },

  moovRight: async () => {
    if (localState.userId <= localState.id.length) {
      localState.userId++;
    }
    await getUserInfo(localState.userId);
    if (localState.status) {
      save(localState.userId);
    } else {
      localState.userId = localState.id.length;
    }
    render(root, localState, actions);
  },
  moovLeft: async () => {
    if (localState.userId >= 1) {
      localState.userId--;
    }
    await getUserInfo(localState.userId);
    if (localState.status) {
      save(localState.userId);
    } else {
      localState.userId = 1;
    }
    render(root, localState, actions);
  },
});

const root = document.querySelector(".user-container");
const actions = getActions(root, state);
actions.start();
