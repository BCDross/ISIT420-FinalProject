document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("getResults1").addEventListener("click", function () {
        getResultsData1();
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("getResults2").addEventListener("click", function () {
        getResultsData2();
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("getResults3").addEventListener("click", function () {
        getResultsData3();
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("getResults4").addEventListener("click", function () {
        getResultsData4();
    });
});

function getResultsData1() {
    $.getJSON("api/stats/query1")
        .done(function (data) {
            let table = document.getElementById("table1");
            generateTable(table, data);
        });
}

function getResultsData2() {
    $.getJSON("api/stats/query2")
        .done(function (data) {
            let table = document.getElementById("table2");
            generateTable(table, data);
        });
}

function getResultsData3() {
    $.getJSON("api/stats/query3")
        .done(function (data) {
            let table = document.getElementById("table3");
            generateTable(table, data);
        });
}

function getResultsData4() {
    $.getJSON("api/stats/query4")
        .done(function (data) {
            let table = document.getElementById("table4");
            generateTable(table, data);
        });
}

function formatItem1(item) {
    return "Race: " + item.SubjectRace + "  Level: " + item.IncidentID + "  Date:  " + item.eDate + "  Max Temp:  " + item.TempMax;
}

function formatItem3(item) {
    return "Level: " + item.Level + "  Temp: " + item.MaxTemp + "  Date:  " + item.iDate + "  Race: " + item.Race;
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}