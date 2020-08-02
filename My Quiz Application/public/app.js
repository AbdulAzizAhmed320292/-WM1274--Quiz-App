var obj =  [
  
    {
        Question : "Who is the Prime Minister of Pakistan?",
        Answer : "Imran Khan",
        options : ["Imran Khan" , "Nawaz Sharif" , "Asif Ali Zardari" , "me"],
    },
  
    
    {
        Question : "Who is the President of Pakistan?",
        Answer : "Arif Alvi",
        options : ["Arif Alvi" , "Yousuf raza jillani" , "Asif Ali Zardari" , "me"],
    },
  
  
    {
          Question : "which is the biggest city of Pakistan?",
          Answer : "Karachi",
          options : ["Karachi" , "Lahore" , "Islamabad" , "Faisalabad"],
    },

    {
        Question : "which is the capital city of Pakistan?",
        Answer : "Islamabad",
        options : ["Karachi" , "Lahore" , "Islamabad" , "Faisalabad"],
  },

  
  {
    Question : "Moen-jo-Daro is situated in ? ",
    Answer : "Sindh",
    options : ["Sindh" , "Punjab" , "Balochistan" , "K.P.K"],
},



];


function removeDisabled(c){
   
    c.innerHTML.setAttribute("enabled",true);
    
}




var score = 0;

var a = 0;
var b = 0;

function getValue(e,a){
    
  if(e.innerHTML === obj[a].Answer){

      

      e.setAttribute("disabled" ,true)       
      score = score + 1;
  }
  else{

      e.setAttribute("disabled",true);
  }


}



function goBack(){
    window.open("./index.html","_self");
}



function done(score){
    alert("you got " + score + " out of 5");
    
    goBack();
}






function next(){

    if(a === 4){
           done(score);
    }

a = a+1;



var questions = document.getElementById("main-div");


var para = document.getElementById("para");
para.innerHTML = "";
var para_text = document.createTextNode(obj[a].Question);

para.appendChild(para_text);
questions.appendChild(para);


var list = document.getElementById("list");
list.innerHTML = "";










var li1 = document.createElement("li");

var button1 = document.createElement("button");
var button1_text = document.createTextNode(obj[a].options[b]);
button1.setAttribute("class" , "choices");

button1.appendChild(button1_text);
button1.setAttribute("onclick","getValue(this,a)");
li1.appendChild(button1);
list.appendChild(li1)





var li2 = document.createElement("li");
var button2 = document.createElement("button");
var button2_text = document.createTextNode(obj[a].options[b+1]);

button2.appendChild(button2_text);
button2.setAttribute("onclick","getValue(this,a)");
li2.appendChild(button2);
button2.setAttribute("class" , "choices");
list.appendChild(li2)






var li3 = document.createElement("li");
var button3 = document.createElement("button");
var button3_text = document.createTextNode(obj[a].options[b+2]);

button3.appendChild(button3_text);
button3.setAttribute("onclick","getValue(this,a)");
li3.appendChild(button3);
button3.setAttribute("class" , "choices");
list.appendChild(li3)






var li4 = document.createElement("li");
var button4 = document.createElement("button");
var button4_text = document.createTextNode(obj[a].options[b+3]);

button4.appendChild(button4_text);
button4.setAttribute("onclick","getValue(this,a)");
li4.appendChild(button4);
button4.setAttribute("class" , "choices");
list.appendChild(li4)


}






















function load(){


        
    var questions = document.getElementById("main-div");
    
    var para = document.getElementById("para");
    var para_text = document.createTextNode(obj[0].Question);
    
    para.appendChild(para_text);
    questions.appendChild(para);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var li1 = document.createElement("li");
    var button1 = document.createElement("button");
    var button1_text = document.createTextNode(obj[0].options[0]);
    button1.setAttribute("class" , "choices");
       
    button1.appendChild(button1_text);
    button1.setAttribute("onclick","getValue(this,0)");
    li1.appendChild(button1);
    var list = document.getElementById("list");
    list.appendChild(li1)
    

    
    
    var li2 = document.createElement("li");
    var button2 = document.createElement("button");
    var button2_text = document.createTextNode(obj[0].options[1]);
    button2.appendChild(button2_text);
    button2.setAttribute("onclick","getValue(this,0)");
    li2.appendChild(button2);
    button2.setAttribute("class" , "choices");
    list.appendChild(li2)
    
    
    
    
    
    var li3 = document.createElement("li");
    var button3 = document.createElement("button");
    var button3_text = document.createTextNode(obj[0].options[2]);
    
    button3.appendChild(button3_text);
    button3.setAttribute("onclick","getValue(this,0)");
    li3.appendChild(button3);
    button3.setAttribute("class" , "choices");
    list.appendChild(li3)
    
    
    
    
    
    
    var li4 = document.createElement("li");
    var button4 = document.createElement("button");
    var button4_text = document.createTextNode(obj[0].options[3]);
    
    button4.appendChild(button4_text);
    button4.setAttribute("onclick","getValue(this,0)");
    li4.appendChild(button4);
    button4.setAttribute("class" , "choices");
    list.appendChild(li4)
    




    



}









//mod down counter

var minHeadingd = document.getElementById("mind");
var secHeadingd = document.getElementById("secd");


var secd = 60;
function timerd(){
    if(secd === 00){
done(score);
    }
    secd--

    secHeadingd.innerHTML = secd;


}

var intervald;

function startd(){
    
   intervald = setInterval(timerd , 1000);

}

window.startd()