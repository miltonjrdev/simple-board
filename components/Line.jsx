import Subdivision from "./Subdivision";
import styles from "../styles/Line.module.css";

const Line = (props) => {
  return (
    <div className={styles.line}>
      <Subdivision black={props.black} />
      <Subdivision black={!props.black} />
      <Subdivision black={props.black} />
      <Subdivision black={!props.black} />
      <Subdivision black={props.black} />
      <Subdivision black={!props.black} />
      <Subdivision black={props.black} />
      <Subdivision black={!props.black} />
    </div>
  );
};

export default Line;
