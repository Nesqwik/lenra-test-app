'use strict'

const documentApi = require("../services/documentApi")

module.exports = async (props, event, api) => {
    documentApi.create(api, "form-test", event)
}