function calendar(input) {
    let content = $('#content');
    let day = Number(input[0]);
    let month = Number(input[1]);
    let year = Number(input[2]);

    function generateCalendar() {
        let table = $(`<table><caption>${findFullMonth()} ${input[2]}</caption><tbody><tr><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr></tbody>`);
        let days = fillDayWeek();
        content.append(table);
        table.append(days)
    }
    generateCalendar(content);

    function fillDayWeek() {
        day = Number(input[0]);
        month = Number(input[1]-1);
        year = Number(input[2]);

        let html="";
        let today =  new Date(year, month - 1, day);
        let firstDay = new Date(year, month - 1, 1);
        let firstDateOfCalendar = new Date(firstDay);
        firstDateOfCalendar.setDate(firstDateOfCalendar.getDate() - firstDateOfCalendar.getDay());
        let lastDateOfCalendar = new Date(firstDay);
        lastDateOfCalendar.setMonth(lastDateOfCalendar.getMonth() + 1);
        lastDateOfCalendar.setDate(0);
        lastDateOfCalendar.setDate(lastDateOfCalendar.getDate() + 6 - lastDateOfCalendar.getDay());


        for (let i = firstDateOfCalendar; i <= lastDateOfCalendar; i.setDate(i.getDate() + 1)) {
            if (i.getDay() == 0) {
                html += "  <tr>"
            }
            if (i.getFullYear() < firstDay.getFullYear() ||
                (i.getMonth() < firstDay.getMonth())) {
                html += `<td></td>`;
            }
            else if (i.getFullYear() > firstDay.getFullYear() ||
                (i.getMonth() > firstDay.getMonth() && i.getFullYear() == firstDay.getFullYear())) {
                html += `<td></td>`;

            }
            else if (i.getTime() == today.getTime()) {
                html += `<td class="today">${i.getDate()}</td>`;
            }
            else {
                html += `<td>${i.getDate()}</td>`;
            }

            if (i.getDay() == 6) {
                html += "</tr>\n"
            }
        }
        return html;
    }
    function findFullMonth() {
        switch(month) {
            case 1:
                return month = "January";
            case 2:
                return month = "February";
            case 3:
                return month = "March";
            case 4:
                return month = "April";
            case 5:
                return month = "May";
            case 6:
                return month = "June";
            case 7:
                return month = "July";
            case 8:
                return month = "August";
            case 9:
                return month = "September";
            case 10:
                return month = "October";
            case 11:
                return month = "November";
            case 12:
                return month = "December";
        }
    }
}
