let bt1 = document.getElementById("button1");
let bt2 = document.getElementById("button2");
let bt3 = document.getElementById("button3");
let bt4 = document.getElementById("button4");
let bt5 = document.getElementById("button5");
let bt6 = document.getElementById("button6");
let bt7 = document.getElementById("button7");
let bt8 = document.getElementById("button8");
let bt9 = document.getElementById("button9");
let chance = "X";
let result = document.getElementById("winner");
let gameover = false;
let reset = document.getElementById("reset-game");

chance_change = function(){
    if(chance == "X"){
        chance="O";
    }else{
        chance = "X";
    }
}

winning_color = function(btn1,btn2,btn3){
    btn1.style.background = "lightgreen";
    btn2.style.background = "lightgreen";
    btn3.style.background = "lightgreen";
}

check_win = function(){
    if(bt1.innerText==bt2.innerText && bt1.innerText==bt3.innerText && bt1.innerText!=""){
        winning_color(bt1,bt2,bt3);
        result.innerText=chance+" Wins";
        gameover=true;
    }
    else if(bt4.innerText==bt5.innerText && bt4.innerText==bt6.innerText && bt4.innerText!=""){
        winning_color(bt4,bt5,bt6);
        result.innerText=chance+" Wins";
        gameover=true;
        }
    else if(bt7.innerText==bt8.innerText && bt7.innerText==bt9.innerText && bt7.innerText!=""){
        winning_color(bt7,bt8,bt9);
        result.innerText=chance+" Wins";
        gameover=true;
        }
    else if(bt1.innerText==bt4.innerText && bt1.innerText==bt7.innerText && bt1.innerText!=""){
        winning_color(bt1,bt4,bt7);
        result.innerText=chance+" Wins";
        gameover=true;
        }
    else if(bt2.innerText==bt5.innerText && bt2.innerText==bt8.innerText && bt2.innerText!=""){
        winning_color(bt2,bt5,bt8);
        result.innerText=chance+" Wins";
        gameover=true;
        }
    else if(bt3.innerText==bt6.innerText && bt3.innerText==bt9.innerText && bt3.innerText!=""){
        winning_color(bt3,bt6,bt9);
        result.innerText=chance+" Wins";
        gameover=true;
       }
    else if(bt1.innerText==bt5.innerText && bt1.innerText==bt9.innerText && bt1.innerText!=""){
        winning_color(bt1,bt5,bt9);
        result.innerText=chance+" Wins";
        gameover=true;
        }
    else if(bt3.innerText==bt5.innerText && bt3.innerText==bt7.innerText && bt3.innerText!=""){
        winning_color(bt3,bt5,bt7);
        result.innerText=chance+" Wins";
        gameover=true;
       }
    else if (isDraw()) {
        result.innerText = "It's a Draw !";
        gameover = true;
        }
}

isDraw = function() {
    return bt1.innerText != "" && bt2.innerText != "" && bt3.innerText != "" && bt4.innerText != "" && bt5.innerText != "" && bt6.innerText != "" && bt7.innerText != "" && bt8.innerText != "" && bt9.innerText != "";
}

bt1.onclick = function(){
    if(!gameover && bt1.innerText==""){
        bt1.innerText = chance;
        check_win()
        chance_change()
    }
}
bt2.onclick = function(){
    if(!gameover && bt2.innerText==""){
        bt2.innerText = chance;
        check_win()
        chance_change()
    }
}
bt3.onclick = function(){
    if(!gameover && bt3.innerText==""){
        bt3.innerText = chance;
        check_win()
        chance_change()
    }
}
bt4.onclick = function(){
    if(!gameover && bt4.innerText==""){
        bt4.innerText = chance;
        check_win()
        chance_change()
    }
}
bt5.onclick = function(){
    if(!gameover && bt5.innerText==""){
        bt5.innerText = chance;
        check_win()
        chance_change()
    }
}
bt6.onclick = function(){
    if(!gameover && bt6.innerText==""){
        bt6.innerText = chance;
        check_win()
        chance_change()
    }
}
bt7.onclick = function(){
    if(!gameover && bt7.innerText==""){
        bt7.innerText = chance;
        check_win()
        chance_change()
    }
}
bt8.onclick = function(){
    if(!gameover && bt8.innerText==""){
        bt8.innerText = chance;
        check_win()
        chance_change()
    }
}
bt9.onclick = function(){
    if(!gameover && bt9.innerText==""){
        bt9.innerText = chance;
        check_win()
        chance_change()
    }
}

reset.onclick = function() {
    bt1.innerText = "";
    bt1.style.background = "#009990";

    bt2.innerText = "";
    bt2.style.background = "#009990";

    bt3.innerText = "";
    bt3.style.background = "#009990";

    bt4.innerText = "";
    bt4.style.background = "#009990";

    bt5.innerText = "";
    bt5.style.background = "#009990";

    bt6.innerText = "";
    bt6.style.background = "#009990";

    bt7.innerText = "";
    bt7.style.background = "#009990";

    bt8.innerText = "";
    bt8.style.background = "#009990";

    bt9.innerText = "";
    bt9.style.background = "#009990";

    result.innerText = "Result";
    chance = "X";
    gameover = false;
};
