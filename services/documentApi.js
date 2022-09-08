'use strict'

const { default: axios } = require("axios");

module.exports = {
    get(api, coll, id) {
        return axios.get(`${api.url}/app/colls/${coll}/docs/${id}`, options(api));
    },
    create(api, coll, doc) {
        return axios.post(`${api.url}/app/colls/${coll}/docs`, doc, options(api));
    },
    update(api, coll, doc) {
        return axios.put(`${api.url}/app/colls/${coll}/docs/${doc._id}`, doc, options(api));
    },
    delete(api, coll, doc) {
        return axios.delete(`${api.url}/app/colls/${coll}/docs/${doc._id}`, options(api));
    },
    find(api, coll, query) {
        return axios.post(`${api.url}/app/colls/${coll}/docs/find`, query, options(api));
    }
}

function options(api) {
    return { headers: headers(api) }
}

function headers(api) {
    return { Authorization: `Bearer ${api.token}` }
}
