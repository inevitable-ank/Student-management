
import { Student } from "../types/types";


import students from "../students.json";

/**
 * @param pageSize 
 * @param pageNumber 
 * @returns 
 */
export const getStudents = (pageSize: number, pageNumber: number): Promise<{ data: Student[]; total: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const startIndex = (pageNumber - 1) * pageSize;
      const paginatedData = students.slice(startIndex, startIndex + pageSize);
      resolve({ data: paginatedData, total: students.length }); 
    }, 2000); 
  });
};



