import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";
import { signOut, signIn } from "next-auth/react";

export default function UserMenu({ session }) {
  return (
    <div className={styles.menu}>
      <h4>Welcome to MEC</h4>
      {session ? (
        <div className={styles.flex}>
          <img
            src={session.user.image}
            alt="User icon"
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h3>{session.user.name}</h3>
            <span onClick={() => signOut()}>Sign Out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined} onClick={() => signIn()}>
            Login
          </button>
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
