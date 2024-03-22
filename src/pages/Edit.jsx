import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CurrencyInput from "react-currency-input-field";
import { AlertContext } from "../context/AlertContext";

const Edit = () => {
  const { id } = useParams(); // Ambil ID dari parameter URL
  const navigate = useNavigate();
  const { state } = useLocation(); // get data from product
  const { item } = state || {}; // <-- unpack the item from state

  const { setAlertMessage } = useContext(AlertContext);

  const [formData, setFormData] = useState({
    id: item.id,
    name: item.name,
    description: item.description,
    category: item.category,
    price: item.price,
    img: item.img,
    file: item.file,
  });

  const handleChange = (e) => {
    const { name, files } = e.target;

    if (name === "img") {
      const newFiles = Array.from(files);
      const newFileNames = newFiles.map((file) => file.name);
      const updatedImages = [...formData.img, ...newFileNames];

      setFormData((prevData) => ({
        ...prevData,
        img: updatedImages,
        file: newFiles,
      }));
    } else {
      const value =
        name === "price" ? parseInt(e.target.value) : e.target.value;

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formFile = new FormData();
      for (let i = 0; i < formData.file.length; i++) {
        formFile.append("file", formData.file[i]);
      }
      await axios.post("http://localhost:3001/api/data/upload", formFile);

      await axios.put(
        `https://api-bucket.onrender.com/api/data/${id}`,
        formData
      );
      setAlertMessage("Data updated successfully", "success");
      navigate("/icantik");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = formData.img.filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      img: updatedImages,
    }));
  };

  return (
    <div className="container">
      <Link to={`/icantik`} className="text-decoration-none">
        <div className="d-flex align-items-center">
          <FontAwesomeIcon
            icon="fa-solid fa-arrow-left"
            style={{ color: "#769FCD" }}
          />
          <span className="ms-2" style={{ color: "#769FCD" }}>
            Back
          </span>
        </div>
      </Link>
      <h2 className="text-center pt-3">Edit Data</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            onChange={handleChange}
            value={formData.description}
          />
        </div>

        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          className="form-select mb-3"
          aria-label="Default select example"
          onChange={handleChange}
          name="category"
          id="category"
          value={formData.category}
        >
          <option value="" selected disabled>
            Category
          </option>
          <option value="best-seller">Best Seller</option>
          <option value="bunga satin">Bunga satin</option>
          <option value="bunga artificial">Bunga artificial</option>
          <option value="snack bouquet">Snack Bouquet</option>
          <option value="snack tart">Snack Tart</option>
          <option value="fresh flower">Fresh Flower</option>
          <option value="butterfly led">Butterfly LED</option>
          <option value="bouquet ballon">bouquet Ballon</option>
          <option value="money bouquet">Money Bouquet</option>
          <option value="hampers">Hampers</option>
          <option value="lainnya">Lainnya</option>
        </select>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <div className="d-flex gap-3">
            <input
              type="number"
              className="form-control"
              name="price"
              id="price"
              onChange={handleChange}
              value={formData.price}
            />
            <CurrencyInput
              className="form-control"
              name="price"
              id="price"
              prefix="Rp."
              groupSeparator="."
              decimalSeparator=","
              value={formData.price}
              disabled
            />
          </div>
        </div>
        {/* Show existing images */}
        {formData.img.map((img, index) => (
          <div key={index} className="mb-3">
            <img
              src={`/assets/img/${formData.img[index]}`}
              width={75}
              alt={`Image ${index}`}
            />
            <button
              className="btn btn-danger ms-3"
              onClick={(e) => {
                e.preventDefault();
                handleDeleteImage(index);
              }}
            >
              Delete
            </button>
          </div>
        ))}

        {/* Add new image input */}
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Add New Image
          </label>
          <input
            className="form-control"
            type="file"
            id="img"
            name="img"
            multiple
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default Edit;
