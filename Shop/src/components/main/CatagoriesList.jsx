import styles from "./CatagoriesList.module.css";
function CatagoriesList() {
  return (
    <div className={styles.catagoriesList}>
      <h2>Catagories</h2>
      <ui>
        <li>watch</li>
        <li>t-shirt</li>
        <li>jacket</li>
        <li>laptop</li>
        <li>phone</li>
        <li>furnituer</li>
        <li>trousers</li>
        <li>shorts</li>
        <li>electronics</li>
      </ui>
    </div>
  );
}

export default CatagoriesList;
