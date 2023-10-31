import React from "react";
import styles from "./CategoryNavBar.module.css";

type Props = {};

const CategoryNavBar = (props: Props) => {
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
        <h2 className={styles.sectionTitle}>Contenu numérique rt Appareils</h2>
        <h2 className={styles.sectionTitle}>Choisir une catégorie</h2>
      </div>
    </>
  );
};

export default CategoryNavBar;
