import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CurrencyInput from "react-currency-input-field";
import { AlertContext } from "../context/AlertContext";

export const Add = () => {
  const { setAlertMessage } = useContext(AlertContext);
  const [formData, setFormData] = useState({
    img: null,
    file: null,
    description: "",
    category: "",
    price: "",
  });
  // const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    const updateValue = name === "price" ? parseInt(value) : value;

    if (name === "img") {
      const file = Array.from(files);
      const fileNames = file.map((file) => file.name);
      setFormData((prevData) => ({
        ...prevData,
        img: fileNames, // Simpan nama file dalam bentuk array
        file: file,
      }));
      // setImage(files);
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: updateValue,
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

      const response = await axios.post(
        "https://api-bucket.onrender.com/api/data",
        formData
      );
      setAlertMessage("Data added successfully", "success");
      // Reset form after successful submission
      navigate("/icantik");
    } catch (error) {
      console.error("Error adding data:", error);
    }
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
      <h2 className="text-center pt-3">Add Data</h2>
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
            required
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
          required
        >
          <option value="" defaultValue={true} disabled>
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
              required
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
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            File Img
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
          Submit
        </button>
      </form>
    </div>
  );
};
