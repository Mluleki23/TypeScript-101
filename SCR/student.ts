// Step 1: Define Grade type
type Grade = "A" | "B" | "C" | "D" | "F";

// Step 2: Define Student interface
interface Student {
  name: string;
  age: number;
  grade: Grade;
}

// Step 3: Display function
function displayStudentInfo(student: Student): void {
  const greetingElement = document.getElementById("greeting")!;
  greetingElement.textContent = `Student: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`;
}

// Step 4: Create Students
const student1: Student = { name: "Mluleki", age: 22, grade: "A" };
const student2: Student = { name: "Thabiso", age: 23, grade: "C" };

// Call function for one student
displayStudentInfo(student1);
