import React from "react";
export var StudentCard = function (_a) {
    var student = _a.student, serialNo = _a.serialNo;
    return (React.createElement("div", { className: "p-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg shadow-md" },
        React.createElement("h2", { className: "text-xl font-bold" },
            "S.No: ",
            serialNo),
        React.createElement("h2", { className: "text-xl font-bold" }, student.name),
        React.createElement("p", null,
            "Age: ",
            student.age),
        React.createElement("p", null,
            "Marks: ",
            student.marks),
        React.createElement("p", null,
            "Roll Number: ",
            student.rollNumber),
        React.createElement("p", null,
            "Class: ",
            student.class),
        React.createElement("p", null,
            "City: ",
            student.city),
        React.createElement("p", null,
            "Attendance: ",
            student.attendance)));
};
