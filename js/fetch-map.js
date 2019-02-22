fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    console.log(users);

    users.map((user, item) => {
      console.log(user.name);
    });
  });
