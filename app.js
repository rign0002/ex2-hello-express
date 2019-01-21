"use strict"

const express = require("express");

const app = express();

const cars = [
    {
        id: 1,
        make: "tesla",
        model: "S",
        colour: "Black"
    },
    {
        id: 2,
        make: "tesla",
        model: "3",
        colour: "Red"
    },
    {
        id: 3,
        make: "tesla",
        model: "X",
        colour: "Silver"
    },
    {
        id: 4,
        make: "tesla",
        model: "Y",
        colour: "Brown"
    }
]

app.get("/", (request, response) => {
    response.send("Hello from Express!");

})

app.get("/api", (request, response) => {
    const payload = {
        message: "Hello from Express!",
        cars: cars
    };
    response.send({
        data: payload
    })
})


app.listen(3030, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Success!");
    }
})
