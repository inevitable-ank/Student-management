import React from "react";
import { Student } from "../types/types";

interface StudentCardProps {
  student: Student;
  serialNo: number; 
}

export const StudentCard: React.FC<StudentCardProps> = ({ student, serialNo }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">S.No: {serialNo}</h2>
      <h2 className="text-xl font-bold">{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Marks: {student.marks}</p>
      <p>Roll Number: {student.rollNumber}</p>
      <p>Class: {student.class}</p>
      <p>City: {student.city}</p>
      <p>Attendance: {student.attendance}</p>
    </div>
  );
};
