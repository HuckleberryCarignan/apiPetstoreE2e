'use strict';
const chaiHttpUtil = require('../utilities/apiUtils-chaihttp.js');
const applicationJson = 'application/json, text/plain, /';
const { getRequest } = require('../utilities/apiUtils-chaihttp.js');
// if a environment was passed in, use it, otherwise set it to a default - in this case staging
const environment = process.env.environment ? process.env.environment : 'staging';
const envConfig = require(`../settings/env/${environment}-url-config.js`);
const pathPrefix = '/rest/v1';

module.exports = {
    /**
     * getToken async function gets token for future API calls
     * @param {String} tokenUsername
     * @param {String} tokenPassword
     * @return {object}
     */
    getToken: async function(tokenUsername, tokenPassword) {
        let foo =envConfig.BaseUrl;
        return await chaiHttpUtil.postRequest(
            `${pathPrefix}/account/signin`,
            { accept: applicationJson }, 
            {
                Email: tokenUsername,
                Password: tokenPassword,
            },
            envConfig.BaseUrl);
    },

     /**
     * A better way to format error messages
     * @param {Object} responseObject error message
     * @return {String}
     */
    detailedErrorMessage: async function(responseObject) {
        return `Request to endpoint: ${JSON.stringify(responseObject.request)} \n \nReturn error Message: ${JSON.stringify(responseObject.text)} \n \n`;
    }

}