import React from "react";
import Image from 'next/image'
import styles from './NavBelt.module.css'
import AmazonLogo from '@/public/Amazon_logo.svg'

type Props = {};

const NavBelt = (props: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <Image alt="logo" src={AmazonLogo} height={50} />
      </div>
      <div>Livrer à Paris 75001</div>
      <div>Left navBar</div>
      <div>Search Bar</div>
      <div>Retour et commandes</div>
      <div>Panier</div>
    </div>
  );
};

export default NavBelt;
