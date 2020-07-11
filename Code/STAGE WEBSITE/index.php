<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="style.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <title>Home</title>
</head>
<body>

    <img id="backgroundimage" class="img-fluid" src="./Assets/Images/Lyfter-slider.jpg" >
    <div id="linearcontainer" class="container-fluid"></div>

<?php 

    include('./header.php');

    include('./Homepage/home-section1.html');
    include('./Homepage/home-section2.html');
    include('./Homepage/home-section3.html');
    include('./contact-section.html');
    include('./buzzfizz-section.html');

    include('./footer.html'); 

?>

