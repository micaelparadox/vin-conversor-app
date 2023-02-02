const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use("/", require("./routes/index"));

// app.use(express.static("public"));

const Car = require('./models/car');

Car.create({
    marca: 'Audi',
    modelo: 'A3',
    ano: 2019,
    software: 'V1.0.0',
    hardware: 'HW2.0',
    longCoding: '70FB6BA1502021724777060260C9A90ED60A84E2600695773842F50952094B0B0000000012121212B835351919323200',
    chassis: 'WAUBFGFF5G1099999'
});
