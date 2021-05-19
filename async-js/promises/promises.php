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
  let myPromise = new Promise((resolve, reject) => {
    resolve("Promise resolved!");
  });

  myPromise.then((data) => {
    console.log("Promise data:", data);
  });
  </script>
</body>
</html>