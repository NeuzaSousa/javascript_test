var array_number = new Array(9);
array_number[0]= "4 2 7 3 5 1 9 8 6";
array_number[1]= "9 8 3 7 6 2 5 1 4";
array_number[2]= "1 5 6 8 9 4 7 2 3";
array_number[3]= "2 3 9 1 8 5 4 6 7";
array_number[4]= "7 4 1 6 3 9 2 5 8";
array_number[5]= "5 6 8 2 4 7 1 3 9";
array_number[6]= "8 7 2 9 1 3 6 4 5";
array_number[7]= "3 9 5 4 2 6 8 7 1";
array_number[8]= "6 1 4 5 7 8 3 9 2";

  // exercise 1
  
  function createTable() {
    // creates a to_verify <table> element and a <tbody> element
    const to_verify = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 1; i <= 9; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 1; j <= 9; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    to_verify.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(to_verify);
    // sets the border attribute of tbl to '1'
    to_verify.setAttribute("border", "1");
  }

  // exercise 2

 function F11() {
    let arr = []; // creating a new array
    for(i=0; i<array_number.length; i++) { // looping through the given array, using split to remove the white spaces
        arr[i] = array_number[i].split(" "); // populating each line of the new array with the lines of the given array
    }
    // creating a new table and table body
    const to_check = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < arr.length; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < arr[i].length; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`${arr[i][j]}`); // populating the cells with the elements of the new array
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    to_check.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(to_check);
    // sets the border attribute of tbl to '1'
    to_check.setAttribute("border", "1");
 }

    // exercise 3

    function F12() {
        let arr = []; // creating a new array
        for(var i=0; i<array_number.length; i++) { 
            arr[i] = array_number[i].split(" ");
            //console.log(arr);
        }
        table = document.getElementById("table"); // getting the HTML table
        // rows
        for(var i = 0, k=0; i < table.rows.length, k<arr.length; i++, k++) // looping through the rows and the new array
        {
          // cells
          for(var j = 0, l=0; j < table.rows[i].cells.length, l<arr[k].length; j++, l++) // looping through the cells and each element of the new array
          {
              table.rows[i].cells[j].innerHTML = arr[k][l]; // populating the cells with the elements of the new array
          }
        }

    }