<?php 
$title = "Thanks for Your Message";
$page = "success"; 
include "master.inc.php"; 

function content () {
  ?>

        <div id="header-content">
            <h1>
                <span class="text">Thanks for connecting with</span>
                <img src="images/logo.png" alt="sis-STEM">
            </h1>

            <div class="header-text">
                <h2>We can't wait to read your message.</h2>
                <p class="subheading">We do our best to get through all messages within 24 hours and will try hard to get back to you ASAP.</p>
                <p>We promise we won't take long, but while you wait, share our STEM Quiz with your friends or explore some STEM careers with our talented mentors. Whether you need a hand getting in touch with a mentor, or you'd like to organise a sis-STEM event at your school, we'll be happy to help!</p>
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
            <p class="subheading">We will make sure to get back to you as soon as we can and answer your questions or reply to your comments.</p>
        </div>

    </main>

  <?php 
}