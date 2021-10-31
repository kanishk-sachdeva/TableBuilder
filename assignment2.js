window.addEventListener('load', Defaulttable, false);

function Defaulttable() {

    var tableb = "";

    for (var i = 0; i < 15; i++) {
        tableb = tableb + '<tr>';
        for (var j = 0; j< 15; j++) {
            tableb = tableb + '<td>' +(i+1) + ',' +(j+1) + '</td>';
        }
        tableb = tableb+"</tr>\n"; 
    }

    document.getElementById('tablelayout').innerHTML = '<table>\n' + tableb + '</table>';   

}


function TableCreator() {

    var rows, col;

    rows = document.getElementById("rows").value;
    col = document.getElementById("columns").value;

    var bodyoftable = "";

    for (var rowcount = 1; rowcount <= rows; rowcount++) {

        bodyoftable = bodyoftable + '<tr>';
        for (var colcount = 1; colcount <= col; colcount++) {
            bodyoftable = bodyoftable + '<td>';
            bodyoftable = bodyoftable + rowcount + ',' + colcount;
            bodyoftable = bodyoftable + '</td>';
        }
        bodyoftable = bodyoftable + '</tr>\n';
    }

    document.getElementById('tablelayout').innerHTML = '<table>\n' + bodyoftable + '</table>';   
}

document.getElementById("submit").addEventListener("click", TableCreator, false)