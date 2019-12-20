/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function(date) {
    var _date = new Date(date);
    _date.setMinutes(_date.getMinutes() + Math.abs(_date.getTimezoneOffset()));
    var SCALE = ['years', 'months', 'days', 'hours', 'minutes']
    return {
        add: function(count, scale) {
            if (count < 0 || !SCALE.includes(scale)) {
                throw new TypeError();
            }
            switch (scale) {
                case 'years':
                    _date.setFullYear(_date.getFullYear() + count);
                    break;
                case 'months':
                    _date.setMonth(_date.getMonth() + count);
                    break;
                case 'days':
                    _date.setDate(_date.getDate() + count);
                    break;
                case 'hours':
                    _date.setHours(_date.getHours() + count);
                    break;
                case 'minutes':
                    _date.setMinutes(_date.getMinutes() + count);
                    break;
            };
            return this;
        },
        subtract: function(count, scale) {
            if (count < 0 || !SCALE.includes(scale)) {
                throw new TypeError();
            }
            switch (scale) {
                case 'years':
                    _date.setFullYear(_date.getFullYear() - count);
                    break;
                case 'months':
                    _date.setMonth(_date.getMonth() - count);
                    break;
                case 'days':
                    _date.setDate(_date.getDate() - count);
                    break;
                case 'hours':
                    _date.setHours(_date.getHours() - count);
                    break;
                case 'minutes':
                    _date.setMinutes(_date.getMinutes() - count);
                    break;
            };
            return this;
        },
        get value() {
            return _date.toISOString().slice(0, 16).replace('T', ' ');
        }
    }
}