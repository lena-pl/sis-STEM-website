// Create questions, answers and outcomes
var position = 0, test, text_status, question, choice, choices, chA, chB, chC, correct = 0;

var totalScience = 0;
var totalTech = 0;
var totalEngineering = 0;
var totalMath = 0;

var questions = [
    [ "What's your favourite tech subject?", "calculus", "statistics", "biology", "physics", "chemistry", "information science/computing" ],
    [ "What's your favourite liberal arts subject?", "english", "history", "media studies", "art/photography", "performing arts", "foreign language" ],
    [ "What is your personal strength?", "communication", "teamwork/fairness", "creativity", "problem-solving", "curiosity", "enthusiasm" ],
    [ "What is your biggest weakness?", "impatience", "stubbornness", "nervousness", "procrastination", "need for control", "time management" ],
    [ "What is your favourite place to work on a project or study?", "library", "own bedroom", "lab/classroom", "a friend's house", "outside", "coffee shop" ],
    [ "Which learning style suits you best?", "visual", "aural/musical", "verbal", "physical", "logical/systematic", "social" ]
];

var weights = [
    // Question 1
    [
        [2, 3, 1, 4], // Calculus (Science, Tech, Engineering, Math)
        [3, 1, 2, 4], // Statistics (Science, Tech, Engineering, Math)
        [4, 3, 2, 1], // Biology (Science, Tech, Engineering, Math)
        [4, 1, 3, 2], // Physics (Science, Tech, Engineering, Math)
        [4, 1, 3, 2], // Chemistry (Science, Tech, Engineering, Math)
        [1, 4, 3, 2] // Information Science/Computing (Science, Tech, Engineering, Math)
    ],

    // Question 2
     [
        [3, 4, 2, 1], // English (Science, Tech, Engineering, Math)
        [1, 3, 4, 2], // History (Science, Tech, Engineering, Math)
        [1, 4, 3, 2], // Media Studies (Science, Tech, Engineering, Math)
        [1, 4, 2, 3], // Art/Photography (Science, Tech, Engineering, Math)
        [3, 2, 4, 1], // Performing Arts (Science, Tech, Engineering, Math)
        [2, 4, 3, 1] // Foreign Language (Science, Tech, Engineering, Math)
    ],

    // Question 3
     [
        [4, 3, 2, 1], // Communication (Science, Tech, Engineering, Math)
        [2, 4, 3, 1], // Teamwork/Fairness (Science, Tech, Engineering, Math)
        [2, 1, 4, 3], // Creativity (Science, Tech, Engineering, Math)
        [1, 2, 3, 4], // Problem-solving (Science, Tech, Engineering, Math)
        [4, 1, 3, 2], // Curiosity (Science, Tech, Engineering, Math)
        [2, 4, 3, 2] // Enthusiasm (Science, Tech, Engineering, Math)
    ],

    // Question 4
     [
        [3, 2, 1, 4], // Impatience (Science, Tech, Engineering, Math)
        [3, 1, 2, 4], // Stubbornness (Science, Tech, Engineering, Math)
        [1, 4, 3, 2], // Nervousness (Science, Tech, Engineering, Math)
        [4, 3, 1, 2], // Procrastination (Science, Tech, Engineering, Math)
        [1, 2, 3, 4], // Need for Control (Science, Tech, Engineering, Math)
        [2, 1, 4, 3] // Time Management (Science, Tech, Engineering, Math)
    ],

    // Question 5
     [
        [4, 1, 3, 2], // Library (Science, Tech, Engineering, Math)
        [1, 4, 2, 3], // Own Bedroom (Science, Tech, Engineering, Math)
        [3, 2, 4, 1], // Lab/Classroom (Science, Tech, Engineering, Math)
        [2, 4, 3, 1], // A friend's house (Science, Tech, Engineering, Math)
        [4, 1, 3, 2], // Outside (Science, Tech, Engineering, Math)
        [1, 3, 4, 2] // Coffee Shop (Science, Tech, Engineering, Math)
    ],

    // Question 6
     [
        [3, 4, 2, 1], // Visual (Science, Tech, Engineering, Math)
        [4, 2, 3, 1], // Aural/Musical (Science, Tech, Engineering, Math)
        [3, 4, 1, 2], // Verbal (Science, Tech, Engineering, Math)
        [3, 2, 4, 1], // Physical (Science, Tech, Engineering, Math)
        [4, 1, 3, 2], // Logical/Systematic (Science, Tech, Engineering, Math)
        [4, 3, 2, 1] // Social (Science, Tech, Engineering, Math)
    ]

];

