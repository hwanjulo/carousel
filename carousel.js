function imgSwitch(x){
  switch(x){
    case 0 : 
    firstImg.style.display = "inline";
    secondImg.style.display = "none";
    thirdImg.style.display = "none";
    fourthImg.style.display = "none";
    fifthImg.style.display = "none";   
    break;
    
    case 1 : 
    firstImg.style.display = "none";
    secondImg.style.display = "inline";
    thirdImg.style.display = "none";
    fourthImg.style.display = "none";
    fifthImg.style.display = "none";
    break;
    
    case 2 : 
    firstImg.style.display = "none";
    secondImg.style.display = "none";
    thirdImg.style.display = "inline";
    fourthImg.style.display = "none";
    fifthImg.style.display = "none";    
    break; 
    
    case 3 : 
    firstImg.style.display = "none";
    secondImg.style.display = "none";
    thirdImg.style.display = "none";
    fourthImg.style.display = "inline";
    fifthImg.style.display = "none"; 
    break;
    
    case 4 : 
    firstImg.style.display = "none";
    secondImg.style.display = "none";
    thirdImg.style.display = "none";
    fourthImg.style.display = "none";
    fifthImg.style.display = "inline"; 
    break;
      
    default :
      alert('Error');
  }
}

function leftArrowClick(){
  handler = (handler - 1 +5) % 5;
  imgSwitch(handler); 
} 

function rightArrowClick(){
  handler = (handler + 1) % 5;
  imgSwitch(handler);   
} 

function firstDotClick(){
  handler = 0;
  imgSwitch(handler);   
} 

function secondDotClick(){
  handler = 1;
  imgSwitch(handler);   
}

function thirdDotClick(){
  handler = 2;
  imgSwitch(handler);   
}

function fourthDotClick(){
  handler = 3;
  imgSwitch(handler);   
}

function fifthDotClick(){
  handler = 4;
  imgSwitch(handler);   
}