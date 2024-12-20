# Student Management System

This project is a simple **Student Management System** built using React, TypeScript, TailwindCSS, and other modern web technologies. The application supports functionalities like viewing students in table or card format, infinite scrolling, sorting, searching, and switching between light and dark modes.

---

## Features

1. **Responsive Design**: 
   - Mobile and desktop-friendly views.
   - Infinite scrolling for mobile devices.

2. **Dark/Light Mode Toggle**:
   - Easily switch between dark and light themes.

3. **Search and Sort**:
   - Search students by name or roll number.
   - Sort by name, age, or marks in ascending or descending order.

4. **Pagination**:
   - View students in a paginated table in desktop view.

5. **API Simulation**:
   - Fake API implemented using `students.json` and simulated delay.

---

## Folder Structure

```plaintext
src
├── components
│   ├── StudentCard.tsx       # Card component for displaying student details
│   ├── StudentTable.tsx      # Table component for displaying students in tabular format
│   ├── Pagination.tsx        # Pagination component
├── types
│   └── types.ts              # Type definitions for Student
├── utils
│   └── api.ts                # Mock API for fetching student data
├── App.tsx                   # Entry point of the app
├── main.tsx                  # Renders the React application
├── students.json             # Static JSON data for students
└── index.css                 # Global styles including TailwindCSS
```

---

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v16 or above)
- npm or yarn

### Steps

1. Clone the repository:
```bash
git clone https://github.com/your-repo/student-management.git
```

2. Navigate to the project directory:
```bash
cd student-management
```

3. Install dependencies:
```bash
npm install
```

4. Run the development server:
```bash
npm run dev
```

5. Open the app in your browser at:
```
http://localhost:5173
```

---

## Key Files Explained

### `StudentCard.tsx`
Displays student details in a card format. Used in mobile views with infinite scrolling.

### `StudentTable.tsx`
Displays students in a paginated table format. Ideal for larger screens.

### `StudentManagement.tsx`
The main component handling:
- Dark/Light mode toggle.
- Fetching data from the mock API.
- Sorting and searching functionality.
- Infinite scrolling for mobile.
- Paginated view for desktop.

### `api.ts`
Mock API implementation for fetching students. Simulates a delay to mimic real-world API calls.

### `types.ts`
Defines the `Student` type, ensuring type safety throughout the application.

```ts
export interface Student {
    name: string;
    age: number;
    marks: number;
    avgMarks: number;
    rollNumber: string;
    class: string;
    city: string;
    attendance: string;
}
```

---

## Dependencies

### Main Dependencies:
- **React**: UI library for building user interfaces.
- **TypeScript**: Superset of JavaScript for static typing.
- **react-infinite-scroll-component**: For infinite scrolling functionality.
- **TailwindCSS**: Utility-first CSS framework for styling.

### Dev Dependencies:
- **Vite**: Fast build tool for modern web development.
- **eslint**: For linting and maintaining code quality.
- **typescript-eslint**: TypeScript linting support.

---

## How It Works

1. **Fetching Data**:
   - Data is fetched from a mock API (`api.ts`) that reads from `students.json`.
   - Data is paginated with a simulated delay of 2 seconds.

2. **Search Functionality**:
   - Filters the students based on the search query in real-time.

3. **Sorting**:
   - Sorts students by name, age, or marks in ascending or descending order.

4. **Responsive Views**:
   - Uses a mobile-first approach with a switch between infinite scroll and paginated table views based on screen size.

5. **Dark Mode**:
   - Toggles dark/light mode using a state variable and CSS class manipulation.

---

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint for code linting.
- `npm run preview`: Previews the production build.

---

## Sample JSON (`students.json`)

```json
[
  {
    "name": "John Doe",
    "age": 18,
    "marks": 85,
    "avgMarks": 82,
    "rollNumber": "A101",
    "class": "12th",
    "city": "New York",
    "attendance": "95%"
  },
  {
    "name": "Jane Smith",
    "age": 17,
    "marks": 90,
    "avgMarks": 88,
    "rollNumber": "A102",
    "class": "12th",
    "city": "Los Angeles",
    "attendance": "98%"
  }
]
```

---

## Future Enhancements
- Add authentication for secure access.
- Integrate with a real backend API.
- Include advanced filters (e.g., city, class, etc.).
- Implement export functionality for student data.
- Add unit and integration tests.

---