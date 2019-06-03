//initialize currentColor
let currentColor = "white";

//append a new row to the initial cell
function addRow() {
    let tbl = document.getElementById('myTable');
    let rows = Array.from(document.getElementsByTagName("tr"));
    console.log(rows);

    //check for border
    let numRows = tbl.rows.length;
    //max rows is 12
    if (numRows < 12) {
        let newRow = document.createElement("tr");
        for (let i = 0; i < rows[0].childElementCount; i++) {
            newRow.appendChild(document.createElement("td"));
            newRow.style.background = currentColor;
            console.log(newRow);
        }
        tbl.appendChild(newRow);
    } else {
        console.log("MAX ROWS");
    }
}

//remove the last row
function deleteRow() {
    let tbl = document.getElementById('myTable');
    let numRows = tbl.rows.length;
    //delete a row if the number of row > 1
    if (numRows > 1) {
        document.getElementById("myTable").deleteRow(1);
    } else {
        console.log("MIN ROWS");
    }
}

//add a new cell to each row
function addColumn() {
    //check edge case
    let tbl = document.getElementById('myTable');
    let rows = tbl.rows;

    if (rows[0].childElementCount < 15) {
        let rows = document.getElementsByTagName('tr');
        //for each row
        for (let row of rows) {
            //create a newCol
            let newCol = document.createElement("td");
            row.appendChild(newCol);
        }
    } else {
        console.log("MAX COLS");
    }
}

function deleteColumn() {
    //check edge case
    let tbl = document.getElementById('myTable');
    let rows = tbl.rows;

    if (rows[0].childElementCount > 1) {
        let rows = document.getElementsByTagName('tr');
        //for each row
        for (let row of rows) {
            row.deleteCell(-1);
        }
    } else {
        console.log("MIN COLS");
    }
}

//eventListener for myTable for click to change color
//if hovering over the table
document.getElementById("myTable").addEventListener("mouseover", function(event) {
    let rows = document.getElementsByTagName("tr");
    //for each row
    for (let row of rows) {
        //for each column
        let cols = row.getElementsByTagName("td");
        for (let i = 0; i < cols.length; i++) {
            cols[i].onclick = function() {
                cols[i].style.background = currentColor;
            }
        }
    }
});

//eventListener for myTable for mouseup and mousedown (click and drag)
//if mouse is down
document.getElementById("myTable").addEventListener("mousedown", function(event) {
    let rows = document.getElementsByTagName("tr");
    //for each row
    for (let row of rows) {
        //for each column
        let cols = row.getElementsByTagName("td");
        for (let i = 0; i < cols.length; i++) {
            cols[i].onmouseover = function() {
                cols[i].style.background = currentColor;
            }
        }
    }
});

//if mouse is up
document.getElementById("myTable").addEventListener("mouseup", function(event) {
    let rows = document.getElementsByTagName("tr");
    //for each row
    for (let row of rows) {
        //for each column
        let cols = row.getElementsByTagName("td");
        for (let i = 0; i < cols.length; i++) {
            cols[i].onmouseover = function() {}
        }
    }
});

//change currentColor when a different color is selected using colorSelector
function changeCurrentColor() {
    if (document.getElementById("selectColor").value === "WHITE") {
        currentColor = "white";
    } else if (document.getElementById("selectColor").value === "RED") {
        currentColor = "red";
    } else if (document.getElementById("selectColor").value === "BLUE") {
        currentColor = "blue";
    } else if (document.getElementById("selectColor").value === "GREEN") {
        currentColor = "green";
    } else if (document.getElementById("selectColor").value === "YELLOW") {
        currentColor = "yellow";
    }
}

//go through all pixels and change color to currentColor if background is white
function fillAllUncolored() {
    //for all pixels
    let rows = document.getElementsByTagName("tr");
    //for each row
    for (let row of rows) {
        //for each column
        let cols = row.getElementsByTagName("td");
        for (let i = 0; i < cols.length; i++) {
            if (cols[i].style.background == "" || cols[i].style.background == "white") {
                cols[i].style.background = currentColor;
            }
        }
    }
}

//go through all pixels and change color to currentColor
function fillAll() {
    //for all pixels
    let rows = document.getElementsByTagName("tr");
    //for each row
    for (let row of rows) {
        //for each column
        let cols = row.getElementsByTagName("td");
        for (let i = 0; i < cols.length; i++) {
            cols[i].style.background = currentColor;
        }
    }
}

//go through all pixels and change color to white
function clearAll() {
    //for all pixels
    let rows = document.getElementsByTagName("tr");
    //for each row
    for (let row of rows) {
        //for each column
        let cols = row.getElementsByTagName("td");
        for (let i = 0; i < cols.length; i++) {
            cols[i].style.background = "white";
        }
    }
}
