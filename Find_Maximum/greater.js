function my(){
    var a= parseInt(prompt("Enter the 1st Number"));
    var b=  parseInt(prompt("Enter the 2nd Number"));
    var c= parseInt(prompt("Enter the 3rd Number"));
    var max;
    if(a>b && a>c){
        max =a;
    }
    else{
        if(b>c){
            max=b;
        }
        else{
            max=c;
        }
    }
    window.alert("Max Number is"+max);
}