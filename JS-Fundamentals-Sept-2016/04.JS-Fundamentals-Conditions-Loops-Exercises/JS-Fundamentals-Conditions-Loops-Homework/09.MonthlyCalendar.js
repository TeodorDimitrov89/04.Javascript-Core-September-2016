function calendar([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number);
    let today =  new Date(year, month - 1, day);
    let firstDay = new Date(year, month - 1, 1);
    let firstDateOfCalendar = new Date(firstDay);
    firstDateOfCalendar.setDate(firstDateOfCalendar.getDate() - firstDateOfCalendar.getDay());
    let lastDateOfCalendar = new Date(firstDay);
    lastDateOfCalendar.setMonth(lastDateOfCalendar.getMonth() + 1);
    lastDateOfCalendar.setDate(0);

    lastDateOfCalendar.setDate(lastDateOfCalendar.getDate() + 6 - lastDateOfCalendar.getDay());

    let html = "<table>\n";
    html += "  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n";
    for (let i = firstDateOfCalendar; i <= lastDateOfCalendar; i.setDate(i.getDate() + 1)) {
        if (i.getDay() == 0) {
            html += "  <tr>"
        }
        if (i.getFullYear() < firstDay.getFullYear() ||
            (i.getMonth() < firstDay.getMonth() && i.getFullYear() == firstDay.getFullYear() )) {
            html += `<td class="prev-month">${i.getDate()}</td>`;

        }
        else if (i.getFullYear() > firstDay.getFullYear() ||
            (i.getMonth() > firstDay.getMonth() && i.getFullYear() == firstDay.getFullYear())) {
            html += `<td class="next-month">${i.getDate()}</td>`;

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
    html += "</table>";
    return html;

}
