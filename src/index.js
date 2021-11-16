const { users } = require("./generator");
const render = require("./render");
const userList = document.querySelector("#user-list");

let curr = Number(window.location.hash.slice(1));

console.log(curr);
console.log(users);

render({ users, userList, curr });

window.addEventListener("hashchange", () => {
  curr = Number(window.location.hash.slice(1));
  render({ users, userList, curr });
});
