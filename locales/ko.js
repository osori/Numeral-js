// numeral.js locale configuration
// locale : korean (ko)
// author : Ilkyu Ju : https://github.com/osori

(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['../numeral'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('../numeral'));
    } else {
        factory(global.numeral);
    }
}(this, function (numeral) {
    numeral.register('locale', 'ja', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: '천',
            million: '백만',
            billion: '0억',
            trillion: '조'
        },
        ordinal: function (number) {
            return '.';
        },
        currency: {
            symbol: '₩'
        }
    });
}));
