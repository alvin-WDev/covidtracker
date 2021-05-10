fetch("https://corona.lmao.ninja/v2/countries/philippines")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("New_Cases").innerHTML = data.todayCases;
        document.getElementById("New_Deaths").innerHTML = data.todayDeaths;
        document.getElementById("New_Recoveries").innerHTML = data.todayRecovered;
        document.getElementById("Active_Cases").innerHTML = data.active;
        document.getElementById("Total_Cases").innerHTML = data.cases;
        document.getElementById("Critical_Cases").innerHTML = data.critical;
        document.getElementById("Total_Death").innerHTML = data.deaths;
        document.getElementById("Recovered_Cases").innerHTML = data.recovered;
        document.getElementById("Total_Test_Done").innerHTML = data.tests;
    });





    var clockElement = document.getElementById('clock');

    function clock() {
        clockElement.textContent = new Date().toLocaleString();
    }

    setInterval(clock, 1000);

