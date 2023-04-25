/*Задание Создать класс User со свойствами
 name, username, age.
Добавить метод change_username, который получает 
в качестве аргумента новое имя пользователя и меняет его.
Создать класс Product со свойствами title, price, count.
 И методами change_price и sale.
Доработать метод change_price, который принимает в качестве 
аргумента новую цену и делает проверку, если цена меньше нуля 
то цена не меняется и вызывается исключение “цена не может быть
 отрицательной”.
Доработать класс метод sale, который уменьшает count на единицу.
 Но если count уже равен нулю, то вызывается исключение
  “товар закончился”.(на следующий вторник)
*/
function asert(mes, text) {
  if (mes) 
    throw (text);
  
}

class User {
  constructor(name, username, age) {
    this.name = name;
    this.username = username;
    this.age = age;
  }

  changeUsername = (newName) => {
    this.name = newName;
  };
}

class Product {
  constructor(title, price, count) {
    this.title = title;
    this.price = price;
    this.count = count;
  }

  changePrice = (newPrice) => {
    asert(newPrice < 0, "цена не может быть отрицательной");
    this.price = newPrice;
  };

  sale = () => {
    asert(this.count === 0, "товар закончился");
    this.count--;
  };
}

const product = new Product("myxa", 30, 2);
const user = new User("baba", "star", 50);

console.log(product);
console.log(user);
/*
console.log(product.price)
product.changePrice(-1);
console.log(product.price)
product.changePrice(1);
console.log(product.price)
*//*
console.log(product.count)
product.sale()
console.log(product.count)
product.sale()
console.log(product.count)
product.sale()
console.log(product.count)*/
