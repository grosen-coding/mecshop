import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function UserMenu({ loggedIn }) {
  return (
    <div className={styles.menu}>
      <h4>Welcome to MEC</h4>
      {loggedIn ? (
        <div className={styles.flex}>
          <Image
            src="/../public/images/can-icon.jpg"
            width={100}
            height={100}
            alt="User icon"
            className={styles.menu__img}
            priority
          />
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h3>User Name</h3>
            <span>Sign Out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined}>Login</button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile">Accounts</Link>
        </li>
        <li>
          <Link href="/profile/orders">My Orders</Link>
        </li>
        <li>
          <Link href="/profile/messages">Message Center</Link>
        </li>
        <li>
          <Link href="/profile.address">Addresses</Link>
        </li>
        <li>
          <Link href="/profile/wishlist">WishList</Link>
        </li>
      </ul>
    </div>
  );
}
