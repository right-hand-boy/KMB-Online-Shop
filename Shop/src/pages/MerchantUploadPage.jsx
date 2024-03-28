import React, { useState } from "react";
import styles from "./MerchantUploadPage.module.css"; // Import modular CSS file
import Header from "../components/header/Header";

const MerchantUploadPage = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    brand: "",
    price: "",
    image: null,
    quantityAvailable: "",
    rating: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to submit data to backend (Supabase)
    console.log(formData);
    // Reset form after submission
    setFormData({
      productName: "",
      productDescription: "",
      brand: "",
      price: "",
      image: null,
      quantityAvailable: "",
      rating: "",
    });
  };

  return (
    <div>
      {/* <Header /> */}
      <div className={styles.Upload}>
        <div className={styles.MerchantUploadPage}>
          <h2>Upload Product</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              value={formData.productName}
              onChange={handleInputChange}
            />
            <textarea
              name="productDescription"
              placeholder="Product Description"
              value={formData.productDescription}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={formData.brand}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleInputChange}
            />
            <input
              type="file"
              name="image"
              accept=".jpg,.png,.jfif"
              onChange={handleFileChange}
            />
            <input
              type="number"
              name="quantityAvailable"
              placeholder="Quantity Available"
              value={formData.quantityAvailable}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="rating"
              placeholder="Rating"
              value={formData.rating}
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>{" "}
      </div>
    </div>
  );
};

export default MerchantUploadPage;
