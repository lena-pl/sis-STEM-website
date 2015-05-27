<?php

if (!isset($_GET['page']) || $_GET['page'] == "") {
    include "templates/index.inc.php";

} else if ($_GET['page'] === "mentors") {
    include "templates/mentors.inc.php";

} else if ($_GET['page'] === "success") {
    include "templates/success.inc.php";
}