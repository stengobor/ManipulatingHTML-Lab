document.addEventListener("DOMContentLoaded", function () {
    
    // This is Task #1
    const newDiv = document.createElement("div");
    newDiv.className = "firstOne";
    const newButton = document.createElement("button");
    newButton.className = "btn";
    const btnText = document.createTextNode('Press Me');

    newButton.appendChild(btnText);
    newDiv.appendChild(newButton);
    document.body.appendChild(newDiv);

    newButton.addEventListener("click", function () {
        alert("It can still be a good day!");
    });
    // This is Task #2

    const inputText = document.getElementById("inputText");
    document.getElementById("btnSubmit").addEventListener("click", function () {
        alert(inputText.value);
    });
    // This is Task #3

    let color = [, "#3C9EE7", "#E7993C",
        "#E73C99", "#3CE746", "#E7993C"];

    newDiv.addEventListener("mouseover", function () {
        newDiv.style.background = color[Math.floor(Math.random() * color.length)]
    });

    newDiv.addEventListener("mouseout", function () {
        newDiv.style.background = "gold";
    });
    // This is Task #4

    document.getElementById('words').onclick = changeColor;

    function changeColor() {
        let colors = ["white", "red", "blue", "pink"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.color = randomColor;
        return false;
    }
    // This is task #5
    
    const divThree = document.createElement('div');
    divThree.className = "thirdOne";
    const lastBtn = document.createElement('button');
    lastBtn.className = "btn3";
    const lastBtnText = document.createTextNode('HIT ME!');

    lastBtn.appendChild(lastBtnText);
    divThree.appendChild(lastBtn);
    document.body.appendChild(divThree);

    const listItemButton = document.querySelector(".btn3");
    let listCount = 0;

    listItemButton.addEventListener("click", function () {

        const newSpan = document.createElement("span");
        listCount++
        newSpan.textContent = "Sophie Engobor" + listCount;

        document.body.appendChild(newSpan);
    });

    // This is task #6

    const finalBtn = document.createElement('button');
    const newLi = document.createElement("li");
    
    let friends = ['Rich', 'MoMo', 'Onyx', 'Maddy', 'Jovanna', 'Alex', 'Jarita', 'John', 'Jane', 'Miley'];
    
    finalBtn.addEventListener("click", function () {

         for (let i = 0; i < friends.length; i++) {     
            listName.innerHTML = friends[i];
            listCount++
            newLi.appendChild(listName);
            document.body.appendChild(newLi);
        }
    });
 });





            // const divFive = document.createElement("div");
            // divFive.id = "div6";
            // divFive.textContent = "Final Button";
            // const finalBtn = document.createElement("button");
            // finalBtn.id = "finalBtn";
            // finalBtn.textContent = "Final Button";
        
            // const ul = document.createElement("ul");
        
            // finalBtn.appendChild(ul);
            // divFive.appendChild(finalBtn);
            // document.body.appendChild(divFive);
        
            // const friends = ['Rich', 'MoMo', 'Onyx', 'Maddy', 'Jovanna', 'Alex', 'Jarita', 'John', 'Jane', 'Miley']
        
        
            // const finalBtn = document.getElementById("finalBtn");
            // let counter = 0;
        
            // finalBtn.addEventListener("click", function () {
            //     if (counter < 10) {
            //         let friendName = friends[counter];
            //         const li = document.createElement("li");
            //         li.textContent = friendName;
            //         ul.appendChild(li);
            //     }
            //     counter++;
            // });