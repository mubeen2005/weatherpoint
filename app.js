    let searchbtn = document.querySelector(".search button");
    let input = document.querySelector(".search input");
    let temp = document.querySelector(".temp h1");
    let des = document.querySelector(".temp h2");
    let humidity = document.querySelector(".humidity-info h2")
    let wind = document.querySelector(".wind-info h2");
    let logo = document.querySelector(".logo img");
    let notFound = document.querySelector(".wrong")
    let card =document.querySelector(".cards")

    async function checkWheather(city) {
        const api_key = "b02308231626008c508f2c57f6f2fe5c";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

        const weather_data = await fetch(`${url}`).then(Response =>
            Response.json()
        );

        console.log(weather_data)

        if(weather_data.cod === "404"){
            notFound.style.display="block";
        card.style.display="none"

            console.log("error")
            return;

        }

        notFound.style.display="none";
        card.style.display="block";


        temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)} °C`;

        des.innerHTML = `${weather_data.weather[0].description}`;

        humidity.innerHTML = `${weather_data.main.humidity} %`;

        wind.innerHTML = `${weather_data.wind.speed} Km/H`;

        switch (weather_data.weather[0].main) {
            case "Clouds":
                logo.src = "cloud.png";
                break;

            case "Clear":
                logo.src = "clear.png";
                break;
            case "Rain":
                logo.src = "rain.png";
                break;
            case "Mist":
                logo.src = "mist.png";
                break;
            case "Snow":
                logo.src = "snow.png";
                break;
        }

    }

    searchbtn.addEventListener("click",() => {
        checkWheather(input.value);
    });