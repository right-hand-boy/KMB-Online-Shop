import Header from "../components/header/Header";

import Footer from "../components/footer/Footer";
import styles from "./About.module.css";
import product from "../../public/backgroundd.jfif";
import phone from "../../public/phone.jfif";
import secure from "../../public/secure.jfif";
function About() {
  return (
    <>
      <Header />
      <div className={styles.ContainerBox}>
        <div className={styles.container}>
          <h1>About KMB Online Shop</h1>
          <div className={styles.containerAbout}>
            <p className={`${styles.description} ${styles.general}`}>
              Welcome to KMB Online Shop, your one-stop destination for all your
              online shopping needs. We pride ourselves on offering a wide
              variety of products to cater to diverse tastes and preferences.
            </p>
            <img src={product} />
            <p className={styles.description}>
              Whether you're looking for trendy clothing and stylish accessories
              to elevate your wardrobe, cutting-edge electronics to stay ahead
              in the tech game, or high-quality home goods to spruce up your
              living space, we've got you covered.
            </p>
            <p className={styles.description}>
              Our user-friendly interface is designed to make your browsing and
              purchasing experience seamless and enjoyable. With detailed
              product descriptions, high-resolution images, and customer
              reviews, you can make informed decisions with confidence.
            </p>
            <img src={phone} />
            <img src={secure} />
            <p className={styles.description}>
              At KMB Online Shop, we prioritize the security of your
              transactions. Enjoy a secure checkout process backed by robust
              encryption technology, ensuring that your personal and payment
              information remains safe and confidential.
            </p>

            <p className={`${styles.description} ${styles.general}`}>
              Shop with us today and discover the convenience, variety, and
              reliability of online shopping at KMB Online Shop. We look forward
              to serving you!
              <br /> Additionally, keep an eye out for occasional promotions and
              special offers that we roll out to enhance your shopping
              experience and provide you with even greater value for your money.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
// AboutPage.jsx
