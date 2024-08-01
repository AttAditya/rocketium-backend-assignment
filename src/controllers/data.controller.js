const { generateID, stringSort, numberSort } = require('../utils');
const database = require('../database');

let getAll = (req, res) => {
    let resultData = Object.values(database.getAll());

    if (req.query.sort) {
        let field = req.query.sort;

        if (field === "name") {
            resultData.sort((a, b) => stringSort(a.name, b.name));
        }

        if (field === "language") {
            resultData.sort((a, b) => stringSort(a.language, b.language));
        }

        if (field === "version") {
            resultData.sort((a, b) => numberSort(a.version, b.version));
        }

        if (["true", ""].includes(req.query.desc?.toLowerCase())) {
            resultData.reverse();
        }
    }

    res.json(resultData);
};

let getItem = (req, res) => {
    let id = req.params.id;
    let item = database.getOne(id);

    if (!item) {
        res.status(404).send("Item not found");
        return;
    }

    res.json(item);
}

let createItem = (req, res) => {
    let item = {
        name: req.body.name,
        language: req.body.language,
        bio: req.body.bio,
        version: req.body.version
    };

    if (!item.name) {
        res.status(400).send("Name is required");
        return;
    }

    item.id = generateID();
    database.updateOne(item.id, item);

    res.json(item);
}

let updateItem = (req, res) => {
    let id = req.params.id;
    let item = database.getOne(id);

    if (!item) {
        res.status(404).send("Item not found");
        return;
    }

    item.name = req.body.name || item.name;
    item.language = req.body.language || item.language;
    item.bio = req.body.bio || item.bio;
    item.version = req.body.version || item.version;

    database.updateOne(id, item);
    res.json(item);
}

let deleteItem = (req, res) => {
    let id = req.params.id;
    let item = database.getOne(id);

    if (!item) {
        res.status(404).send("Item not found");
        return;
    }

    database.deleteOne(id);
    res.json(item);
}

let dataController = {
    getAll,
    getItem,
    createItem,
    updateItem,
    deleteItem
};

module.exports = dataController;