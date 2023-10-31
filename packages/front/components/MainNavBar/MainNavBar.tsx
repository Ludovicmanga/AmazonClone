"use client";

import React, { useState } from "react";
import styles from "./MainNavBar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import NavDrawer from "../NavDrawer/NavDrawer";

type Props = {};

const MainNavBar = (props: Props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const toggleOpenDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen)
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.btn} ${styles.leftMenuBtn}`} onClick={toggleOpenDrawer}>
        <AiOutlineMenu className={styles.menuIcon} />
        <div
          className={` ${styles.leftMenuBtnText}`}
        >
          Toutes
        </div>
      </div>
      <div className={styles.btn}>Vendre sur Amazon</div>
      <NavDrawer
        open={drawerIsOpen}
        toggleOpen={toggleOpenDrawer}
      />
    </div>
  );
};

export default MainNavBar;
