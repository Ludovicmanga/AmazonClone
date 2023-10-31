import React from "react";
import styles from "./MainNavBar.module.css";
import { AiOutlineMenu } from "react-icons/ai";

type Props = {};

const MainNavBar = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftMenuBtn}>
        <AiOutlineMenu />
        <div className={styles.leftMenuBtnText}>Toutes</div>
      </div>
      <div>Vendre sur Amazon</div>
    </div>
  );
};

export default MainNavBar;
