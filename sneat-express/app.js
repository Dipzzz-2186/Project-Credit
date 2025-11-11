const path = require("path");
const express = require("express");

const app = express();

// -----------------------------------------------------
// 1) Static ASSETS => isi dari template: assets, js, libs, fonts
//    Copy-kan folder2 ini ke ./public (lihat struktur di bawah)
// -----------------------------------------------------
app.use(express.static(path.join(__dirname, "public")));

// -----------------------------------------------------
// 2) Static PAGES (HTML) => semua file .html dari template
//    Copy-kan folder html ke ./pages/html
//    Dengan ini, kamu bisa akses langsung:
//    /index.html, /tables-basic.html, /auth-login-basic.html, dst
// -----------------------------------------------------
app.use(express.static(path.join(__dirname, "pages", "html")));

// -----------------------------------------------------
// 3) Home route → arahkan ke index.html biar / langsung tampil
// -----------------------------------------------------
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "html", "index.html"));
});

// (Opsional) contoh mapping route pendek lain (kalau mau):
// app.get("/tables", (req, res) => {
//   res.sendFile(path.join(__dirname, "pages", "html", "tables-basic.html"));
// });

// 404 friendly (opsional)
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Sneat running at http://localhost:${PORT}`);
});
