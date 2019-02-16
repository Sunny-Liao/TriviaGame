$(document).ready(function() {

    $("#startBtn").on("click", function() {
        $(this).hide();
        });
    });

    //set and display timer on button click

    var timer = null;
    var time = 0;
    $("#startBtn").click(function() {
        time = 60;
        showTimer();
        timer = setInterval(showTimer,  1000);
    });

    function showTimer() {
        if(time < 0) {
            alert("Time has ended!!!")
            clearInterval(timer);
            return;
        }
    
        function pad(value) {
        return(value < 10?'0':"") + value;
        }
        
        $("#timer").text(Math.floor(time/60)+':' + pad(time%60));
        time--;
        }

            var firstQuestion = document.getElementsByName("firstQuestion");
            var secondQuestion = document.getElementsByName("secondQuestion");
            var thirdQuestion = document.getElementsByName("thirdQuestion");
            var fourthQuestion = document.getElementsByName("fourthQuestion");
            var fifthQuestion = document.getElementsByName("fifthQuestion");
            var sixthQuestion = document.getElementsByName("sixthQuestion");
            var seventhQuestion = document.getElementsByName("seventhQuestion");
            var eighthQuestion = document.getElementsByName("eighthQuestion");
            var ninethQuestion = document.getElementsByName("ninethQuestion");
            var tenthQuestion = document.getElementsByName("tenthQuestion");
            var myArr = [firstQuestion, secondQuestion, thirdQuestion, fourthQuestion, fifthQuestion, sixthQuestion, seventhQuestion, eighthQuestion, ninethQuestion, tenthQuestion];
            var score = 0;
            var score2 = 0;
            var score3 = 0;
            var score4 = 0;
            var score5 = 0;
            var score6 = 0;
            var score7 = 0;
            var score8 = 0;
            var score9 = 0;
            var score10 = 0;
            var noScore = 0;
            var firstPara = document.getElementById("firstPara");
            var secondPara = document. getElementById("secondPara");

            function submitted() {
            //for(var i = 0; i < myArr.length; i++) {
                clearInterval(timer);
                    
                for(var o = 0; o < firstQuestion.length; o++) {
                    var num = o+1;
                    var name= "choice" + num ;
                        if ((document.getElementById(name).getAttribute("value") =="true") && (document.getElementById(name).checked))
                        {
                            score++;
                            $("#correctScore").text(score);
                            break;

                        }
                }
                if(score==0)
                {
                    noScore++;
                    $("#wrongScore").text(noScore);
                    document.getElementById("secondPara").innerHTML =document.getElementById("secondPara").innerHTML + "You got question 1 wrong!<br>";;
                }
                
                //question 2
                for(var o = 3; o < secondQuestion.length + 3; o++) {
                    var num = o+1;
                    var name= "choice" + num ;
                        if ((document.getElementById(name).getAttribute("value") =="true") && (document.getElementById(name).checked))
                        {
                            score++;
                            score2++;
                            $("#correctScore").text(score);
                            break;

                        }
                }
                if(score2==0)
                {
                    noScore++;
                    $("#wrongScore").text(noScore);
                    document.getElementById("secondPara").innerHTML =document.getElementById("secondPara").innerHTML + "You got question 2 wrong!<br>";;
                }

                //question 3
                for(var o = 6; o < thirdQuestion.length + 6; o++) {
                    var num = o+1;
                    var name= "choice" + num ;
                        if ((document.getElementById(name).getAttribute("value") =="true") && (document.getElementById(name).checked))
                        {
                            score++;
                            score3++;
                            $("#correctScore").text(score);
                            break;

                        }
                }
                if(score3==0)
                {
                    noScore++;
                    $("#wrongScore").text(noScore);
                    document.getElementById("secondPara").innerHTML =document.getElementById("secondPara").innerHTML + "You got question 3 wrong!<br>";;
                    $("#correctScore").text=0;
                }

                //question 4
                for(var o = 9; o < fourthQuestion.length + 9; o++) {
                    var num = o+1;
                    var name= "choice" + num ;
                        if ((document.getElementById(name).getAttribute("value") =="true") && (document.getElementById(name).checked))
                        {
                            score++;
                            score4++;
                            $("#correctScore").text(score);
                            break;

                        }
                }
                if(score4==0)
                {
                    noScore++;
                    $("#wrongScore").text(noScore);
                    document.getElementById("secondPara").innerHTML =document.getElementById("secondPara").innerHTML + "You got question 4 wrong!<br>";;
                    $("#correctScore").text=0;
                }

                //question 5
                for(var o = 12; o < fifthQuestion.length + 12; o++) {
                    var num = o+1;
                    var name= "choice" + num ;
                        if ((document.getElementById(name).getAttribute("value") =="true") && (document.getElementById(name).checked))
                        {
                            score++;
                            score5++;
                            $("#correctScore").text(score);
                            break;

                        }
                }
                if(score5==0)
                {
                    noScore++;
                    $("#wrongScore").text(noScore);
                    document.getElementById("secondPara").innerHTML =document.getElementById("secondPara").innerHTML + "You got question 5 wrong!<br>";;
                    $("#correctScore").text=0;
                }

                //question 6
                for(var o = 15; o < fifthQuestion.length + 15; o++) {
                    var num = o+1;
                    var name= "choice" + num ;
                        if ((document.getElementById(name).getAttribute("value") =="true") && (document.getElementById(name).checked))
                        {
                            score++;
                            score6++;
                            $("#correctScore").text(score);
                            break;

                        }
                }
                if(score6==0)
                {
                    noScore++;
                    $("#wrongScore").text(noScore);
                    document.getElementById("secondPara").innerHTML =document.getElementById("secondPara").innerHTML + "You got question 6 wrong!<br>";;
                    $("#correctScore").text=0;
                }

                //question 7
                for(var o = 18; o < fifthQuestion.length + 18; o++) {
                    var num = o+1;
                    var name= "choice" + num ;
                        if ((document.getElementById(name).getAttribute("value") =="true") && (document.getElementById(name).checked))
                        {
                            score++;
                            score7++;
                            $("#correctScore").text(score);
                            break;

                        }
                }
                if(score7==0)
                {
                    noScore++;
                    $("#wrongScore").text(noScore);
                    document.getElementById("secondPara").innerHTML =document.getElementById("secondPara").innerHTML + "You got question 7 wrong!<br>";;
                    $("#correctScore").text=0;
                }

                //question 8
                for(var o = 21; o < fifthQuestion.length + 21; o++) {
                    var num = o+1;
                    var name= "choice" + num ;
                        if ((document.getElementById(name).getAttribute("value") =="true") && (document.getElementById(name).checked))
                        {
                            score++;
                            score8++;
                            $("#correctScore").text(score);
                            break;

                        }
                }
                if(score8==0)
                {
                    noScore++;
                    $("#wrongScore").text(noScore);
                    document.getElementById("secondPara").innerHTML =document.getElementById("secondPara").innerHTML + "You got question 8 wrong!<br>";;
                    $("#correctScore").text=0;
                }

                //question 9
                for(var o = 24; o < fifthQuestion.length + 24; o++) {
                    var num = o+1;
                    var name= "choice" + num ;
                        if ((document.getElementById(name).getAttribute("value") =="true") && (document.getElementById(name).checked))
                        {
                            score++;
                            score9++;
                            $("#correctScore").text(score);
                            break;

                        }
                }
                if(score9==0)
                {
                    noScore++;
                    $("#wrongScore").text(noScore);
                    document.getElementById("secondPara").innerHTML =document.getElementById("secondPara").innerHTML + "You got question 9 wrong!<br>";;
                    $("#correctScore").text=0;
                }

                //question 10
                for(var o = 27; o < tenthQuestion.length + 27; o++) {
                    var num = o+1;
                    var name= "choice" + num ;
                        if ((document.getElementById(name).getAttribute("value") =="true") && (document.getElementById(name).checked))
                        {
                            score++;
                            score10++;
                            $("#correctScore").text(score);
                            break;

                        }
                }
                if(score10==0)
                {
                    noScore++;
                    $("#wrongScore").text(noScore);
                    document.getElementById("secondPara").innerHTML =document.getElementById("secondPara").innerHTML + "You got question 10 wrong!<br>";;
                    $("#correctScore").text=0;
                }
            
                
           
        
        }
    

    
        
    

    




    
    




