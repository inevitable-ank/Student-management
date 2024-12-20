var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from "react";
export var Pagination = function (_a) {
    var currentPage = _a.currentPage, totalPages = _a.totalPages, onPageChange = _a.onPageChange;
    return (React.createElement("div", { className: "flex justify-center space-x-2 my-4" },
        React.createElement("button", { className: "px-3 py-1 bg-gray-200 rounded", disabled: currentPage === 1, onClick: function () { return onPageChange(currentPage - 1); } }, "Previous"),
        __spreadArray([], Array(totalPages), true).map(function (_, i) { return (React.createElement("button", { key: i, className: "px-3 py-1 ".concat(currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200", " rounded"), onClick: function () { return onPageChange(i + 1); } }, i + 1)); }),
        React.createElement("button", { className: "px-3 py-1 bg-gray-200 rounded", disabled: currentPage === totalPages, onClick: function () { return onPageChange(currentPage + 1); } }, "Next")));
};
