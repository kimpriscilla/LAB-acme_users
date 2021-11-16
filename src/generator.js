const faker = require("faker");

let users;

users = JSON.parse(window.localStorage.getItem("users"));

if (!users) {
  users = new Array(50).fill("").map((el) => faker.helpers.userCard());
  window.localStorage.setItem(users, JSON.stringify(users));
}

module.exports = {
  users,
};
