import React from "react";
import { Student } from "../types/types";

interface StudentCardProps {
  student: Student; // Props include a single student of type Student
}

export const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md border mb-4">
      <h2 className="text-xl font-semibold">{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>Marks: {student.marks}</p>
      <p>Roll No: {student.rollNumber}</p>
    </div>
  );
};
