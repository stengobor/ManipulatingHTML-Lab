$(document).ready(function () {

    //Task #1
    let div1 = $("<div id=firstDiv></div>");
    let btn1 = $("<button id='button1'>Press Me!</button>");
    $("body").append(btn1);
    $("body").append(div1);

    $("#button1").on("click", function () {
        alert("Today can be a good day!");
    });

});