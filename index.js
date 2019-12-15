/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function(date) {
    var _date = new Date(date);
    var DateCalc = {
        date: _date,

        add: function(count, scale) {

            return this;
        },
        subtract: function(count, mesurment) {

            return this;
        },
        get value() {

            return `${year}-${month}-${day} ${hour}:${minute}`;
        }
    }
};