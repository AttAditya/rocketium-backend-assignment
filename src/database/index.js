let data = {};

function getOne(id) {
    return data[id];
}

function getAll() {
    return {...data};
}

function updateOne(id, item) {
    data[id] = item;
}

function deleteOne(id) {
    delete data[id];
}

let database = {
    getOne,
    getAll,
    updateOne,
    deleteOne
};

module.exports = database;