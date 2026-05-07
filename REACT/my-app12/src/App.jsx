// function App(){
//   return(
//     <div classname="App">
//       <h1>Welcome to React</h1>
//     <p>this is my first react app.</p>
//     <CSE12 />
//     </div>
//   );
// } 
// //2nd component
// function CSE12(){
//   return(
//     <div classname="CSE12">
//       <h2>Welcome to CSE12</h2>
//     <p>this is my SECOND COMPONENT.</p>
//     </div>
//   );
// }
// export default App;

// import Student from "/Student";

// function App(){
//   return(
//  <div className="App">
//   <h1>Student Information</h1>
//   <Student name="John Doe" course="Computer Science" marks={85} />
//   <Student name="Jane Smith" course="Mathematics" marks={92} />
//   <Student name="Alice Johnson" course="Physics" marks={78} />
//  </div>
//   );
// }
// export default App;
import React from "react";
import "./studentcard.css";
import StudentCard from "./studentcard";
function App(){
  return(
    <div className="app">
      <h1 className="app__title">Exp -7 Student Card</h1>
      <div className="student-list">
        <StudentCard name="John Doe" course="Computer Science" marks={85} />
        <StudentCard name="Jane Smith" course="Mathematics" marks={92} />
        <StudentCard name="Alice Johnson" course="Physics" marks={78} />
      </div>
    </div>
  );
}
export default App;
