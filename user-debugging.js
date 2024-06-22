const storeOwners = [
  {
    name: 'Danny Shavez',
    stores: 1,
    location: "AZ",
  },
  {
    name: 'Danny Shavez',
    stores: 1,
    location: "NM",
  },
  {
    name: 'Danny Shavez',
    stores: 1,
    location: "NM",
  },
  {
    name: 'Danny Shavez',
    stores: 1,
    location: "NM",
  },
];

const listNumberOfStores = function () {
  let totalLocations = 0;  // Initialize totalLocations variable
  for (let i = 0; i < storeOwners.length; i++) {
    totalLocations += storeOwners[i].stores;  // Access stores property using index
  }
  return totalLocations;  // Return totalLocations, not i
};

let locations = listNumberOfStores();  // Call the function to get the result

function tellMeMyStores() {
  console.log('Hey, can you tell me how many stores you have?');
  if (locations > 0) {
    console.log('Of course, we have ' + locations + ' stores');
  }
}

function hasStore() {
  for (let i = 0; i < storeOwners.length; i++) {
    let person = storeOwners[i].name;  // Access name property using index
    let location = storeOwners[i].location;  // Access location property using index
    console.log(`Yes, ${person} has one in ${location}`);  // Use template literals correctly
  }
}

tellMeMyStores();
hasStore();