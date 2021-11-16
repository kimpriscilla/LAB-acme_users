const render = ({ users, userList, curr }) => {
  const html = `
  ${users
    .map(
      (user, idx) =>
        `
    <li>
      <a href ='#${idx}'> ${user.name}</a>
    ${
      curr === idx
        ? `
    <ul>
    <li>${user.username}</li>
    <li>${user.email}</li>
    <li> ${user.address.city}</li>
    </ul>
    `
        : ""
    }

    </li>
    `
    )
    .join("")}
  `;
  userList.innerHTML = html;
};

module.exports = render;
