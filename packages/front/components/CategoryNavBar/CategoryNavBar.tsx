import React from "react";
import styles from "./CategoryNavBar.module.css";
import { AxiosInst } from "../../singletons/axiosInstance";

type Props = {};

const CategoryNavBar = (props: Props) => {
  const getCategories = async () => {
    //await AxiosInst.getInst().get('/');
  };

  return (
    <>
      <div className={styles.helloMessage}>
        <div>Bonjour Ludovic</div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Tendances</h2>
          <div>Meilleures ventes</div>
        </div>
        <h2 className={styles.sectionTitle}>Choisir une catégorie</h2>
        <h2 className={styles.sectionTitle}>Aide Et Paramètres</h2>
      </div>
    </>
  );
};

export default CategoryNavBar;
