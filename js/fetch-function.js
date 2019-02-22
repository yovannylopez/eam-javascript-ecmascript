fetch('https://jsonplaceholder.typicode.com/userss')
  .then(response => response.json())
  .then(users => listarUsuarios(users))
  .catch(error => console.log(error));

function listarUsuarios(users) {
  users.map((user, item) => {
    console.log(`${item}: ${user.name}`);
    console.log(item + ': ' + user.name);
  });
}
