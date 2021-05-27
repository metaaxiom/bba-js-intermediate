<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JS Promises</title>
</head>
<body>
  <script>
  // let myPromise = new Promise((resolve, reject) => {
  //   resolve("Promise resolved!");
  // });

  // myPromise.then((data) => {
  //   console.log("Promise data:", data);
  // });


  // let myArr = ["apple", "orange"];
  // myArr.forEach(fruit => {
  //   console.log(fruit);
  // });

  // setTimeout(() => {
  //   alert("Hello");
  // }, 3000);

  // let myPromise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('Promise resolved after 3 seconds');
  //   }, 3000)
  // });

  // myPromise.then((data) => {
  //   console.log("Promise resolved:", data);
  // }).catch((data) => {
  //   console.log("Promise rejected:", data);
  // })


  
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => { console.log(response) })

  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(todo => {
      console.log( todo.title );
    })

  
  </script>
</body>
</html>