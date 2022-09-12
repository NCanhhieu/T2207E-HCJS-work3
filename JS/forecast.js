function loading() {
    var xHttp =new XMLHttpRequest();
    xHttp.onload = function () {
        var data = JSON.parse(this.responseText);
        var listf = data.list;
        for (var i = 0; i< listf.length; i++) {
            var time = listf[i].dt_txt;
            var temp = listf[i].main.temp;
            var wr = listf[i].weather;
            for (var j = 0; j < wr.length; j++) {
                var desc = wr[j].description;
                var image = wr[j].icon;
                var str = `<div class="fc" >
 ${time} 
 <div class="wt"> <h1><span>${temp}</span><sup>o</sup>C</h1> ${desc} </div>
<img class="wt" class="im" width="80" src="https://openweathermap.org/img/wn/${image}@2x.png" />  

</div>`;
                var ul = document.getElementById("forecast");
                ul.innerHTML += str;
                console.log(temp);
            }
        }
    };
    var link ="api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    xHttp.open("get", link, true);
    xHttp.send();
}