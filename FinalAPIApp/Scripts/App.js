document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("getResults1").addEventListener("click", function () {
        getResultsData1();
        getResultsData2();
        getResultsData3();
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
            console.log(data);
            let row = table.insertRow();
            $.each(data, function (key, item) {
                let cell = row.insertCell();
                let text = document.createTextNode(item);
                cell.appendChild(text);
            });
        });
}

function getResultsData3() {
    $.getJSON("api/stats/query3")
        .done(function (data) {
            $.each(data, function (key, item) {
                // Add a list item for the product.
                $('<li>', { text: formatItem3(item) }).appendTo($('#displayRace3'));
            });
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