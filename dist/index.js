'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (name, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
        // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // requirejs - amd canon
        define(factory);
    } else if (window) {
        // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('isLeapYear', function () {
    /**
     * @description 检测是否是闰年
     * @param {Number} year - 年
     * */
    function isLeapYear(year) {
        year = Number(year);
        // 能被4整数但是不能被100整除或者能直接被400整除表示是闰年
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }

    return isLeapYear;
});