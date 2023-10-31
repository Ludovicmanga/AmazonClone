import React from "react";
import Image from 'next/image'
import styles from './NavBelt.module.css'
import AmazonLogo from '@/public/Amazon_logo.png'
import SearchBar from "../SearchBar/SearchBar";

type Props = {};

const NavBelt = (props: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <Image alt="logo" src={AmazonLogo} height={60} />
      </div>
      <div className={styles.clickableBtn}>Livrer à Paris 75001</div>
      <div className={styles.searchBarContainer}>
      <SearchBar />
      </div>
      <div>
        <div>Bonjour Ludovic</div>
        <div className={`${styles.clickableBtn} ${styles.yourAccountContainer}`}>Comptes & listes</div>
      </div>
      <div className={styles.clickableBtn}>Retour et commandes</div>
      <div className={styles.clickableBtn}>Panier</div>
    </div>
  );
};

export default NavBelt;
