const nevek = ['Red','Orange', 'Yellow', 'Green', 'Blue','Pink','Gray','Black'];
const szinek = ['crimson','orange','gold','forestgreen','dodgerblue','pink','gray','black'];
let rnd = 0;
let rnd2 = 0;
let score = 0;
let timer= 45;
let multi = 1;
let multicount = 0;

if(timer!=0){
function generate(){
    rnd = Math.floor(Math.random()*szinek.length)
    document.getElementById("meaning").innerHTML=nevek[rnd]
    rnd2 = Math.floor(Math.random()*szinek.length)
    document.getElementById("color").innerHTML=nevek[rnd2]
    rnd2 = Math.floor(Math.random()*szinek.length)
    document.getElementById("color").style.color=szinek[rnd2]
}

function checking(user){
    if(rnd==rnd2 && user=="yes"){
        document.getElementById("no").style.boxShadow="inset 5px 5px green, inset -5px -5px green"
        document.getElementById("yes").style.boxShadow="inset 5px 5px green, inset -5px -5px green"
        setTimeout(() => {
            document.getElementById("no").style.boxShadow='none';
          }, 300);
          setTimeout(() => {
            document.getElementById("yes").style.boxShadow='none';
          }, 300);
          score = score+(50*multi);
          document.getElementById("score").innerHTML=score;
          generate();
          multicount= multicount+1;
        }
    else if (rnd!=rnd2 && user=="no"){
            document.getElementById("no").style.boxShadow="inset 5px 5px green, inset -5px -5px green"
            document.getElementById("yes").style.boxShadow="inset 5px 5px green, inset -5px -5px green"
            setTimeout(() => {
                document.getElementById("no").style.boxShadow='none';
              }, 300);
              setTimeout(() => {
                document.getElementById("yes").style.boxShadow='none';
              }, 300);
              score = score+(50*multi);
              document.getElementById("score").innerHTML=score;
              generate();
              multicount= multicount+1;
    }
    else{
        document.getElementById("no").style.boxShadow="inset 5px 5px red, inset -5px -5px red"
            document.getElementById("yes").style.boxShadow="inset 5px 5px red, inset -5px -5px red"
            setTimeout(() => {
                document.getElementById("no").style.boxShadow='none';
              }, 300);
              setTimeout(() => {
                document.getElementById("yes").style.boxShadow='none';  
              }, 300);
              document.getElementById("score").innerHTML=score;
              multi=1;
              multicount=0;
              document.getElementById("progress").innerHTML="○○○○";
              document.getElementById("szorzo").innerHTML=multi;
              document.getElementById("max").innerHTML="";
              generate();
          

    }
    if(multi!=10){
        if(multicount==1){
            document.getElementById("progress").innerHTML="●○○○"
        }
        else if(multicount==2){
            document.getElementById("progress").innerHTML="●●○○"
        }
        else if(multicount==3){
            document.getElementById("progress").innerHTML="●●●○"
        }
        else if(multicount==4){
            document.getElementById("progress").innerHTML="●●●●"
            setTimeout(() => {
            document.getElementById("progress").innerHTML="○○○○"
            }, 800);
            multi=multi+1;
            multicount=0;
            document.getElementById("szorzo").innerHTML=multi
        }
    }
    else{
        document.getElementById("progress").innerHTML="";
        document.getElementById("max").innerHTML="\t MAX";
    }


}

document.onkeydown = keyboard;
function keyboard(e){
    let user="";
    if (e.keyCode == 37) {
        document.getElementById('no').style.backgroundColor='gray';
        setTimeout(() => {
            document.getElementById('no').style.backgroundColor='white';
          }, 300);
          user="no"
          checking(user)
    }
    else if (e.keyCode == 39) {
        document.getElementById('yes').style.backgroundColor='gray';
        setTimeout(() => {
            document.getElementById('yes').style.backgroundColor='white';
          }, 300);
          user="yes"
          checking(user);
          
    }
}
}
else{
    document.getElementById("score").innerHTML="<b>"+score+"</b>";
    document.getElementById("final").innerHTML="Final Score:";


}

setInterval(() => {
    if(timer!=0){
        timer=timer-1;   
        document.getElementById("timer").innerHTML=timer;
    }
}, 1000);


