import students from "../students.json";
/**
 * @param pageSize
 * @param pageNumber
 * @returns
 */
export var getStudents = function (pageSize, pageNumber) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            var startIndex = (pageNumber - 1) * pageSize;
            var paginatedData = students.slice(startIndex, startIndex + pageSize);
            resolve({ data: paginatedData, total: students.length });
        }, 2000);
    });
};
