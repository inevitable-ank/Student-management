import React from "react";
export var StudentTable = function (_a) {
    var students = _a.students, currentPage = _a.currentPage, pageSize = _a.pageSize, onSort = _a.onSort, sortField = _a.sortField, sortOrder = _a.sortOrder;
    return (React.createElement("div", { className: "overflow-x-auto" },
        React.createElement("table", { className: "min-w-full bg-white border border-gray-300" },
            React.createElement("thead", null,
                React.createElement("tr", { className: "bg-gray-200 text-gray-700" },
                    React.createElement("th", { className: "px-4 py-2" }, "S.No"),
                    React.createElement("th", { className: "px-4 py-2 cursor-pointer", onClick: function () { return onSort("name"); } },
                        "Name ",
                        sortField === "name" && (sortOrder === "asc" ? "↑" : "↓")),
                    React.createElement("th", { className: "px-4 py-2 cursor-pointer", onClick: function () { return onSort("age"); } },
                        "Age ",
                        sortField === "age" && (sortOrder === "asc" ? "↑" : "↓")),
                    React.createElement("th", { className: "px-4 py-2 cursor-pointer", onClick: function () { return onSort("marks"); } },
                        "Marks ",
                        sortField === "marks" && (sortOrder === "asc" ? "↑" : "↓")),
                    React.createElement("th", { className: "px-4 py-2" }, "Roll Number"),
                    React.createElement("th", { className: "px-4 py-2" }, "Class"),
                    React.createElement("th", { className: "px-4 py-2" }, "City"),
                    React.createElement("th", { className: "px-4 py-2" }, "Attendance"))),
            React.createElement("tbody", null, students.map(function (student, index) { return (React.createElement("tr", { key: student.rollNumber, className: "text-center" },
                React.createElement("td", { className: "px-4 py-2" }, (currentPage - 1) * pageSize + index + 1),
                React.createElement("td", { className: "px-4 py-2" }, student.name),
                React.createElement("td", { className: "px-4 py-2" }, student.age),
                React.createElement("td", { className: "px-4 py-2" }, student.marks),
                React.createElement("td", { className: "px-4 py-2" }, student.rollNumber),
                React.createElement("td", { className: "px-4 py-2" }, student.class),
                React.createElement("td", { className: "px-4 py-2" }, student.city),
                React.createElement("td", { className: "px-4 py-2" }, student.attendance))); })))));
};
