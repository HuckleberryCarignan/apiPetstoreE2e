    'use strict';
const {
    getRequest,
    postRequest,
    deleteRequest, 
    putRequest } = require('../utilities/apiUtils-chaihttp.js');
const applicationJson = 'application/json';
// if a environment was passed in, use it, otherwise set it to a default - in this case staging
const environment = process.env.environment ? process.env.environment : 'interview';
const envConfig = require(`../settings/env/${environment}-url-config.js`);
const pathPrefix = 'v2/';

module.exports = {
    /**
     * Get pet order from Petstore give order id
     * @param {int} petId id for the pet to be retrieved
     * @return {object} response object
     */
    getPet: async function (petId) {
        return await getRequest(
            `${pathPrefix}pet/${petId}`,
            {
                accept: applicationJson
            },
            {},
            envConfig.BaseUrlPetstore);
    },

    /**
    * Post new pet order from Petstore given order id
    * @param {Object} petOrder id for the pet to be retrieved
    * @param {Ob}
    * @return {object} response object
    */
    postPet: async function (petOrder) {
        return await postRequest(
            `${pathPrefix}pet`, 
            {
                accept: applicationJson
            },
            petOrder,
            envConfig.BaseUrlPetstore);
    },

    /**
    * Update pet order from Petstore given order id
    * @param {Object} petId id for the pet to be retrieved
    * @return {object} response object
    */
    updatePet: async function (petOrder) {
        return await putRequest(
            `${pathPrefix}pet`,
            {
                accept: applicationJson
            },
            petOrder,
            envConfig.BaseUrlPetstore);
    },

    /**
     * Delete pet order from Petstore given order id
    * @param {Object} petId id for the pet to be retrieved
    * @return {object} response object
    */
    deletePet: async function (petId) {
        return await deleteRequest(
            `${pathPrefix}pet/${petId}`, 
            {
                accept: applicationJson
            },
            envConfig.BaseUrlPetstore);
    }
}