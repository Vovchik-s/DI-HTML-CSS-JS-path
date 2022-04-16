




///////////// ADVANCED TRY \\\\\\\\\\\\\\\


// function createCalendar(year, month){

//     let nowDate = new Date(); // MY CURRENT DATE
//     // console.log(nowDate)

//     const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

//     const months = 
//     ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//      // Check if year & month is not a number - return current month & year
//     this.year = isNaN(year) ? nowDate.getFullYear(): year;
//     this.month = isNaN(month)? nowDate.getMonth(): month;     
//     // console.log(this.year)

//     // Days in curr month (show last month ??)
// let currentMonthLength = new Date(this.year, this.month,0).getDate()  
//     // console.log(currentMonthLength)

// }

// createCalendar()


              ////////////////// SECOND (simple table) TRY \\\\\\\\\\\\\\\\\\\


let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

let btn = document.querySelector('button');
let myCalendar = document.querySelector('#calendar');


let daysNum = [[1,2,3,4,5,6,7],[8,9,10,11,12,13,14],[15,16,17,18,19,20,21],[22,23,24,25,26,27,28],[29,30]]



btn.addEventListener('click', createCalendar) // creating calendar with f-n



function createCalendar() {
    let table = document.createElement('table');  // TABLE
    let headerRow = document.createElement('tr'); // ROW

    days.forEach(headerText => {                  // for each day from array creating a header
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    daysNum.forEach(day => {
        let row = document.createElement('tr');  /// created a row for each week (array inside array)

        day.forEach(num => {         // created a cell inside each week
            let cell = document.createElement('td');
            let textNode = document.createTextNode(num);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })

        table.appendChild(row);
    });

    myCalendar.appendChild(table);
};

