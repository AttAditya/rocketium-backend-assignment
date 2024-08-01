const express = require('express');
const app = express();

const apiRouter = require('./src/routes');
const database = require('./src/database');

app.use(express.json());
app.use("/api", apiRouter);

let initialDataURL = "https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json";

async function setup() {
    let response = await fetch(initialDataURL);
    let jsonData = await response.json();

    for (let item of jsonData) {
        database.updateOne(item.id, item);
    }

    console.log("Data loaded");
}

async function startServer(PORT) {
    await setup();

    app.listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}`);
    });
}

startServer(3000);