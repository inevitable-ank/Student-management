// import React, { useState, useEffect, ChangeEvent } from "react";
// import { getStudents } from "../utils/api";
// import { StudentTable } from "../components/StudentTable";
// import { StudentCard } from "../components/StudentCard";
// import { Pagination } from "../components/Pagination";
// import { Student } from "../types/types";
// import InfiniteScroll from "react-infinite-scroll-component";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// export const StudentManagement: React.FC = () => {
//   const [baseStudents, setBaseStudents] = useState<Student[]>([]); 
//   const [students, setStudents] = useState<Student[]>([]); 
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [isMobileView, setIsMobileView] = useState<boolean>(false);
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [sortField, setSortField] = useState<keyof Student>("name");
//   const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
//   const [loading, setLoading] = useState<boolean>(false);
//   const [darkMode, setDarkMode] = useState<boolean>(false);
//   const [totalStudents, setTotalStudents] = useState<number>(0);
//   const [hasMore, setHasMore] = useState<boolean>(true);
//   const pageSize = 10;
//   useEffect(() => {
//     const html = document.documentElement;
//     if (darkMode) {
//       html.classList.add("dark");
//     } else {
//       html.classList.remove("dark");
//     }
//   }, [darkMode]);
//   // Fetch students data with pagination
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       const { data, total } = await getStudents(pageSize, currentPage);
//       if (currentPage === 1) {
//         setBaseStudents(data); 
//       } else {
//         setBaseStudents((prev) => [...prev, ...data]); 
//       }
//       setTotalStudents(total);
//       setHasMore(currentPage * pageSize < total);
//       setLoading(false);
//     };
//     fetchData();
//   }, [currentPage]);
//   // Infinite scroll load more handler
//   const fetchMoreData = async () => {
//     if (hasMore) {
//       setCurrentPage((prevPage) => prevPage + 1); // Increment page number
//     }
//   };
//   // Update view mode based on screen size
//   useEffect(() => {
//     const updateView = () => {
//       setIsMobileView(window.innerWidth < 768);
//     };
//     updateView();
//     window.addEventListener("resize", updateView);
//     return () => window.removeEventListener("resize", updateView);
//   }, []);
//   // Handle search input changes
//   const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value.toLowerCase());
//     setCurrentPage(1); // Reset to the first page when searching
//   };
//   // Handle sorting
//   const handleSort = (field: keyof Student) => {
//     const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
//     setSortField(field);
//     setSortOrder(order);
//     // Reset pagination and apply sorting
//     const sortedData = [...baseStudents].sort((a, b) => {
//       if (a[field] < b[field]) return order === "asc" ? -1 : 1;
//       if (a[field] > b[field]) return order === "asc" ? 1 : -1;
//       return 0;
//     });
//     setStudents(sortedData);
//     // setCurrentPage(1); // Reset to the first page after sorting
//   };
//   // Filter students dynamically based on search query
//   useEffect(() => {
//     const filtered = baseStudents.filter(
//       (student) =>
//         student.name.toLowerCase().includes(searchQuery) ||
//         student.rollNumber.toLowerCase().includes(searchQuery)
//     );
//     setStudents(filtered);
//   }, [baseStudents, searchQuery]);
//   const totalPages = Math.ceil(totalStudents / pageSize);
//   return (
//     <div className="p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
//       {/* Header with Dark Mode Toggle */}
//       <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6 gap-4">
//         <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 drop-shadow-lg text-center sm:text-left">
//           🌟 Student Management 🌟
//         </h1>
//         <button
//           className="px-5 py-2 bg-white text-gray-800 dark:bg-gray-700 dark:text-white font-semibold rounded-lg shadow-md hover:scale-105 transform transition-all duration-200"
//           onClick={() => setDarkMode(!darkMode)}
//         >
//           {darkMode ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌙"}
//         </button>
//       </div>
//       {/* Search and Sort Controls */}
//       <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6 gap-4">
//         <input
//           type="text"
//           placeholder="🔍 Search by Name or Roll Number"
//           value={searchQuery}
//           onChange={handleSearch}
//           className="p-3 w-full sm:w-1/2 bg-white text-gray-800 dark:bg-gray-700 dark:text-white rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300"
//         />
//         {!isMobileView && (
//           <div className="flex gap-4">
//             {["name", "age", "marks"].map((field) => (
//               <button
//                 key={field}
//                 className="px-4 py-2 font-medium text-gray-800 dark:text-white bg-gradient-to-r from-teal-400 to-blue-500 dark:from-blue-600 dark:to-indigo-700 rounded-lg shadow-md hover:scale-105 transform transition-all duration-200"
//                 onClick={() => handleSort(field as keyof Student)}
//               >
//                 Sort by {field.charAt(0).toUpperCase() + field.slice(1)}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//       {/* Loading Spinner or Content */}
//       {loading && (
//         <div className="flex justify-center items-center">
//           <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
//         </div>
//       )}
//       {students.length === 0 && !loading ? (
//         <p className="text-center text-gray-500">No students found.</p>
//       ) : isMobileView ? (
//         <InfiniteScroll
//           dataLength={students.length}
//           next={fetchMoreData}
//           hasMore={hasMore}
//           loader={<h4 className="text-center">Loading more...</h4>}
//           endMessage={
//             <p className="text-center text-gray-500 mt-4">
//               🎉 You have seen all students!
//             </p>
//           }
//         >
//           <div className="grid gap-4">
//             {students.map((student, index) => (
//               <StudentCard
//                 key={student.rollNumber}
//                 student={student}
//                 serialNo={(currentPage - 1) * pageSize + index + 1}
//               />
//             ))}
//           </div>
//         </InfiniteScroll>
//       ) : (
//         <StudentTable
//           students={students.slice(
//             (currentPage - 1) * pageSize,
//             currentPage * pageSize
//           )}
//           currentPage={currentPage}
//           pageSize={pageSize}
//           onSort={handleSort}
//           sortField={sortField}
//           sortOrder={sortOrder}
//         />
//       )}
//       {!isMobileView && (
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={setCurrentPage}
//         />
//       )}
//     </div>
//   );
// };
// code 2
import React, { useState, useEffect } from "react";
import { getStudents } from "../utils/api";
import { StudentTable } from "../components/StudentTable";
import { StudentCard } from "../components/StudentCard";
import { Pagination } from "../components/Pagination";
import InfiniteScroll from "react-infinite-scroll-component";
export var StudentManagement = function () {
    var _a = useState([]), baseStudents = _a[0], setBaseStudents = _a[1];
    var _b = useState([]), students = _b[0], setStudents = _b[1];
    var _c = useState(1), currentPage = _c[0], setCurrentPage = _c[1];
    var _d = useState(false), isMobileView = _d[0], setIsMobileView = _d[1];
    var _e = useState(""), searchQuery = _e[0], setSearchQuery = _e[1];
    var _f = useState("name"), sortField = _f[0], setSortField = _f[1];
    var _g = useState("asc"), sortOrder = _g[0], setSortOrder = _g[1];
    var _h = useState(false), loading = _h[0], setLoading = _h[1];
    var _j = useState(false), darkMode = _j[0], setDarkMode = _j[1];
    var _k = useState(0), totalStudents = _k[0], setTotalStudents = _k[1];
    var _l = useState(true), hasMore = _l[0], setHasMore = _l[1];
    var pageSize = 10;
    useEffect(function () {
        var html = document.documentElement;
        if (darkMode) {
            html.classList.add("dark");
        }
        else {
            html.classList.remove("dark");
        }
    }, [darkMode]);
    // Fetch students data with pagination
    useEffect(function () {
        var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, data, total;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        setLoading(true);
                        return [4 /*yield*/, getStudents(pageSize, currentPage)];
                    case 1:
                        _a = _b.sent(), data = _a.data, total = _a.total;
                        if (currentPage === 1) {
                            setBaseStudents(data);
                            setStudents(data);
                        }
                        else {
                            setBaseStudents(function (prev) { return __spreadArray(__spreadArray([], prev, true), data, true); });
                            setStudents(function (prev) { return __spreadArray(__spreadArray([], prev, true), data, true); });
                        }
                        setTotalStudents(total);
                        setHasMore(currentPage * pageSize < total);
                        setLoading(false);
                        return [2 /*return*/];
                }
            });
        }); };
        fetchData();
    }, [currentPage]);
    // Infinite scroll load more handler
    var fetchMoreData = function () { return __awaiter(void 0, void 0, void 0, function () {
        var nextPage, data_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!hasMore) return [3 /*break*/, 2];
                    nextPage = currentPage + 1;
                    return [4 /*yield*/, getStudents(pageSize, nextPage)];
                case 1:
                    data_1 = (_a.sent()).data;
                    setBaseStudents(function (prev) { return __spreadArray(__spreadArray([], prev, true), data_1, true); });
                    setStudents(function (prev) { return __spreadArray(__spreadArray([], prev, true), data_1, true); });
                    setCurrentPage(nextPage);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    // Update view mode based on screen size
    useEffect(function () {
        var updateView = function () {
            setIsMobileView(window.innerWidth < 768);
        };
        updateView();
        window.addEventListener("resize", updateView);
        return function () { return window.removeEventListener("resize", updateView); };
    }, []);
    // Handle search input changes
    var handleSearch = function (e) {
        setSearchQuery(e.target.value.toLowerCase());
        var filtered = baseStudents.filter(function (student) {
            return student.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
                student.rollNumber.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setStudents(filtered);
        setHasMore(false); // Disable infinite scrolling during search
    };
    // Handle sorting
    var handleSort = function (field) {
        var order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
        setSortField(field);
        setSortOrder(order);
        var sortedData = __spreadArray([], students, true).sort(function (a, b) {
            if (a[field] < b[field])
                return order === "asc" ? -1 : 1;
            if (a[field] > b[field])
                return order === "asc" ? 1 : -1;
            return 0;
        });
        setStudents(sortedData);
    };
    var totalPages = Math.ceil(totalStudents / pageSize);
    return (React.createElement("div", { className: "p-6 bg-gray-100 dark:bg-gray-800 min-h-screen" },
        React.createElement("div", { className: "flex flex-col sm:flex-row sm:justify-between items-center mb-6 gap-4" },
            React.createElement("h1", { className: "text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 drop-shadow-lg text-center sm:text-left" }, "\uD83C\uDF1F Student Management \uD83C\uDF1F"),
            React.createElement("button", { className: "px-5 py-2 bg-white text-gray-800 dark:bg-gray-700 dark:text-white font-semibold rounded-lg shadow-md hover:scale-105 transform transition-all duration-200", onClick: function () { return setDarkMode(!darkMode); } }, darkMode ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌙")),
        React.createElement("div", { className: "flex flex-col sm:flex-row sm:justify-between items-center mb-6 gap-4" },
            React.createElement("input", { type: "text", placeholder: "\uD83D\uDD0D Search by Name or Roll Number", value: searchQuery, onChange: handleSearch, className: "p-3 w-full sm:w-1/2 bg-white text-gray-800 dark:bg-gray-700 dark:text-white rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300" }),
            !isMobileView && (React.createElement("div", { className: "flex gap-4" }, ["name", "age", "marks"].map(function (field) { return (React.createElement("button", { key: field, className: "px-4 py-2 font-medium text-gray-800 dark:text-white bg-gradient-to-r from-teal-400 to-blue-500 dark:from-blue-600 dark:to-indigo-700 rounded-lg shadow-md hover:scale-105 transform transition-all duration-200", onClick: function () { return handleSort(field); } },
                "Sort by ",
                field.charAt(0).toUpperCase() + field.slice(1))); })))),
        loading && (React.createElement("div", { className: "flex justify-center items-center" },
            React.createElement("div", { className: "animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500" }))),
        students.length === 0 && !loading ? (React.createElement("p", { className: "text-center text-gray-500" }, "No students found.")) : isMobileView ? (React.createElement(InfiniteScroll, { dataLength: students.length, next: fetchMoreData, hasMore: hasMore, loader: React.createElement("h4", { className: "text-center" }, "Loading more..."), endMessage: React.createElement("p", { className: "text-center text-gray-500 mt-4" }, "\uD83C\uDF89 You have seen all students!") },
            React.createElement("div", { className: "grid gap-4" }, students.map(function (student, index) { return (React.createElement(StudentCard, { key: student.rollNumber, student: student, serialNo: index + 1 })); })))) : (React.createElement(StudentTable, { students: students.slice((currentPage - 1) * pageSize, currentPage * pageSize), currentPage: currentPage, pageSize: pageSize, onSort: handleSort, sortField: sortField, sortOrder: sortOrder })),
        !isMobileView && (React.createElement(Pagination, { currentPage: currentPage, totalPages: totalPages, onPageChange: setCurrentPage }))));
};
