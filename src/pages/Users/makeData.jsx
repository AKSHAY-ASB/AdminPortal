import React, { useState } from "react";

export const fakeData = [
  {
    id: "1",
    firstName: "Loans",
    lastName: "Home loan",
    email: "akshay@hotmail.com",
    status: "pending",
  },
  {
    id: "2",
    firstName: "Loans",
    lastName: "Personal loan",
    email: "ashit@hotmail.com",
    status: "pending",
  },
  {
    id: "3",
    firstName: "Investment",
    lastName: "Fixed Deposit",
    email: "chirag@yahoo.com",
    status: "pending",
  },
  {
    id: "4",
    firstName: "Insurance",
    lastName: "Life",
    email: "runali@yahoo.com",
    status: "pending",
  },
  {
    id: "5",
    firstName: "Loans",
    lastName: "Car loan",
    email: "rahul@yahoo.com",
    status: "pending",
  },
];

export const requestData = [
  {
    id: "1",
    moduleName: "Loans",
    subModule: "Home Loan",
    role: "maker",
    status: "Pending",
  },
  {
    id: "2",
    moduleName: "Investment",
    subModule: "Fixed Deposit",
    role: "maker",
    status: "Pending",
  },
  {
    id: "3",
    moduleName: "Insurance",
    subModule: "Life Insurance",
    role: "maker",
    status: "Pending",
  },
];

export const status = ["pending", "accepted", "rejected"];

// const UserList = () => {
//   const [filterState, setFilterState] = useState("");

//   const handleChange = (e) => {
//     setFilterState(e.target.value);
//   };

//   const filteredUsers = filterState
//     ? fakeData.filter((user) => user.state === filterState)
//     : fakeData;

//   return (
//     <div>
//       <label htmlFor="stateFilter">Filter by State:</label>
//       <select id="stateFilter" onChange={handleChange}>
//         <option value="">All States</option>
//         {status.map((state) => (
//           <option key={state} value={state}>
//             {state}
//           </option>
//         ))}
//       </select>
//       <ul>
//         {filteredUsers.map((user) => (
//           <li key={user.id}>
//             {user.firstName} {user.lastName} - {user.email} ({user.state})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;
