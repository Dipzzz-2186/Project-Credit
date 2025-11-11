// app.js

const path = require("path");
const express = require("express");

const app = express();

// ==========================================================
// 1. Static ASSETS (CSS, JS, Gambar, dari folder src dan vendors)
// Asumsi aset diakses melalui prefix /public/
// ==========================================================
// Akses: /public/src/...
app.use('/public/src', express.static(path.join(__dirname, "src")));
// Akses: /public/vendors/...
app.use('/public/vendors', express.static(path.join(__dirname, "vendors")));


// ==========================================================
// 2. Static PAGES (File .html di root folder)
// Ini memungkinkan akses langsung ke semua file HTML Anda dari root.
// Misalnya: /index.html, /cards-basic.html
// ==========================================================
// Express akan melayani semua file statis dari root direktori (__dirname)
app.use(express.static(__dirname));


// ==========================================================
// 3. Home route (Root URL: /)
// Mengarahkan '/' langsung ke index.html di root
// ==========================================================
app.get("/", (req, res) => {
    // res.sendFile mencari index.html di direktori saat ini (__dirname)
    res.sendFile(path.join(__dirname, "index.html"));
});


// 404 friendly
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server berjalan di http://localhost:${PORT}`);
    console.log("Pastikan Anda sudah mengoreksi jalur aset di semua file HTML Anda!");
});