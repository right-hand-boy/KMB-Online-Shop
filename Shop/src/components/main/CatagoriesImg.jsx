import styles from "./CatagoriesImg.module.css";
import watch_1 from "/Catagories/watch_1.jpg";
import furnituer from "/Catagories/furnituer.jpg";
import compuer_1 from "/Catagories/computer_1.jpg";
import cloth from "/Catagories/cloths.jfif";
import jacket from "/Catagories/jacket.jfif";
import suit from "/Catagories/suit.jfif";
import tshirt from "/Catagories/T-Shirts.jfif";
function CatagoriesImg() {
  return (
    <div className={styles.CatagoriesImg}>
      <div className={styles.CatagoriesBox}>
        <img src={watch_1} />
        <ui className={styles.infoCatagories}>
          <li className={styles.header}>catagory</li>
          <li>watch</li>
          <li className={styles.header}>includes</li>
          <li>stop watch</li>
          <li>hand watch</li>
          <li></li>
          <li></li>
          <li className={styles.header}>brands</li>
          <li>fosile</li>
          <li>rolex</li>
        </ui>
      </div>
      <div className={styles.CatagoriesBox}>
        <img src={compuer_1} />
        <ui className={styles.infoCatagories}>
          <li className={styles.header}>catagory</li>
          <li>computer</li>
          <li className={styles.header}>includes</li>
          <li>pc</li>
          <li>desktop</li>
          <li className={styles.header}>brands</li>
          <li>hp</li>
          <li>apple</li>
          <li>assus</li>
          <li>lenovo</li>
        </ui>
      </div>
      <div className={styles.CatagoriesBox}>
        <img src={furnituer} />
        <ui className={styles.infoCatagories}>
          <li className={styles.header}>catagory</li>
          <li>furnituer</li>
          <li className={styles.header}>includes</li>
          <li>sofa</li>
          <li>bulbs</li>
          <li>chair</li>
          <li>table</li>
        </ui>
      </div>
      <div className={styles.CatagoriesBox}>
        <img src={cloth} />
        <ui className={styles.infoCatagories}>
          <li className={styles.header}>catagory</li>
          <li>cloths</li>
          <li className={styles.header}>includes</li>
          <li>pants</li>
          <li>shorts</li>
          <li></li>
          <li></li>
          <li className={styles.header}>brands</li>
          <li>nike</li>
          <li>addidas</li>
          <li>jordan</li>
        </ui>
      </div>
      <div className={styles.CatagoriesBox}>
        <img src={jacket} />
        <ui className={styles.infoCatagories}>
          <li className={styles.header}>catagory</li>
          <li>jacket</li>
          <li className={styles.header}>includes</li>
          <li>hoodie</li>
          <li></li>
          <li className={styles.header}>brands</li>
          <li>nike</li>
          <li>addidas</li>
          <li>jordan</li>
        </ui>
      </div>
      <div className={styles.CatagoriesBox}>
        <img src={suit} />
        <ui className={styles.infoCatagories}>
          <li className={styles.header}>catagory</li>
          <li>sui</li>
          <li className={styles.header}>includes</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ui>
      </div>
      <div className={styles.CatagoriesBox}>
        <img src={tshirt} />
        <ui className={styles.infoCatagories}>
          <li className={styles.header}>catagory</li>
          <li>tshirt</li>
          <li className={styles.header}>includes</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li className={styles.header}>brands</li>
          <li>nike</li>
          <li>addidas</li>
          <li>jordan</li>
        </ui>
      </div>
      <div className={styles.CatagoriesBox}>
        <img src={compuer_1} />
        <ui className={styles.infoCatagories}>
          <li className={styles.header}>catagory</li>
          <li>computer</li>
          <li className={styles.header}>includes</li>
          <li>pc</li>
          <li>desktop</li>
          <li className={styles.header}>brands</li>
          <li>hp</li>
          <li>apple</li>
          <li>assus</li>
          <li>lenovo</li>
        </ui>
      </div>
      <div className={styles.CatagoriesBox}>
        <img src={furnituer} />
        <ui className={styles.infoCatagories}>
          <li className={styles.header}>catagory</li>
          <li>furnituer</li>
          <li className={styles.header}>includes</li>
          <li>sofa</li>
          <li>bulbs</li>
          <li>chair</li>
          <li>table</li>
        </ui>
      </div>
      <div className={styles.CatagoriesBox}>
        <img src={watch_1} />
        <ui className={styles.infoCatagories}>
          <li className={styles.header}>catagory</li>
          <li>watch</li>
          <li className={styles.header}>includes</li>
          <li>stop watch</li>
          <li>hand watch</li>
          <li></li>
          <li></li>
          <li className={styles.header}>brands</li>
          <li>fosile</li>
          <li>rolex</li>
        </ui>
      </div>
      <div className={styles.CatagoriesBox}>
        <img src={compuer_1} />
        <ui className={styles.infoCatagories}>
          <li className={styles.header}>catagory</li>
          <li>computer</li>
          <li className={styles.header}>includes</li>
          <li>pc</li>
          <li>desktop</li>
          <li className={styles.header}>brands</li>
          <li>hp</li>
          <li>apple</li>
          <li>assus</li>
          <li>lenovo</li>
        </ui>
      </div>
      <div className={styles.CatagoriesBox}>
        <img src={furnituer} />
        <ui className={styles.infoCatagories}>
          <li className={styles.header}>catagory</li>
          <li>furnituer</li>
          <li className={styles.header}>includes</li>
          <li>sofa</li>
          <li>bulbs</li>
          <li>chair</li>
          <li>table</li>
        </ui>
      </div>
    </div>
  );
}

export default CatagoriesImg;
