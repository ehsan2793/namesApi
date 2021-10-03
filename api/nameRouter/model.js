const db = require('../../data/connection');

const get = async () => {
    return db('names');
};

const getById = (id) => {
    return db('names').where('id', id).first();
};

const create = async ({ name, age, email }) => {
    const inserted = await db('names').insert({ name, age, email });
    return getById(...inserted);
};

module.exports = {
    get,
    getById,
    create,
};
