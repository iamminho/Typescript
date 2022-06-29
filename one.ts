interface User {
  name: string;
  id: number;
}

// const user: User = {
//   username: "hayes",
// };

type LockStates = "locked" | "unlocked";

let obj = ["one", "two", "three"];

function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") return [obj];
  return obj;
}

let obj2 = [1, 2, 3, 4, 5];

function wrapInArray2(obj: number | number[]) {
  if (typeof obj === "number") return [obj];
  return obj;
}
console.log(wrapInArray2(obj2));

// class userAccount {
//   name: string;
//   id: number;

//   constructor(name: string, id: number) {
//     this.name = name;
//     this.id = id;
//   }
// }

// const user: User = new userAccount("Mub", 1);
// console.log(user);
