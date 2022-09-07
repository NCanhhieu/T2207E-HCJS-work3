var x = 2;
var t = 0;
//var flag2 = false;
var  si ;
function Event() {
   // if(flag2 == false) {
         si = setInterval(prime2, 1000);
    //flag2 = true;}
}
function checkPrime(x) {
    // kiem tra x co phai la so nguyen to hay ko
    if ( x < 2){
        return false;
    }else if( x == 2 || x == 3 ){
        return true;
    }else {
        for (var i = 2; i <= x/2 ; i++) {  //kiemtrax
            if (x % i == 0) {
                return false;
            }
        }
        return true;
    }

}
function nextprime(x) {
    for (var i = x+1;true; i++) {  // neu i la so nguyen to thi return i
        if (checkPrime(i)) {
            return i;
        }
    }
}
function prime2() {
    var a = document.getElementById("prime2");
    a.innerText += " " + x;
    x = nextprime(x);
    t++;
    if(t>=1){
        clearInterval(si); // xoa set interval
        t = 0;
    }
}