var resultOptions = [
    ["Science", "<img src='images/science.jpg' alt='SCIENCE'>","Science careers can be incredibly diverse. Ranging from precise technical sciences to life sciences and allowing you to work by yourself or collaboratively with groups of people, almost everybody can find a career to love in this flexible field! Have a look at the career options below for some ideas. Just remember, this is only a small taste of what this line of work can offer you.", "pharmacology", "aviation", "marine biology", "conservation", "healthcare", "agricultural and food sciences"],
    ["Technology", "<img src='images/tech.jpg' alt='TECHNOLOGY'>","Technology is perhaps the fastest-growing of all STEM fields. People who work in the tech industry have strong problem-solving skills, enjoy a challenge, pick up new languages easily and often know how to work well with others. Technology helps us solve problems that reach across all sectors of society, so if you chose a tech career, you could be shaping the future! We wrote some sugestions for careers you might enjoy, but this is by no means an exhaustive list! If you enjoy working with technology, but can't quite see a job you like below, run a search on the web, talk to a teacher or get in touch with our mentors — they will be happy to help.", "artificial intelligence", "data sciences", "game development", "software engineering", "web design/development", "network security"],
    ["Engineering", "<img src='images/engine.jpg' alt='ENGINEERING'>","In Latin, the practice of engineering roughly translates as 'devising in a clever way'. Engineers are inventive, inquisitive people who could have a variety of skills and interests. If you like figuring out what makes things tick, this career field might be for you. Engineering also interacts heavily with all other fields, so if you've always enjoyed different aspects of STEM industries, and couldn't figure out which one you like best, you might just be an engineer in the making! Browse our career suggestions below and make sure to look up more great jobs in this field.", "3D printing", "civil engineering", "mechanical engineering", "materials sciences", "environmental engineering", "chemical engineering"],
    ["Mathematics", "<img src='images/math.jpg' alt='MATHEMATICS'>","Mathematics might just be the most under-appreciated STEM field there is! Apart from working with numbers, mathematitians also think about structure, space and logic. Most modern disciplines use mathematics in one way or another. And if you enjoy a seemingly unconventional combination of subjects, such as visual arts and algebra or calculus, you are not alone - careers such as photography and architecture borrow heavily from both fields. Consider some of the jobs below and make sure to develop your interest in this amazing line of work!", "animation", "financial modeling", "software engineering", "political science", "architecture", "statistical analysis"],
    ["Hybrid", "<img src='images/hybrid.jpg' alt='HYBRID'>","You seem equally inclined towards a few STEM disciplines! STEM professionals have analytical brains and are creative proble-solvers. We've picked some great careers from a variety of fields for you to have a look at, but this is only a taster of what's out there. Get in touch with a mentor in your area, browse through some online resources and discover more!", "animation", "marine biology", "web design/development", "civil engineering", "architecture", "data sciences"]
];

// Ask question and generate answers (* extra feature - randomise answers each time the quiz runs)

function find(x) {
    return document.querySelector(x);
}

var userAnswers = [];

