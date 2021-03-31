player1_name = localStorage.getItem("player1_name"); 
player2_name = localStorage.getItem("player2_name"); 
player1_score= 0;
player2_score= 0;



document.getElementById("player1_name").innerHTML= player1_name + " : ";
document.getElementById("player2_name").innerHTML= player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_q").innerHTML="Question turn: "+player1_name;
document.getElementById("player_ans").innerHTML="Answer turn: "+player2_name;


function send() {
	num1= document.getElementById("num1").value ;
    num2= document.getElementById("num2").value;
    document.getElementById("output").style.display = "inline-block" ; 

    actual_ans= parseInt(num1)* parseInt(num2);

    question= "<h4>"+num1+" X "+num2+"</h4>";
    input_box= "<br> <br>  Answer: <input id='ans' type='text' placeholder='Enter your answer here'>";
    check_button= "<br> <br> <button onclick='check()' class='btn' style='background-color:red;color:white;'>Check</button> ";
    
    
    row= question+ "<br>" + input_box+check_button;

    document.getElementById("output").innerHTML=row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("send_qs_title").style.display = "none" ;
    document.getElementById("num1").value = "" ;
    document.getElementById("num2").value = "" ;
}

question_turn = "player1" ; 
answer_turn = "player2" ;

function check()
{
    get_answer = document.getElementById("ans").value ;
   
    if(get_answer==actual_ans) {
            if(answer_turn=="player1") {
                document.getElementById("output").style.display = "inline-block" ; 
                player1_score = player1_score + 1;
                document.getElementById("player1_score").innerHTML = player1_score ;
                document.getElementById("remark_of_answer").innerHTML = player1_name + " has scored a point! Keep going! 👍 "  ;
               
            }
            else {
                document.getElementById("output").style.display = "inline-block" ; 
                player2_score = player2_score + 1;
                document.getElementById("player2_score").innerHTML = player2_score ;
                document.getElementById("remark_of_answer").innerHTML = player2_name + " has scored a point! Keep going! 👍  "  ;
            }
    }

    if(question_turn=="player1") {
        document.getElementById("output").style.display = "inline-block" ; 
        question_turn = "player2" ;
        document.getElementById("player_q").innerHTML = "Question Turn: " + player2_name;
    }
    else {
        document.getElementById("output").style.display = "inline-block" ; 
        question_turn = "player1" ;
        document.getElementById("player_q").innerHTML = "Question Turn: " + player1_name;

    }

    if(answer_turn=="player1") {
        document.getElementById("output").style.display = "inline-block" ; 
        answer_turn = "player2" ;
        document.getElementById("player_ans").innerHTML = "Answer turn: " + player2_name ;
        
    }
    else {
        document.getElementById("output").style.display = "inline-block" ; 
        answer_turn = "player1" ;
        document.getElementById("player_ans").innerHTML = "Answer turn: " + player1_name ;
       
    }
    document.getElementById("output").innerHTML="" ;
    document.getElementById("output").style.display = "none" ; 
}

