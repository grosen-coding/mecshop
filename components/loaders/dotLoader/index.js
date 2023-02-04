import styles from "./styles.module.scss";
import DotLoader from "react-spinners/DotLoader";
export default function DotLoaderSpinner({ loading }) {
  return (
    <div className={styles.loader}>
      <DotLoader color="rgb(43, 102, 56)" loading={loading} />
    </div>
  );
}
