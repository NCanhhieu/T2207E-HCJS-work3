var x = 2;
var t = 0;
var flag = true;
function prime() {

    var a = document.getElementById("prime");
    var b = document.getElementById("timer");

        for (var i = 2; i <= x/2; i++) {  //kiemtrax
            if (x % i == 0) {
                flag = false;
                break;
            }
        }
        if (flag) {                        //x thoa man thi in
            t++;
            a.innerText += " " + x;
        }
        else {
            flag = true;
        }
    x++;
        b.innerText = t;

    if(t>=20){
        clearInterval(si); // xoa set interval
    }
}
var si = setInterval(prime,2500);
