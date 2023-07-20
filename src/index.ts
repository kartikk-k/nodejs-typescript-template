import { Request, Response, Express } from "express";
require('dotenv').config()

// create express app
const app:Express = require("express")();

const PORT = process.env.PORT || 3000;

app.get('/', (req:Request, res:Response) => {
    res.status(200).send("Hello World");
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})