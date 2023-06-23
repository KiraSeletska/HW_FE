import styles from './styles.module.css';

export const UploadData = ({ onAddMessage }) => {
  return (
    <button className={styles.button}>
      Upload
      <input
        type='file'
        accept='image/png, image/gif, image/jpeg'
        className={styles.fileInput}
        multiple
        onChange={(e) => {
          const files = [...e.target.files].forEach((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.addEventListener('load', () => {
              const result = reader.result;
              onAddMessage(file.name, result);
            });
          });
        }}
      />
    </button>
  );
};
