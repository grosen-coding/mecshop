import Link from "next/link";
import styles from "./styles.module.scss";
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Main() {
  const { cart } = useSelector((state) => ({ ...state }));

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href="/">
          <div className={styles.logo}>
            <Image
              width={100}
              height={100}
              src="/../public/images/can-icon.jpg"
              alt="MEC Logo"
              priority
            />
          </div>
        </Link>
        <form className={styles.search}>
          <input type="text" placeholder="Search..." />
          <button type="submit" className={styles.search__icon}>
            <RiSearch2Line />
          </button>
        </form>
        <Link href="/cart">
          <div className={styles.cart}>
            <FaOpencart />
            <span style={{ color: "white" }}>{cart.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
