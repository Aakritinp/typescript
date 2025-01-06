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
