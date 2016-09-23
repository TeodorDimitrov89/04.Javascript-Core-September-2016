function moviePrice(inputMovie) {
    let movie = inputMovie[0].toLowerCase();
    let dayOfWeek = inputMovie[1].toLowerCase();

    switch(movie) {
        case "the godfather":
            switch(dayOfWeek) {
                case "monday":
                    console.log(12);
                    break;
                case "wednesday":
                case "friday":
                    console.log(15);
                    break;
                case "tuesday":
                    console.log(10);
                    break;
                case "thursday":
                    console.log(12.50);
                    break;

                case "saturday":
                    console.log(25);
                    break;
                case "sunday":
                    console.log(30);
                    break;
                default:
                        console.log("error");
                    break;
            }
            break;

        case "schindler's list":
            switch(dayOfWeek) {
                case "monday":
                case "tuesday":
                case "wednesday":
                case "thursday":
                case "friday":
                    console.log(8.50);
                    break;
                case "saturday":
                case "sunday":
                    console.log(15);
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        case "casablanca":
            switch(dayOfWeek) {
                case "monday":
                case "tuesday":
                case "wednesday":
                case "thursday":
                case "friday":
                    console.log(8);
                    break;
                case "saturday":
                case "sunday":
                    console.log(10);
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        case "the wizard of oz":
            switch(dayOfWeek) {
                case "monday":
                case "tuesday":
                case "wednesday":
                case "thursday":
                case "friday":
                    console.log(10);
                    break;
                case "saturday":
                case "sunday":
                    console.log(15);
                    break;
                default:
                    console.log("error");
                    break;
            }
            break;
        default:
            console.log("error");

    }
}

moviePrice(["The GOdfather",'Monday']);
