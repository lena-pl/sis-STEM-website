<?php

$page = isset($_GET['page']) ? $_GET['page'] : 'home';


switch ($page) {
    case "home":

        include "templates/index.inc.php";

        break;

    case "mentors":

        include "templates/mentors.inc.php";

        break;

    case "success":

        include "templates/success.inc.php";

        break;
}
