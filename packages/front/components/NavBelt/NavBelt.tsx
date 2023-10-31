import React from "react";
import Image from "next/image";
import styles from "./NavBelt.module.css";
import AmazonLogo from "@/public/Amazon_logo.png";
import SearchBar from "../SearchBar/SearchBar";
import { BsCartCheck } from "react-icons/bs";

type Props = {};

const NavBelt = (props: Props) => {
  return (
    <div className={styles.container}>
      <Image alt="logo" src={AmazonLogo} height={60} />
      <div className={styles.clickableBtn}>Livrer à Paris 75001</div>
      <div className={styles.searchBarContainer}>
        <SearchBar />
      </div>
      <div>
        <div>Bonjour Ludovic</div>
        <div
          className={`${styles.clickableBtn} ${styles.yourAccountContainer}`}
        >
          Comptes & listes
        </div>
      </div>
      <div className={styles.clickableBtn}>Retour et commandes</div>
      <div className={`${styles.clickableBtn} ${styles.cart}`}>
        <div className={styles.cartIconAndNumber}>
            <div>0</div>
            <BsCartCheck className={styles.cartIcon} />
        </div>
        <div className={styles.cartText}>Panier</div>
      </div>
    </div>
  );
};

export default NavBelt;
