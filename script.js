let span = document.getElementById("value");
let increase = document.querySelector(".increase");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");

increase.addEventListener("click", function(){
    let count = parseInt(span.textContent) + 1 ;
    span.textContent = count;
    if(count > 0){
        span.style.color = "green";
    }
    else if( count == 0){
        span.style.color = "black";
    }
    else{
        span.style.color = "red";
    }
});
decrease.addEventListener("click", function(){
    let count = parseInt(span.textContent) - 1 ;
    span.textContent = count;
    if(count > 0){
        span.style.color = "green";
    }
    else if( count == 0){
        span.style.color = "black";
    }
    else{
        span.style.color = "red";
    }

});
reset.addEventListener("click", function(){
    span.textContent = "0";
    span.style.color = "black";
});