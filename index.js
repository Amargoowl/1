/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function(date) {
    var _date = new Date(date);
    console.log(_date.toISOString());
    console.log(_date.toDateString());
    return {
        add: function(count, scale) {

            return this;
        },
        subtract: function(count, scale) {

            return this;
        },
        get value() {

            return _date.toISOString().slice(0, 16).replace('T', ' ');
        }
    }
}