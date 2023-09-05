const cityinput = document.querySelector("input");
const btn = document.querySelector("button");
const cond = document.querySelector(".condition");
const aqicolor=document.querySelector(".aqi")
async function getweath(city) {
  var keyword=city;
  const apikey = "223c9a55dfcc6ac7813bcd278c3c4142";
  const aqikey = "1681b61ea722ff2e242e5389486977800538e097";
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  const aqiurl =
    'https://api.waqi.info/search/?token=1681b61ea722ff2e242e5389486977800538e097&keyword='+keyword;
  const aqiinfo = await fetch(`${aqiurl}`).then((response) => response.json());
  const info = await fetch(`${apiurl}`).then((response) => response.json());
  console.log(info);
  console.log(aqiinfo);
  document.querySelector(".aqi").innerHTML = aqiinfo.data[0].aqi;
  document.querySelector(".location").innerHTML = info.name;
  document.querySelector(".temp").innerHTML = `${Math.round(info.main.temp)}°C`;
  switch (info.weather[0].main) {
    case "Clouds":
      cond.src = "./images/clouds.png";
      break;
    case "Clear":
      cond.src = "./images/clear.png";
      break;
    case "Rain":
      cond.src = "./images/rain.png";
      break;
    case "Mist":
      cond.src = "./images/mist.png";
      break;
    case "Snow":
      cond.src = "./images/snow.png";
      break;
    case "Haze":
      cond.src = "./images/drizzle.png";
      break;
    }
    if(aqiinfo.data[0].aqi<50){
      aqicolor.style.color="green"
    }
    else if(aqiinfo.data[0].aqi>50 && aqiinfo.data[0].aqi<100){
      aqicolor.style.color="yellow"
    }
    else{
      aqicolor.style.color="red"
    }
  var inf = document.querySelector(".info");
  inf.style.display = "block";
}
btn.addEventListener("click", () => {
  getweath(cityinput.value);
});
