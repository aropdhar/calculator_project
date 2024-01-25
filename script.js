let input = document.querySelector(".inputbox");
let btn1 =  document.querySelector(".btn_1");
let btn2 =  document.querySelector(".btn_2");
let btn3 =  document.querySelector(".btn_3");
let btn4 =  document.querySelector(".btn_4");
let btn5 =  document.querySelector(".btn_5");
let btn6 =  document.querySelector(".btn_6");
let btn7 =  document.querySelector(".btn_7");
let btn8 =  document.querySelector(".btn_8");
let btn9 =  document.querySelector(".btn_9");
let btn10 = document.querySelector(".btn_10");
let btn11 = document.querySelector(".btn_11");
let btn12 = document.querySelector(".btn_12");
let btn13 = document.querySelector(".btn_13");
let btn14 = document.querySelector(".btn_14");
let btn15 = document.querySelector(".btn_15");
let btn16 = document.querySelector(".btn_16");
let btn17 = document.querySelector(".btn_17");
let btn18 = document.querySelector(".btn_18");



btn1.addEventListener("click" , function(){
      
        input.value += 7;
});


btn2.addEventListener("click" , function(){

    input.value += 8;
    
});

btn3.addEventListener("click" , function(){

    input.value += 9;

});

btn4.addEventListener("click" , function(){

    input.value += " + " ;

});

btn5.addEventListener("click" , function(){

    input.value += 4 ;

});

btn6.addEventListener("click" , function(){

    input.value += 5 ;

});

btn7.addEventListener("click" , function(){

    input.value += 6 ;

});

btn8.addEventListener("click" , function(){

    input.value += " - " ;

});

btn9.addEventListener("click" , function(){

    input.value += 1 ;

});

btn10.addEventListener("click" , function(){

    input.value += 2 ;

});

btn11.addEventListener("click" , function(){

    input.value += 3 ;

});

btn12.addEventListener("click" , function(){

    input.value += " * " ;

});


btn13.addEventListener("click" , function(){

    input.value += "00" ;

});

btn14.addEventListener("click" , function(){

    input.value += "0" ;

});

btn16.addEventListener("click" , function(){

    input.value += " / " ;

});


btn18.addEventListener("click" , function(){
    
    input.value += ".";
    
});


btn15.addEventListener("click" , function(){
    
    let btn15 = eval(input.value);
    input.value = btn15;
    
});


btn17.addEventListener("click" , function(){

    input.value = location.reload();

});