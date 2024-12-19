import React, { useState, useEffect, ChangeEvent } from "react";
import { getStudents } from "../utils/api";
import { StudentTable } from "../components/StudentTable";
import { StudentCard } from "../components/StudentCard";
import { Pagination } from "../components/Pagination";
import { Student } from "../types/types";

export const StudentManagement: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortField, setSortField] = useState<keyof Student>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [loading, setLoading] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const pageSize = 10;

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  // Fetch students data when the currentPage changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getStudents(pageSize, currentPage);
      setStudents(data);
      setLoading(false);
    };

    fetchData();
  }, [currentPage]);

  // Update view mode based on screen size
  useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  // Handle search input changes
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Handle sorting
  const handleSort = (field: keyof Student) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
  };

  // Filter and sort students dynamically
  const filteredStudents = students
    .filter(
      (student) =>
        student.name.toLowerCase().includes(searchQuery) ||
        student.rollNumber.toLowerCase().includes(searchQuery)
    )
    .sort((a, b) => {
      if (a[sortField] < b[sortField]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortField] > b[sortField]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

  const totalPages = Math.ceil(students.length / pageSize);

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 min-h-screen">
      {/* Header with Dark Mode Toggle */}
      <div className="flex justify-between items-center mb-6">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 drop-shadow-lg">🌟 Student Management 🌟</h1>
      <button
          className="px-5 py-2 bg-white text-gray-800 dark:bg-gray-700 dark:text-white font-semibold rounded-lg shadow-md hover:scale-105 transform transition-all duration-200"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌙"}
        </button>

      </div>

      {/* Search and Sort Controls */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="🔍 Search by Name or Roll Number"
          value={searchQuery}
          onChange={handleSearch}
          className="p-3 w-full sm:w-1/2 bg-white text-gray-800 dark:bg-gray-700 dark:text-white rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300"
        />
        {!isMobileView && (
          <div className="flex gap-4">
            {["name", "age", "marks"].map((field) => (
              <button
                key={field}
                className="px-4 py-2 font-medium text-gray-800 dark:text-white bg-gradient-to-r from-teal-400 to-blue-500 dark:from-blue-600 dark:to-indigo-700 rounded-lg shadow-md hover:scale-105 transform transition-all duration-200"
                onClick={() => handleSort(field as keyof Student)}
              >
                Sort by {field.charAt(0).toUpperCase() + field.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Loading Spinner or Content */}
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : filteredStudents.length === 0 ? (
        <p className="text-center text-gray-500">No students found.</p>
      ) : isMobileView ? (
        <div>
          {filteredStudents.map((student) => (
            <StudentCard key={student.rollNumber} student={student} />
          ))}
        </div>
      ) : (
        <StudentTable
          students={filteredStudents}
          onSort={handleSort}
          sortField={sortField}
          sortOrder={sortOrder}
        />
      )}

      {/* Pagination */}
      {!isMobileView && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};
