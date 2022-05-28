const got = require('got');
const pathPrefix = '/rest/v1';

module.exports = {
    getRequest: async function(path, header, searchParamsAsJson) {

        try {
            return await got.get(apiEndpoint, {
                headers: header,
                searchParams: searchParamsAsJson,
                retry: 0,
                responseType: 'json'
            });
        } catch (error) {
            Logs.consoleLog(`request to:${path} throws an excecption ${error.toString()}`, "failed");
            throw error;
        }
    },
    postRequest: async function(path, header, jsonBody) {

        try {
            return await got.post(apiEndpoint, {
                headers: header,
                json: jsonBody,
                retry: 0,
                responseType: 'json'
            });
        } catch (error) {
            Logs.consoleLog(`request to:${path} throws an excecption ${error.toString()}`, "failed");
            throw error;
        }
    },
    deleteRequest: async function(path, header, searchParamsAsJson) {
        try {
            return await got.delete(apiEndpoint, {
                headers: header,
                searchParams: searchParamsAsJson,
                retry: 0,
                responseType: 'json'
            });
        } catch (error) {
            Logs.consoleLog(`request to:${path} throws an excecption ${error.toString()}`, "failed");
            throw error;
        }
    }
}