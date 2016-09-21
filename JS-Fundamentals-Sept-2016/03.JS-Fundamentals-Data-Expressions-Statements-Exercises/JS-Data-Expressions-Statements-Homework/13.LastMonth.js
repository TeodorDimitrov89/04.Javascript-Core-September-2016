function lastMonth([day,month,year]) {
    [day,month,year]=[day,month,year].map(Number);
    let date = new Date(year,month - 1,1);
    date.setDate(0);
    console.log(date.getDate());
}

lastMonth(['17','3','2002']);
