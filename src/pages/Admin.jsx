import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Loading } from "../component/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ToastNotif from "../component/ToastNotif";
import { useContext } from "react";
import { AlertContext } from "../context/AlertContext";

export const Admin = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { alert, setAlertMessage } = useContext(AlertContext);

  const formatCurrency = (price) => {
    return parseFloat(price).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://api-bucket.onrender.com/api/data"
        ); // Ganti dengan URL API Anda
        setData(response.data);
        setFilterData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setInput(e.target.value);
    const filteredData = data.filter(
      (item) =>
        item.description.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.category.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.price.toString().includes(e.target.value)
    );
    setFilterData(filteredData);
  };

  const handleDelete = async (id) => {
    try {
      // Menghapus data
      await axios.delete(`https://api-bucket.onrender.com/api/data/${id}`);
      // Ambil data terbaru setelah penghapusan
      const response = await axios.get(
        "https://api-bucket.onrender.com/api/data"
      );
      setData(response.data);
      setFilterData(response.data);
      setAlertMessage("Data deleted successfully", "danger");
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="container pt-3">
      {alert.show && <ToastNotif message={alert.message} type={alert.type} />}
      <h1 className="text-center pb-3">Data bucket</h1>
      <div className="row">
        <div className="col">
          <Link to="/icantik/add" className="btn btn-primary">
            Add
          </Link>
        </div>
        <div className="col">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Search
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={handleSearch}
              value={input}
              placeholder="Search..."
              disabled={isLoading}
            />
          </div>
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>img</th>
              <th>description</th>
              <th>category</th>
              <th>price</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    src={`/assets/img/product/${item.img[0]}`}
                    width={50}
                    alt=""
                  />
                </td>
                <td>{item.description}</td>
                <td>{item.category}</td>
                <td>{formatCurrency(item.price)}</td>
                <td className="text-md-start text-center">
                  <div className="d-flex flex-md-row flex-column gap-3">
                    <Link onClick={() => handleDelete(item._id)}>
                      <FontAwesomeIcon
                        className="text-danger"
                        icon="fa-solid fa-trash"
                      />
                    </Link>

                    <Link to={`/icantik/edit/${item._id}`} state={{ item }}>
                      <FontAwesomeIcon
                        className="text-primary"
                        icon="fa-solid fa-pen-to-square"
                      />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