function renderQuestion () {
    test = find("#test");
    test_status = find("#test_status");

    // Provide a case for finishing quiz
    if(position >= questions.length) {
        outcome = " ";

        // Results referencing multi-dimensional array of result data
        scienceResult = "<h4>YOU GOT:</h4>" + "<br>" + resultOptions[0][1] + "<br>" + "<p>" + resultOptions[0][2] + "</p>" + "<ul>" + "<li>" + resultOptions[0][3] + "</li>" + "<li>" + resultOptions[0][4] + "</li>" + "<li>" + resultOptions[0][5] + "</li>" + "<li>" + resultOptions[0][6] + "</li>" + "<li>" + resultOptions[0][7] + "</li>" + "<li>" + resultOptions[0][8] + "</li>" + "</ul>";

        techResult = "<h4>YOU GOT:</h4>" + "<br>" + resultOptions[1][1] + "<br>" + "<p>" + resultOptions[1][2] + "</p>" + "<ul>" + "<li>" + resultOptions[1][3] + "</li>" + "<li>" + resultOptions[1][4] + "</li>" + "<li>" + resultOptions[1][5] + "</li>" + "<li>" + resultOptions[1][6] + "</li>" + "<li>" + resultOptions[1][7] + "</li>" + "<li>" + resultOptions[1][8] + "</li>" + "</ul>";

        engineResult = "<h4>YOU GOT:</h4>" + "<br>" + resultOptions[2][1] + "<br>" + "<p>" + resultOptions[2][2] + "</p>" + "<ul>" + "<li>" + resultOptions[2][3] + "</li>" + "<li>" + resultOptions[2][4] + "</li>" + "<li>" + resultOptions[2][5] + "</li>" + "<li>" + resultOptions[2][6] + "</li>" + "<li>" + resultOptions[2][7] + "</li>" + "<li>" + resultOptions[2][8] + "</li>" + "</ul>";

        mathResult = "<h4>YOU GOT:</h4>" + "<br>" + resultOptions[3][1] + "<br>" + "<p>" + resultOptions[3][2] + "</p>" + "<ul>" + "<li>" + resultOptions[3][3] + "</li>" + "<li>" + resultOptions[3][4] + "</li>" + "<li>" + resultOptions[3][5] + "</li>" + "<li>" + resultOptions[3][6] + "</li>" + "<li>" + resultOptions[3][7] + "</li>" + "<li>" + resultOptions[3][8] + "</li>" + "</ul>";

        hybridResult = "<h4>YOU GOT:</h4>" + "<br>" + resultOptions[4][1] + "<br>" + "<p>" + resultOptions[4][2] + "</p>" + "<ul>" + "<li>" + resultOptions[4][3] + "</li>" + "<li>" + resultOptions[4][4] + "</li>" + "<li>" + resultOptions[4][5] + "</li>" + "<li>" + resultOptions[4][6] + "</li>" + "<li>" + resultOptions[4][7] + "</li>" + "<li>" + resultOptions[4][8] + "</li>" + "</ul>";

        // Compare total value of each outcome and display appropriate Outcome Names
        if( totalScience > totalTech && totalScience > totalEngineering && totalScience > totalMath) {
            outcome = scienceResult;
        }
        if( totalEngineering > totalTech && totalEngineering > totalScience && totalEngineering > totalMath) {
            outcome = engineResult;
        }
        if( totalTech > totalEngineering && totalTech > totalScience && totalTech > totalMath) {
            outcome = techResult;
        }
        if( totalMath > totalEngineering && totalMath > totalScience && totalMath > totalTech) {
            outcome = mathResult;
        }
        //  if( isHybrid == true ) {
        //     outcome = hybridResult;
        // }
        if( (totalMath == totalEngineering && totalMath > totalScience && totalMath > totalTech) || (totalMath == totalScience && totalMath > totalTech && totalMath > totalEngineering) || (totalMath == totalTech && totalMath > totalScience && totalMath > totalEngineering) || (totalEngineering == totalTech && totalEngineering > totalScience && totalEngineering > totalMath) || (totalEngineering == totalScience && totalEngineering > totalMath && totalEngineering > totalTech) || (totalScience == totalTech && totalScience > totalMath && totalScience > totalEngineering) ) {
            outcome = hybridResult;
        }

 // alert(outcome);
        test.innerHTML = outcome;
        // test.innerHTML = "<h3>You got " + outcome + " </h3>" + "<br>" + "<p>" + description + "</p>";
        test_status.innerHTML = "All done!";
        position = 0;
        return false;
    }

    test_status.innerHTML = "Question " + (position+1);
    question = questions[position][0];
    chA = questions[position][1];
    chB = questions[position][2];
    chC = questions[position][3];
    chD = questions[position][4];
    chE = questions[position][5];
    chF = questions[position][6];

    //  Get user to pick answer
    test.innerHTML = "<h4>" + question + "</h4>";
    test.innerHTML += "<input id='answer-a' type='radio' name='choices' value='A' data-scienceWeight='"+ weights[position][0][0] + "' + data-techWeight='"+ weights[position][0][1] + "' + data-engineeringWeight='"+ weights[position][0][2] + "' + data-mathWeight='"+ weights[position][0][3] + "'><label for='answer-a'> "+ chA +"</label> <br>";

    test.innerHTML += "<input id='answer-b' type='radio' name ='choices' value='B' data-scienceWeight='"+ weights[position][1][0] + "' + data-techWeight='"+ weights[position][1][1] + "' + data-engineeringWeight='"+ weights[position][1][2] + "' + data-mathWeight='"+ weights[position][1][3] + "'><label for='answer-b'> "+ chB +"</label> <br>";

    test.innerHTML += "<input id='answer-c' type='radio' name ='choices' value='C' data-scienceWeight='"+ weights[position][2][0] + "' + data-techWeight='"+ weights[position][2][1] + "' + data-engineeringWeight='"+ weights[position][2][2] + "' + data-mathWeight='"+ weights[position][2][3] + "'> <label for='answer-c'>"+ chC +"</label> <br>";

    test.innerHTML += "<input id='answer-d' type='radio' name ='choices' value='D' data-scienceWeight='"+ weights[position][3][0] + "' + data-techWeight='"+ weights[position][3][1] + "' + data-engineeringWeight='"+ weights[position][3][2] + "' + data-mathWeight='"+ weights[position][3][3] + "'> <label for='answer-d'>"+ chD +"</label> <br>";

    test.innerHTML += "<input id='answer-e' type='radio' name ='choices' value='E' data-scienceWeight='"+ weights[position][4][0] + "' + data-techWeight='"+ weights[position][4][1] + "' + data-engineeringWeight='"+ weights[position][4][2] + "' + data-mathWeight='"+ weights[position][4][3] + "'><label for='answer-e'> "+ chE +"</label> <br>";

    test.innerHTML += "<input id='answer-f' type='radio' name ='choices' value='F' data-scienceWeight='"+ weights[position][5][0] + "' + data-techWeight='"+ weights[position][5][1] + "' + data-engineeringWeight='"+ weights[position][5][2] + "' + data-mathWeight='"+ weights[position][5][3] + "'> <label for='answer-f'>"+ chF +"</label> <br>";

    test.innerHTML += "<button onclick='checkAnswer()'><span>next</span></button>";

    
}

