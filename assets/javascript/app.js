
$(window).ready(function(){
    var questions = ["How many licks does it officialy take to get to the center of a Tootsie Pop?", "What percent of American adults belive chocolate milk comes from brown cows?",
        "What is Bob Dylan's real name?", "The Center for Disease Control's (CDC) website has a section dedicated to?", "What does McDonald's refer to their frequent users as?",
        "What kills more people yearly than shark attacks?", "Under the Code of Hammurabi (Babylonian code of law in ancient Mesopotamia) bartenders that watered down beer were..."];

        var answers = [
                [1, "364", "420", "Just bite it", "A lot!"],
                [3, "2%", "Where does strawberry milk come from then?", "7%", "It doesn't?", "I don't drink milk", "14%"],
                [2, "Dylan Bob", "Robert Zimmerman", "Jokerman"],
                [1, "Zombie Prepardness", "Sex Addiction"],
                [4, "Guests", "Customers", "Fans", "Heavy Users"],
                [4, "Vending machines", "Selfies", "Coconuts", "All of the above"],
                [1, "Punished by execution", "Fined", "When was beer even invented?", "Mesopowhaaat?", "Doesn't matter, I'll take 4!"]
        ];

        var seconds = 30;
        var timer;
        var questionIndex = 0;
        var answerIndex = 0;
       

        $("#answersInsert").append("<div class='row'><button type='button' id='startGame' class='btn btn-outline-primary btn-lg'>Start Game!</button></div>");
        $("#startGame").on("click", startGame);

function startGame() {
    renderQuestion(questions[questionIndex]);
    renderAnswers(answers[answerIndex]);
    console.log(questions[0])
    run ();
}

 


 function run() {
   clearInterval(timer);
   $("#timer").text("Time left: " + seconds);
   timer = setInterval(function() {
    seconds--;
    $("#timer").text("Time left: " + seconds);
    if (seconds === 0) {
     $("#answersInsert").empty();
     $("#questionInsert").text("Time's Up! Next Question...");
     clearInterval(timer);
        runThreeSec();
    };
  }, 100);
 };

 function runThreeSec() {
    setInterval(function() {
    startGame();
   }, 3000);
  };


    function renderQuestion(question) {
        $("#questionInsert").text(question);
    }

    function renderAnswers(answerArr) {
    var index
    for (index = 0; index < answerArr.length; index++) {
        $("#answersInsert").append("<div class='row'><button type='button' class='btn btn-outline-primary btn-lg'>" + answerArr[index] + "</button></div>");
    };
    };
});
// for (index = 0; index < answerArrOne.length; index++) {
    // var div = $("<div>");
    // var button = $("<button>");
    //     div.addClass("row");
    //     button.addClass("btn btn-outline-primary btn-lg");
    //     button.text(answerArrOne[index]);
    //     $("#answersInsert").append(div).append(button);
    //     $("#answersInsert").append("<div class='row'><button type='button' class='btn btn-outline-primary btn-lg'>" + answerArrOne[index] + "</button></div>");
