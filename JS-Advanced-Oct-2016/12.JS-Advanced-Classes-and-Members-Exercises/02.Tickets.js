function Tickets(arr, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let ticketArr = [];
    for (let t of arr) {
        let line = t.split('|');
        let destination = line[0];
        let price = Number(line[1]);
        let status = line[2];
        let newTicket = new Ticket(destination, price, status);
        ticketArr.push(newTicket)
    }
    if (sortingCriteria == 'destination') {
        ticketArr.sort((a, b)=>a.destination.localeCompare(b.destination))
    }
    else if(sortingCriteria == 'status') {
        ticketArr.sort((a, b)=>a.status.localeCompare(b.status))
    }
    return ticketArr
}
Tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination');
