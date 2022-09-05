import styles from "../styles/Subdivision.module.css";

const Subdivision = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.black ? "#000" : "#fff",
      }}
      className={styles.subdivision}
    ></div>
  );
};

export default Subdivision;
