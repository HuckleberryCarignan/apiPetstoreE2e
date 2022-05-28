'use strict';
let chai = require("chai");
var chaihttp = require("chai-http");
chai.use(chaihttp);
const pathPrefix = '/rest/v1';

module.exports = {
    /**
     * getToken async function gets token for future API calls
     * @param {String} path path to end point (after the base url)
     * @param {Object} headers header object
     * @param {Object} jsonBody JSON body of parameters
     * @param {String} url base url
     * @return {object}
     */
    postRequest: async function (path, headers, jsonBody, url) {
        let request = chai.request(url);
        return request
            .post(path)
            .set(headers)
            .send(jsonBody)
            .then((response) => {
                return response;
            }).catch(error => {
                console.log(`request to:${path} throws an excecption ${error.toString()}`, "failed");
                throw error;
            });
    },
    /**
     * getToken async function gets token for future API calls
     * @param {String} path path to end point (after the base url)
     * @param {Object} headers header object
     * @param {String} url base url
     * @return {object}
     */
    deleteRequest: async function (path, headers, url) {
        let request = chai.request(url);
        return request
            .delete(path)
            .set(headers)
            .then((response) => {
                return response;
            }).catch(error => {
                console.log(`request to:${path} throws an excecption ${error.toString()}`, "failed");
                throw error;
            });
    },

        /**
     * getToken async function gets token for future API calls
     * @param {String} path path to end point (after the base url)
     * @param {Object} headers header object
     * @param {Object} updateParamsAsJson update parameters
     * @param {String} url base url
     * @return {object}
     */

    putRequest: async function (path, headers, updateParamsAsJson, url) {
        let request = chai.request(url);
        return request
            .put(path)
            .set(headers)
            .put(updateParamsAsJson)
            .then((response) => {
                return response;
            }).catch(error => {
                console.log(`request to:${path} throws an excecption ${error.toString()}`, "failed");
                throw error;
            });
    },

    /**
     * getToken async function gets token for future API calls
     * @param {String} path path to end point (after the base url)
     * @param {Object} headers header object
     * @param {Object} searchParamsAsJson search parameters
     * @param {String} url base url
     * @return {object}
     */
    getRequest: async function (path, headers, searchParamsAsJson, url) {
        let request = chai.request(url);
        return request
            .get(path)
            .set(headers)
            .query(searchParamsAsJson)
            .then((response) => {
                return response;
            }).catch(error => {
                console.log(`request to:${path} throws an excecption ${error.toString()}`, "failed");
                throw error;
            });
    }
}