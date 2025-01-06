//  Define Variables with Type Annotations
let userName: string = "John Doe";
let userAge: number = 30;
let isLoggedIn: boolean = true;
let scores: number[] = [85, 90, 78];

// Create an Enum
enum Role {
  Admin,
  Editor,
  Viewer,
}

let userRole = Role.Editor;

interface User {
  id: number;
  name: string;
  age: number;
  role: Role;
}

let currentUser: User = {
  id: 1,
  name: "John Doe",
  age: 30,
  role: Role.Editor,
};

let status: "active" | "inactive" | "banned" = "active";

// Define the User interface
interface User {
  id: number;
  name: string;
  age: number;
  role: string;
}

// Define the displayUserInfo function
function displayUserInfo(user: User) {
  console.log(
    `codeUser Info: ID: ${user.id} Name: ${user.name} Age: ${user.age} Role: ${user.role}`
  );
}

// Example usage:
const user: User = {
  id: 1,
  name: "John Doe",
  age: 30,
  role: "Admin",
};

displayUserInfo(user);
