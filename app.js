fetch("https://corona.lmao.ninja/v2/countries/philippines")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("New_Cases").innerHTML = data.todayCases.toLocaleString('en');
        document.getElementById("New_Deaths").innerHTML = data.todayDeaths.toLocaleString('en');
        document.getElementById("New_Recoveries").innerHTML = data.todayRecovered.toLocaleString('en');
        document.getElementById("Active_Cases").innerHTML = data.active.toLocaleString('en');
        document.getElementById("Total_Cases").innerHTML = data.cases.toLocaleString('en');
        document.getElementById("Critical_Cases").innerHTML = data.critical.toLocaleString('en');
        document.getElementById("Total_Death").innerHTML = data.deaths.toLocaleString('en');
        document.getElementById("Recovered_Cases").innerHTML = data.recovered.toLocaleString('en');
        document.getElementById("Total_Test_Done").innerHTML = data.tests.toLocaleString('en');
    });


    var clockElement = document.getElementById('clock');

    function clock() {
        clockElement.textContent = new Date().toLocaleString();
    }

    setInterval(clock, 1000);

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function data(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

console.log(data)