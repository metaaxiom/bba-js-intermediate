<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fetch API</title>
</head>
<body>
  <script>
  
  fetch('./localData.json')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
      console.log('Network error has occured.');
    });
  
  </script>
</body>
</html>