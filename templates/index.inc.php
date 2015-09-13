<?php 
$title = "";
$page = "index"; 
include "master.inc.php"; 

function content () {
  ?>

        <div id="header-content">
            <h1>
                <span class="text">Welcome to</span>
                <img src="images/logo.png" alt="sis-STEM">
            </h1>

            <div class="header-text">
                <h2>We're here to help</h2>
                <p class="subheading">Thinking about the future can be rough — there are so many careers to choose from! Where do you start?</p>
                <p>Luckily, you’re not alone. There are heaps of people out there who would love to help you choose a path you’ll enjoy and who are keen to show you that it really can be done. This website will introduce you to some great careers in STEM (Science, Technology, Engineering, Maths) industries.</p>
                <p>We reckon everybody could find a STEM career that they would be interested in! STEM fields hold a whole bunch of exciting careers people never get to hear about. Chances are, a few of them could suit your interests perfectly! Try our quiz to find out more.</p>
            </div>

            <div class="icons">
                <div class="quiz-icon">
                    <a href="./#test_status"><img src="images/quiz-icon.png" alt="quiz icon">
                    <p>Quiz</p></a>
                </div>
                <div class="location-icon">
                    <a href="./?page=mentors"><img src="images/location-icon.png" alt="location icon">
                    <p>Mentors</p></a>
                </div>
            </div>
        </div>
    </header>

    <main>
        <!-- <a href="#test"><p class="lets-go">let's go!</p></a> -->
        <div class="main-text">
            <p class="subheading">This quiz is designed to help you discover a few STEM careers that might suit you. It's only 6 questions long, so will only take a minute of your time! After you get your result, feel free to look further into the available options or contact one of our mentors in your area for some advice.</p>

            <h3 id="test_status"></h3>
            <div id="test-container">
                <div id="test"></div>
            </div>
        </div>

    </main>

  <?php 
}

function scripts () {
  ?>

    <script src="js/quiz.js"></script>

  <?php 
}