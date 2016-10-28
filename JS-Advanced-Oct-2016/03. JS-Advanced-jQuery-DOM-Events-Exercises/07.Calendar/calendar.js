function calendar([day, month, year]) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const shortMonthNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    month = month - 1;
 
    let container = $('#content');
    let date = new Date();
    date.setFullYear(year, month);
    date.setDate(1);
    let table = $('<table></table>');
    let tBody = $('<tbody></tbody>');
 
    //
    // table header
    //
 
    $(`<caption>${monthNames[date.getMonth()]} ${date.getFullYear()}</caption>`).appendTo(table);
    let trHeaders = $('<tr></tr>');
    shortMonthNames.forEach(dayOfWeek => {
        $(`<th>${dayOfWeek}</th>`).appendTo(trHeaders);
    });
    trHeaders.appendTo(table);
 
    //
    // table body
    //
 
    // empty days on the front
    let emptyCellsToAdd = date.getDay() == 0 ? 6 : date.getDay() - 1;
    let emptyTrFront = $('<tr></tr>');
    for (let i = 0; i < emptyCellsToAdd; i++) {
 
        $('<td></td>').appendTo(emptyTrFront);
    }
   
   
    //IF CLAUSE ADDED! ONLY IF EMPTY CELLS !=0 ADD <tr>
    if (emptyCellsToAdd!=0) {
        for (let i = 0; i < 7-emptyCellsToAdd; i++) {
           
            //CHECK IF TODAY! OTHERWISE IF TODAY IS ON THE FIRST ROW, IT DOES NOT GET CLASS="TODAY"
            if (date.getDate() == day)
                $(`<td class="today">${date.getDate()}</td>`).appendTo(emptyTrFront);
            else
                $(`<td>${date.getDate()}</td>`).appendTo(emptyTrFront);
 
 
            date.setDate(date.getDate() + 1);
        }
        emptyTrFront.appendTo(tBody);
    }
 
 
    // cells with dates
    let trMonthDays = $('<tr></tr>');
    let index = 0;
    while (date.getMonth() == month) {
        // create new row
       
       
        //ADDED ANOTHER CHECK. IF INDEX IS 0 DO NOT APPEND EMPTY ROW!
        if (index % 7 == 0 && index!=0) {
            trMonthDays.appendTo(tBody);
            trMonthDays = $('<tr></tr>');
 
        }
        if (date.getDate() == day)
            $(`<td class="today">${date.getDate()}</td>`).appendTo(trMonthDays);
        else
            $(`<td>${date.getDate()}</td>`).appendTo(trMonthDays);
        // step
        date.setDate(date.getDate() + 1);
        index++;
    }
    date.setDate(date.getDate() - 1);
 
    // empty days on the back
    if (date.getDay() != 0) {
        for (let i = 0; i < 7 - date.getDay(); i++) {
            $('<td></td>').appendTo(trMonthDays);
        }
    }
    trMonthDays.appendTo(tBody);
    tBody.appendTo(table);
    table.appendTo(container);
}