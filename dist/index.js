"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const app = require("express")();
const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.status(200).send("Hello World");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
