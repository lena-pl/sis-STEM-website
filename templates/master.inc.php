<!DOCTYPE html>
<html lang="en-NZ">

<head>
    <title>sis-STEM <?php if ($title) echo "—"; ?> <?= $title ?></title>
    <meta charset="utf-8">

    <meta name="description" content="This is the website for sis-STEM.">

    <meta name="author" content="Quiz Master">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" type="text/css" href="css/main.css">
</head>

<body>
    <header>
        <nav>
            <button>menu</button>
            <ul>
                <li><a href="./">home</a></li>
                <li><a href="./">about</a></li>
                <li><a href="./?page=mentors">find a mentor</a></li>
                <li><a href="./?page=mentors#enquiries">contact us</a></li>
            </ul>
        </nav>
    
    <?php content (); ?>

    <footer>
        <p>© sis-STEM 2015</p>
    </footer>

<script src="//code.jquery.com/jquery-2.1.4.min.js"></script>
<script src="js/menu.js"></script>

<?php if ($page === "index"): ?> 
<script src="js/quiz.js"></script>
<?php endif ?>

<?php if ($page === "mentors"): ?> 
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYLJpYknNa_8xZQLssh5-KuU424vJ5lxE"></script> 
<script src="js/map.js"></script>
<script src="js/form-validation-kit.js"></script>
<script>
document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.querySelector("#enquiries");
    addFormValidation(contactForm);
});
</script>
<?php endif ?>

</body>

</html>