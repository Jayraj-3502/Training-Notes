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
};

const resultObj = {};
let mainKey = "";
let mainValue = "";

function objectFlat(object) {
  for (const key in object) {
    if (Array.isArray(object)) {
      arrayFlat(object);
    } else if (typeof object[key] === "object") {
      mainKey += key + ".";
      objectFlat(object[key]);
      mainKey = "";
    } else {
      backupKeyName = mainKey;
      mainKey += key;
      mainValue = object[key];
      flatValue();
      mainKey = backupKeyName;
    }
  }
}

function arrayFlat(array) {
  array.forEach((element, index) => {
    let backupKeyName = mainKey;
    mainKey += `[${index}]`;
    if (Array.isArray(element)) {
      console.log(mainKey);
      arrayFlat(element);
      mainKey = "";
    } else if (typeof element === "object") {
      objectFlat(element);
      mainKey = backupKeyName;
    } else {
      backupKeyName = mainKey;
      mainKey += `[${index}]`;
      mainValue = element;
      flatValue();
      mainKey = backupKeyName;
    }
  });
}

function flatValue() {
  resultObj[mainKey] = mainValue;
  mainValue = "";
}

// const nestedArray = [
//   1,
//   [2, 3],
//   [4, [5, 6], 7],
//   [8, [9, [10, 11], 12], 13],
//   14,
//   [15, [16, [17, 18]]],
// ];

// arrayFlat(nestedArray);

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

objectFlat(input);
console.log(resultObj);
