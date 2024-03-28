import styles from "./Catagories.module.css";
import Header from "../components/header/Header";
import { useState } from "react";
import CatagoriesList from "../components/main/CatagoriesList";
import CatagoriesImg from "../components/main/CatagoriesImg";
import Order from "../components/main/Order";
function Catagories() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />

      <div className={styles.ContainerBox}>
        <div className={styles.shop}>
          <div className={styles.Catagories_list_box}>
            <CatagoriesList />
          </div>
          <div className={styles.main}>
            <CatagoriesImg />
          </div>
        </div>
        <Order />
      </div>
    </>
  );
}

export default Catagories;
{
  /* <div className={styles.category}>
        <button className={styles.categoryButton} onClick={toggleDropdown}>
          more
        </button>
        {isOpen && (
          <ul className={styles.productList}>
            {products.map((product) => (
              <li key={product.id} className={styles.productItem}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.productImage}
                />
                <p className={styles.productName}>{product.name}</p>
                <p className={styles.productPrice}>${product.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div> */
}
