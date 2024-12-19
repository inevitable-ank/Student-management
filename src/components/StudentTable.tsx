import React from "react";
import { Student } from "../types/types";

interface StudentTableProps {
  students: Student[]; // Array of Student objects
  onSort: (field: keyof Student) => void; // Function to handle sorting
  sortField: keyof Student; // The current field being sorted
  sortOrder: "asc" | "desc"; // The current sort order
}

export const StudentTable: React.FC<StudentTableProps> = ({
  students,
  onSort,
  sortField,
  sortOrder,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => onSort("name")}
            >
              Name {sortField === "name" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => onSort("age")}
            >
              Age {sortField === "age" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th
              className="px-4 py-2 cursor-pointer"
              onClick={() => onSort("marks")}
            >
              Marks {sortField === "marks" && (sortOrder === "asc" ? "↑" : "↓")}
            </th>
            <th className="px-4 py-2">Roll Number</th>
            <th className="px-4 py-2">Class</th>
            <th className="px-4 py-2">City</th>
            <th className="px-4 py-2">Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.rollNumber} className="text-center">
              <td className="px-4 py-2">{student.name}</td>
              <td className="px-4 py-2">{student.age}</td>
              <td className="px-4 py-2">{student.marks}</td>
              <td className="px-4 py-2">{student.rollNumber}</td>
              <td className="px-4 py-2">{student.class}</td>
              <td className="px-4 py-2">{student.city}</td>
              <td className="px-4 py-2">{student.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
