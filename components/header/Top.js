import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import UserMenu from "./UserMenu";

export default function Top() {
  const [visible, setVisible] = useState(false);

  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li className={styles.li}>
            <Image
              width={100}
              height={100}
              src="/../public/images/can-icon.jpg"
              alt="Can flag"
              priority
            />
            <span>Canada</span>
          </li>
          <li className={styles.li}>
            <MdSecurity />
            <span>Buyer Protection</span>
          </li>
          <li className={styles.li}>
            <span>Customer Service</span>
          </li>
          <li className={styles.li}>
            <span>Help</span>
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <Link href="/profile/wishlist">
              <span>Wishlist</span>
            </Link>
          </li>

          <ul
            className={styles.li}
            onMouseOver={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            style={{ cursor: "pointer", zIndex: 999999 }}
          >
            {loggedIn ? (
              <li className={styles.li} onClick={() => setVisible(!visible)}>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>User Name</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            ) : (
              <li className={styles.li} onClick={() => setVisible(!visible)}>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </li>
            )}
            {visible && <UserMenu loggedIn={loggedIn} />}
          </ul>
        </ul>
      </div>
    </div>
  );
}
