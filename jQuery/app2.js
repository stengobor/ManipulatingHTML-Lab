$(document).ready(function () {

    //This is Task #1
    let div1 = $("<div id=firstDiv></div>");
    let btn1 = $("<button id='button1'>Press Me!</button>");
    $("body").append(btn1);
    $("body").append(div1);

    $("#button1").on("click", function () {
        alert("Today can be a good day!");
    });

    btn1.css({
        "background-color": "green",
        "color": "white"
    })

    //This is Task #2

    const div2 = $("<div class='task2' id='secondDiv'></div>");
    const btn2 = $("<button class='btnSubmit' id='btn2'>Submit</button>");
    const inputText = $("<input type='text' id='text'></input>");

    div2.append(inputText);
    div2.append(btn2);

    btn2.click(function () {
        alert(inputText.val())
    });

    btn2.css({
        "background-color": "blue",
        "color": "white"
    })

    $("body").append(div2);

    //This is Task #3

    const div3 = $("<div class='task3' id='thirdDiv'></div>");

    div3.css({
        "height": "400px",
        "width": "900px",
        "background-color": "yellow",
        "border": "5px solid black"
    })

    div3.mouseover(function () {
        let color = $(this).css("background-color");

        $(this).css("background", "#3C9EE7");

        div3.mouseout(function () {
            $(this).css("background", color);
        })
    })

    $("body").append(div3);

    //This is Task #4

    const div4 = $("<div class='task4' id='fourthDiv'></div>");
    const words = $("<p>Grease, hazel, booboo, boohoo, goof, and blah are really interesting words!</p>")

    words.click(function () {

        let colors = ["orange", "red", "blue", "pink", "yellow", "green", "teal"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];

        words.css({
            "color": randomColor,
            "cursor": "pointer"
        })
    })

    $("body").append(words);
    $("body").append(div4);

    // This is Task #5

    const div5 = $("<div class='task5' id='fifthDiv'></div>");
    const btn3 = $("<button class='nameBtn' id='btn3'>YOU'RE ABOUT TO SEE MY NAME</button>");

    btn3.click(function () {
        const span = $("<span> Sophia Engobor </span>");
        div5.append(span)
    })

    btn3.css({
        "background-color": "purple",
        "color": "white"
    })

    $("body").append(btn3);
    $("body").append(div5);

    // This is Task #6

    myFriends = ['Rich', 'MoMo', 'Onyx', 'Maddy', 'Jovanna', 'Alex', 'Jarita', 'John', 'Jane', 'Miley'];

    const btn4 = $("<button>MY FRIENDS</button>")
    const ul = $("<ul></ul>");

    ul.css({
        "color": "magenta",
        "font-size": "25px"
    })

    btn4.css({
        "background-color": "orange"
    })

    let counter = 0;

    btn4.click(function () {
        if (counter < myFriends.length) {
            let li = $("<li>" + myFriends[counter] + "</li>")
            ul.append(li)
            counter++
        }
    })

    $("body").append(btn4)
    $("body").append(ul)

});