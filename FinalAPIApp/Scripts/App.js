document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("getResults1").addEventListener("click", function () {
        $("#query1").hide();
        $("#query2").hide();
        $("#query3").hide();
        $("#query4").hide();
        getResultsData1();
        $("#query1").show();
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("getResults2").addEventListener("click", function () {
        $("#query1").hide();
        $("#query2").hide();
        $("#query3").hide();
        $("#query4").hide();
        getResultsData2();
        $("#query2").show();
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("getResults3").addEventListener("click", function () {
        $("#query1").hide();
        $("#query2").hide();
        $("#query3").hide();
        $("#query4").hide();
        getResultsData3();
        $("#query3").show();
    });
});

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("getResults4").addEventListener("click", function () {
        $("#query1").hide();
        $("#query2").hide();
        $("#query3").hide();
        $("#query4").hide();
        getResultsData4();
        $("#query4").show();
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
    for (var i = 1; i < table.rows.length;) {
        table.deleteRow(i);
    }
    for (let element of data) {
        let row = table.insertRow();

        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}