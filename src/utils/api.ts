// Import the Student type
import { Student } from "../types/types";

// Import students data from the JSON file
import students from "../students.json";

/**
 * Simulates an API call to fetch students with pagination.
 * @param pageSize - Number of students per page
 * @param pageNumber - Current page number (1-based index)
 * @returns A Promise resolving to a list of students for the requested page
 */
export const getStudents = (pageSize: number, pageNumber: number): Promise<{ data: Student[]; total: number }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const startIndex = (pageNumber - 1) * pageSize;
      const paginatedData = students.slice(startIndex, startIndex + pageSize);
      resolve({ data: paginatedData, total: students.length }); // Return total count
    }, 2000); // Simulating a 2-second API delay
  });
};
