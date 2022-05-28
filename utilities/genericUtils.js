'use strict';

module.exports = {
    /**
     * @return {string}
     */
    randomNameGenerator: function(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    },

    randomNumberGenerator: function(length) {
        return Math.floor(Math.random() * ((length**10)));
    }
}