//  Record the answer worth against each potential outcome
function checkAnswer() {

    if ($('input[type=radio]:checked').length === 0) {
        return false;
    }

    choices = document.getElementsByName("choices");

    // Find the element that has been checked
    for(var i=0; i<choices.length; i++) {
        if(choices[i].checked) {
            // Calculate total answer points in each outcome
            totalScience += parseInt(choices[i].getAttribute('data-scienceWeight'));
            totalTech += parseInt(choices[i].getAttribute('data-techWeight'));
            totalEngineering += parseInt(choices[i].getAttribute('data-engineeringWeight'));
            totalMath += parseInt(choices[i].getAttribute('data-mathWeight'));

           //Determine if the answer is a "hybrid" - multiple answers with equal points
            // function isHybrid() {

            //     userAnswers.push(totalMath);
            //     userAnswers.push(totalEngineering);
            //     userAnswers.push(totalScience);
            //     userAnswers.push(totalTech);

            //     userAnswers.sort();
            //     console.log(userAnswers);

            //     userAnswers[2] == userAnswers[3]
            // };

           console.log('Your total science is: ' + totalScience + ' Your total tech is: ' + totalTech + ' Your total engineering is: ' + totalEngineering + ' Your total math is: ' + totalMath);
        }
    }


    // Record result and move on to next question
    choices = document.getElementsByName("choices");
    for(i=0; i<choices.length; i++) {
        if(choices[i].checked) {
            choice = choices[i].value;
        }
    }
    position ++;
    renderQuestion();
}

// Display outcome with highest value

window.addEventListener("load", renderQuestion, false);