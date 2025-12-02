// const resultObj = {};
// let mainKey = "";
// let mainValue = "";

// function objectFlat(object) {
//   for (const key in object) {
//     if (Array.isArray(object)) {
//       arrayFlat(object);
//     } else if (typeof object[key] === "object") {
//       mainKey += key + ".";
//       objectFlat(object[key]);
//       mainKey = "";
//     } else {
//       backupKeyName = mainKey;
//       mainKey += key;
//       mainValue = object[key];
//       flatValue();
//       mainKey = backupKeyName;
//     }
//   }
// }

// function arrayFlat(array) {
//   array.forEach((element, index) => {
//     let backupKeyName = mainKey;
//     mainKey += `[${index}]`;
//     if (Array.isArray(element)) {
//       console.log(mainKey);
//       arrayFlat(element);
//       mainKey = "";
//     } else if (typeof element === "object") {
//       objectFlat(element);
//       mainKey = backupKeyName;
//     } else {
//       backupKeyName = mainKey;
//       mainKey += `[${index}]`;
//       mainValue = element;
//       flatValue();
//       mainKey = backupKeyName;
//     }
//   });
// }

// function flatValue() {
//   resultObj[mainKey] = mainValue;
//   mainValue = "";
// }

// // const nestedArray = [
// //   1,
// //   [2, 3],
// //   [4, [5, 6], 7],
// //   [8, [9, [10, 11], 12], 13],
// //   14,
// //   [15, [16, [17, 18]]],
// // ];

// // arrayFlat(nestedArray);

// // const obj = {
// //   id: 101,
// //   name: {
// //     first: "Jayraj",
// //     last: "Rathod",
// //   },
// //   contact: {
// //     email: "jayraj@example.com",
// //     phone: "+91 9876543210",
// //     address: {
// //       street: "MG Road",
// //       city: "Mumbai",
// //       pincode: 400001,
// //       location: {
// //         lat: 19.076,
// //         lng: 72.8777,
// //       },
// //     },
// //   },
// // };

// // objectFlat(input);
// // console.log(resultObj);

// function flatAnObject(value) {
//   let path = "";
//   let pathValue = "";

//   if (Array.isArray(value)) {
//   }
// }

// const obj = {
//   id: 101,
//   name: {
//     first: "Jayraj",
//     last: "Rathod",
//   },
//   contact: {
//     email: "jayraj@example.com",
//     phone: "+91 9876543210",
//     address: {
//       street: "MG Road",
//       city: "Mumbai",
//       pincode: 400001,
//       location: {
//         lat: 19.076,
//         lng: 72.8777,
//       },
//     },
//   },
// };

// const arr = [
//   1,
//   [2, 3],
//   [4, [5, 6], 7],
//   [8, [9, [10, 11], 12], 13],
//   14,
//   [15, [16, [17, 18]]],
// ];

// function flatArray(val) {
//   for (const value in val) {
//     if (Array.isArray(val[value])) {
//       flatArray(val[value]);
//     } else {
//       console.log(val[value]);
//     }
//   }
// }

// function flatObj(val) {
//   for (const value in val) {
//     if (typeof val[value] === "object") {
//       flatObj(val[value]);
//     } else {
//       console.log(val[value]);
//     }
//   }
// }

const input = {
  name: "Jayraj",
  age: 24,

  address: {
    permanent: {
      city: {
        name: "Indore",
        pincode: 789456,
        area: "South Zone",
        geo: {
          lat: 22.7196,
          lng: 75.8577,
          nearbyLocations: [
            { name: "Rajwada", distance: "2km" },
            { name: "Vijay Nagar", distance: "5km" },
          ],
        },
      },
    },
    current: {
      city: "Mumbai",
      pincode: 400001,
      area: "Andheri",
    },
  },

  hobbies: [
    {
      name: "football",
      yearsActive: 5,
      achievement: [
        {
          level: "State",
          position: "2nd",
          year: 2022,
          details: {
            hostedBy: "Madhya Pradesh Sports Club",
            location: "Bhopal",
          },
        },
      ],
    },
    {
      name: "coding",
      achievement: [
        {
          title: "Hackathon",
          rank: 1,
          techStack: ["React", "Node.js", "MongoDB"],
        },
      ],
    },
  ],

  social: {
    instagram: "@jayraj_dev",
    github: "github.com/jayraj",
    friends: [
      [
        {
          name: "Rohan",
          hobbies: ["gaming", "gym"],
          address: {
            city: "Pune",
            pincode: 411001,
          },
        },
      ],
      {
        name: "Aisha",
        hobbies: ["painting", "travel"],
        address: {
          city: "Delhi",
          pincode: 110001,
        },
      },
    ],
  },

  settings: {
    isVerified: true,
    preferences: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
      languages: ["English", "Hindi"],
    },
  },
};

const input2 = {
  instagram: "@jayraj_dev",
  github: "github.com/jayraj",
  friends: [
    [
      {
        name: "Rohan",
        hobbies: ["gaming", "gym"],
        address: {
          city: "Pune",
          pincode: 411001,
        },
      },
    ],
    {
      name: "Aisha",
      hobbies: ["painting", "travel"],
      address: {
        city: "Delhi",
        pincode: 110001,
      },
    },
  ],
};

function flatObjectFinalVersion(val, path = "", resultObj = {}) {
  let backupPath = path;
  let pathValue = {};

  for (const value in val) {
    if (Array.isArray(val[value])) {
      !isNaN(value) ? (path += "[" + value + "]") : (path += value);
      const result = flatObjectFinalVersion(val[value], path);
      resultObj = { ...resultObj, ...result };
      path = backupPath;
    } else if (typeof val[value] === "object") {
      !isNaN(value) ? (path += "[" + value + "].") : (path += value + ".");
      const result = flatObjectFinalVersion(val[value], path);
      resultObj = { ...resultObj, ...result };
      path = backupPath;
    } else {
      backupPath = path;
      !isNaN(value) ? (path += "[" + value + "]") : (path += value);
      pathValue[path] = val[value];
      resultObj = { ...resultObj, ...pathValue };
      path = backupPath;
    }
  }

  return resultObj;
}

const result = flatObjectFinalVersion(input);
console.log(result);
