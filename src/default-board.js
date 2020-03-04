export function uuid() {
  return Math.random()
    .toString(16)
    .slice(2);
}

export default {
  name: "workshop",
  columns: [
    {
      name: "todo",
      tasks: []
    },
    {
      name: "in-progress",
      tasks: []
    },
    {
      name: "done",
      tasks: []
    }
  ]
};

// export default {
//   name: "workshop",
//   columns: [
//     {
//       name: "todo",
//       tasks: [
//         {
//           description: "can we go dumb?",
//           name: "first task",
//           id: uuid(),
//           userAssigned: null
//         },
//         {
//           description: "",
//           name: "second task",
//           id: uuid(),
//           userAssigned: null
//         },
//         {
//           description: "",
//           name: "and third",
//           id: uuid(),
//           userAssigned: null
//         }
//       ]
//     },
//     {
//       name: "in-progress",
//       tasks: [
//         {
//           description: "",
//           name: "first task",
//           id: uuid(),
//           userAssigned: null
//         }
//       ]
//     },
//     {
//       name: "done",
//       tasks: [
//         {
//           description: "",
//           name: "first task",
//           id: uuid(),
//           userAssigned: null
//         }
//       ]
//     }
//   ]
// };
