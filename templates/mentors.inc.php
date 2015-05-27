<?php 
$title = "Find a Mentor";
$page = "mentors"; 
include "master.inc.php"; 

function content () {
  ?>

        <div id="header-content">
            <h1>
                <span class="text">Become a part of</span>
                <img src="images/logo.png" alt="sis-STEM">
            </h1>

            <div class="header-text">
                <h2>You'd like to know more, now what?</h2>
                <p class="subheading">Our talanted mentors are just an email away. See our interactive map below to find the mentor closest to you.</p>
                <p>Our clever system should detect your location automatically and show you the mentors in your area, but if it gets stuck, just choose your suburb from the list, and you’re good to go! You’ll see a few companies in the area who are happy to help — all you have to do is pick a mentor you’d like to get in touch with!</p>
            </div>
        </div>
    </header>

    <main>
        <div id="map-canvas"></div>
        <div class="main-text">
            <ul id="suburbs-list"></ul>
            <ul id="mentors-list"></ul>
            <h3>Email Us</h3>

            <div class="contact-form">
                <form id="enquiries" action="./?page=success" method="post" novalidate>

                    <div class="field">
                        <label for="name">Your name</label>
                        <input id="name" class="fv-minlength-2" type="text" name="name" placeholder="Jane Doe" required>
                        <div id="name-error" class="danger"></div>
                    </div>

                    <div class="field">
                        <label for="email">Your email *</label>
                        <input id="email" type="email" name="email" placeholder="jane.doe@mail.com" required>
                        <div id="email-error" class="danger"></div>
                    </div>

                    <div class="field">
                        <label for="comments">What's up? *</label>
                        <textarea id="comments" class="fv-minlength-15" name="comments" placeholder="Type us a message here!" required></textarea>
                        <div id="comments-error" class="danger"></div>
                    </div>

                    <input type="submit" name="submit" value="submit" class="button">

                </form>
            </div>
        </div>
    </main>

  <?php 
}