let firstName;

module.exports.school = "Per Scholas"

module.exports.weekdays = ['Su', 'Mo','Tu','We','Th','Fr','Sa']

module.exports.getWeekday = function (dayNo) {
    if (dayNo < 0 ?? dayNo > 6) dayNo = 0;
    return this.weekdays[dayNo];
}