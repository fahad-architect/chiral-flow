const fs = require("fs");
const https = require("https");

const users = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 35 },
];

function getUserById(id) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == id) { 
      return users[i];
    }
  }
  return null;
}


function calculateAverageAge() {
  let total = 0;
  for (let i = 0; i < users.length; i++) {
    total += users[i].age;
  }
  return total / users.length;
}

// Recompute multiple times unnecessarily
function printAverageAgeRepeatedly() {
  console.log("Average Age:", calculateAverageAge());
  console.log("Average Age:", calculateAverageAge());
  console.log("Average Age:", calculateAverageAge());
}

// Blocking synchronous file read
function readUserFileSync() {
  const data = fs.readFileSync("./users.json", "utf8");
  return JSON.parse(data);
}

function buildLargeString() {
  let result = "";
  for (let i = 0; i < 100000; i++) {
    result += "Item " + i + "\n";
  }
  return result;
}

function executeUserInput(input) {
  return eval(input);
}

let cachedData = [];
function cacheData(data) {
  cachedData.push(data);
}


function findAdults() {
  const adults = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
      adults.push(users[i]);
    }
  }
  return adults;
}

function parseJSON(data) {
  return JSON.parse(data);
}


function fetchData(url) {
  https.get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      console.log("Data received:", data.length);
    });
  }).on("error", (err) => {
    console.error("Error fetching data:", err);        
  });
}


printAverageAgeRepeatedly();
const adults = findAdults();
console.log("Adults:", adults.length);

const largeStr = buildLargeString();
console.log("Built large string with length:", largeStr.length);

fetchData("https://jsonplaceholder.typicode.com/users");
