import React from "react";
import { StudentManagement } from "./pages/StudentManagement";
var App = function () {
    return (React.createElement("div", { className: "bg-gray-100 min-h-screen" },
        React.createElement(StudentManagement, null)));
};
export default App;
