// const document = {
//   title: "Document Object Model",
//   URL: "https://127.0.0.0",
//   body: {
//     meta: "data",
//     textContent: {
//       innerHTML: "",
//       onclick: {
//         textContent: "",
//         properties: {
//           city: {
//             postoffice: {
//               nested: "final",
//             },
//           },
//         },
//       },
//     },
//   },
//   getElementById: function () {
//     console.log("something");
//   },

//   getElementsByClassName() {
//     console.log("anything...");
//   },
// };

// document.title = "DOM DOM DOM";
// console.log(document.title);
// document.getElementById();

// variable,array, loop, function, object
// callback function

function upperName(name) {
  console.log(name.toUpperCase());
}

function fullName(first, upperName) {
  // console.log(upperName);
  const fullName = `${first} name`;

  upperName(fullName);
}

fullName("rokib", upperName);
