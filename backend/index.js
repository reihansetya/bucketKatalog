const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");
const multer = require("multer");

const app = express();
const port = process.env.PORT || 3001; // Port server

app.use(cors()); // Mengaktifkan CORS untuk mengizinkan akses dari berbagai domain

// MongoDB connection URI
const uri =
  "mongodb+srv://reihansetya048:F6J5tv8BKXWG1WUB@cluster0.qg4qtuz.mongodb.net/database?retryWrites=true&w=majority";

// Membuat koneksi MongoDB
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/assets/img/product");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(express.json()); // Middleware untuk parsing body JSON

app.get("/", (req, res) => {
  res.send("Bucket Api Server");
});

// Endpoint untuk mendapatkan semua data
app.get("/api/data", async (req, res) => {
  try {
    await client.connect(); // Terhubung ke MongoDB
    const database = client.db("database");
    const collection = database.collection("bucket");

    // Ambil semua dokumen dari koleksi
    const data = await collection.find({}).toArray();
    res.json(data); // Kirim data sebagai respons
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    await client.close(); // Tutup koneksi MongoDB setelah selesai
  }
});

// Endpoint untuk menambahkan data baru
app.post("/api/data", async (req, res) => {
  try {
    const newData = req.body; // Data yang dikirimkan oleh client
    const files = req.files;
    await client.connect(); // Terhubung ke MongoDB
    const database = client.db("database");
    const collection = database.collection("bucket");

    // Memasukkan data baru ke dalam koleksi
    const result = await collection.insertOne(newData);
    res.status(201).json(result.ops); // Kirim kembali data yang ditambahkan
  } catch (error) {
    console.error("Error adding data:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    await client.close(); // Tutup koneksi MongoDB setelah selesai
  }
});

// Endpoint menambah file
app.post("/api/data/upload", upload.array("file"), (req, res) => {
  const file = req.files;
  const body = req.body;

  res.status(200).json({ message: "File uploaded successfully" });
});

// Endpoint untuk menghapus data berdasarkan ID
app.delete("/api/data/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await client.connect(); // Terhubung ke MongoDB
    const database = client.db("database");
    const collection = database.collection("bucket");

    // Hapus data berdasarkan ID
    await collection.deleteOne({ _id: new ObjectId(id) });

    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    await client.close(); // Tutup koneksi MongoDB setelah selesai
  }
});

// Endpoint untuk memperbarui data berdasarkan ID
app.put("/api/data/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newData = req.body;
    const files = req.files;

    await client.connect(); // Terhubung ke MongoDB
    const database = client.db("database");
    const collection = database.collection("bucket");

    // Lakukan pembaruan data di database
    const result = await collection.updateOne(
      { _id: new ObjectId(id) }, // Filter data berdasarkan ID
      { $set: newData } // Data baru yang akan diupdate
    );

    // Periksa apakah data berhasil diupdate
    if (result.modifiedCount === 1) {
      res.status(200).json({ message: "Data updated successfully" });
    } else {
      res.status(404).json({ message: "Data not found" });
    }
  } catch (error) {
    console.error("Error updating data:", error);
    res.status(500).json({ message: "Internal server error" });
  } finally {
    await client.close();
  }
});

// Menjalankan server pada port yang telah ditentukan
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
