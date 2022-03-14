const cards = document.getElementsByClassName("color-block");
const colorArray = [];
var colorAns="";
var pickedColor = "";
var clickedColor = "";
const result = document.getElementById("result-section");
const resultSign = document.getElementById("result-sign");
const resultStatus = document.getElementById("result-status");
const scoreText = document.getElementById("score");
let score = 0;
init();
onclickImpl();

function getRandomColor() {
    var letters = '0123456789abcdef';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function rgbToHex(a){
    a=a.replace(/[^\d,]/g,"").split(","); 
    return"#"+((1<<24)+(+a[0]<<16)+(+a[1]<<8)+ +a[2]).toString(16).slice(1)
  }

function onclickImpl(){
 for(let i=0; i<cards.length;i++)
 {
     cards[i].addEventListener("click",function(){
        clickedColor = cards[i].style.backgroundColor;
        if(rgbToHex(clickedColor)==colorAns){
            result.style.visibility="visible";
            result.id = "correct";
            resultStatus.innerText="Correct!!"
            resultSign.innerHTML = "&#10003;";
            scoreText.innerHTML = ++score;
            init();

        }
        else{
            result.style.visibility="visible";
            result.id = "wrong";
            resultStatus.innerText="Try again!!"
            resultSign.innerHTML = "&#10006;";
            cards[i].style.backgroundColor = "#000";
        }
     });
 }
}

function init(){
    for (let i = 0; i < cards.length; i++) {
        var randomColor = getRandomColor();
        colorArray[i] = randomColor;
        cards[i].style.backgroundColor = randomColor;
    }
    console.log(colorArray);
    const color_para = document.getElementById("color-code");
    min = Math.ceil(0);
    max = Math.floor(cards.length);
    var randomIndex =(Math.floor(Math.random() * (max - min) + min));
    colorAns = colorArray[randomIndex]
    color_para.innerText = colorAns;
}


  