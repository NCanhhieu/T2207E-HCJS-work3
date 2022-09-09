function update1() {
    var citya = new XMLHttpRequest();
    citya.onload = function () {
        var data = JSON.parse(this.responseText);
        console.log(data.name)
        var x2 = document.getElementById("city");
        x2.innerText = data.name;
        console.log(data.main.temp);    // nhiet do
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t; //26
        var p = data.main.pressure;
        var x3 = document.getElementById("press");
        x3.innerText = p;
    };
    var link = "https://api.openweathermap.org/data/2.5/weather?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    citya.open("get", link, true);
    citya.send();
}
function update2() {
    var cityb = new XMLHttpRequest();
    cityb.onload = function () {
        var data = JSON.parse(this.responseText);
        console.log(data.name)
        var x2 = document.getElementById("city");
        x2.innerText = data.name;
        console.log(data.main.temp);    // nhiet do
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t; //26
        var p = data.main.pressure;
        var x3 = document.getElementById("press");
        x3.innerText = p;
    };
    var link = "https://api.openweathermap.org/data/2.5/weather?q=saigon,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    cityb.open("get", link, true);
    cityb.send();
}
function update3() {
    var cityc = new XMLHttpRequest();
    cityc.onload = function () {
        //console.log(this.responseText);
        //convert to obj of js
        var data = JSON.parse(this.responseText);
        console.log(data.name)
        var x2 = document.getElementById("city");
        x2.innerText = data.name;
        console.log(data.main.temp);    // nhiet do
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t; //26
        var p = data.main.pressure;
        var x3 = document.getElementById("press");
        x3.innerText = p;
    };
    var link ="https://api.openweathermap.org/data/2.5/weather?q=London,english&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    cityc.open("get",link, true);
    cityc.send();   //lay json
}
function update4() {
    var cityd = new XMLHttpRequest();
    cityd.onload = function () {
        //console.log(this.responseText);
        //convert to obj of js
        var data = JSON.parse(this.responseText);
        console.log(data.name)
        var x2 = document.getElementById("city");
        x2.innerText = data.name;
        console.log(data.main.temp);    // nhiet do
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t; //26
        var p = data.main.pressure;
        var x3 = document.getElementById("press");
        x3.innerText = p;
    };
    var link ="https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    cityd.open("get",link, true);
    cityd.send();   //lay json
}
function update5() {
    var cityd = new XMLHttpRequest();
    cityd.onload = function () {
        //console.log(this.responseText);
        //convert to obj of js
        var data = JSON.parse(this.responseText);
        console.log(data.name)
        var x2 = document.getElementById("city");
        x2.innerText = data.name;
        console.log(data.main.temp);    // nhiet do
        var t = data.main.temp;
        var x1 = document.getElementById("temp");
        x1.innerText = t; //26
        var p = data.main.pressure;
        var x3 = document.getElementById("press");
        x3.innerText = p;
    };
    var link ="https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=09a71427c59d38d6a34f89b47d75975c&units=metric"
    cityd.open("get",link, true);
    cityd.send();   //lay json
}
function clearResult() {
    var x = document.getElementById("city");
    x.innerText = "abc";
    var y = document.getElementById("temp");
    y.innerText = 20;
    var x3 = document.getElementById("press");
    x3.innerText = 1000;
}