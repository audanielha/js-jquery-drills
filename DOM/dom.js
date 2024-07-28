document.addEventListener("DOMContentLoaded",function(){

    // START TASK 1
    let btn = document.createElement("button");
    let btnText = document.createTextNode("Click Me!");
    btn.appendChild(btnText);
    document.body.appendChild(btn)

    btn.addEventListener("click", function(){
        alert(btnTextBox.value);
    })
    // END TASK 1

    // START TASK 2
    let btnTextBox = document.querySelector("#textBox");
    let textButton = document.querySelector("#textButton");

    textButton.addEventListener("click", ()=>{
        alert(btnTextBox.value)
    });
    // END TASK 2

    // START TASK 3
    let div = document.querySelector("div")

    div.style.width="50px";
    div.style.height="50px";
    div.style.backgroundColor="beige";
    div.style.margin="10px";

    div.addEventListener("mouseover",function(){
        div.style.backgroundColor="green";
    });
    div.addEventListener("mouseout",function(){
        div.style.backgroundColor="beige";
    });
    //END TASK 3

    // START TASK 4
    const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

    let p = document.querySelector("p");

    p.addEventListener("click", function(){
        let randomColor = "#";
        for(let i = 0; i < 6; i++){
            randomColor += hexCharacters[Math.floor(Math.random()*16)];
        }
        for(let i = 0; i <= 3; i++ ){
        p.style.color=`${randomColor}`
    }})
    // END TASK 4

    // START TASK 5
    let spanButton = document.querySelector(".task-five");
    let fiveDiv = document.querySelector(".five");

    spanButton.addEventListener("click", function(){
        let span = document.createElement("span");
        fiveDiv.appendChild(span);
    });
    // END TASK 5

    // START TASK 6
    let ul = document.querySelector("ul");
    let sixButton = document.querySelector(".task-six");

    let friends = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
    let counter = 0;
    sixButton.addEventListener("click", function(){
        let li = document.createElement("li");
        li.textContent=`${friends[counter]}`
        ul.appendChild(li);
        counter ++;
    });
    // END TASK 6
});
