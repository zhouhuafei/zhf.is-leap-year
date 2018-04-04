const isLeapYear = require('../dist/index.min');

test(`检测是否是闰年`, () => {
    expect(isLeapYear(2000)).toEqual(true);
    expect(isLeapYear(2012)).toEqual(true);
    expect(isLeapYear(2013)).toEqual(false);
    expect(isLeapYear(2014)).toEqual(false);
    expect(isLeapYear(2015)).toEqual(false);
    expect(isLeapYear(2016)).toEqual(true);
    expect(isLeapYear(2017)).toEqual(false);
    expect(isLeapYear(2018)).toEqual(false);
});
