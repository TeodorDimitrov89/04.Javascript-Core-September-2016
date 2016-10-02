function solve([sp,city]) {
    function getLimit(zone) {
        switch(zone) {
            case 'motorway':return 130;
            case 'interstate': return 90;
            case 'city': return 50;
            case 'residential': return 20;
        }
    }

    let limit = getLimit(city);
    function getInfraction(sp,limit) {
        let overSpeed = sp-limit;

        if(overSpeed<=0) {
            return false;
        }
        else {
            if(overSpeed > 0 && overSpeed<=20) {
                console.log("speeding");
            }
            else if (overSpeed>20 && overSpeed<=40) {
                console.log("excessive speeding");
            }
            else {
                console.log("reckless driving");
            }
        }
    }
    getInfraction(sp,limit)
}
solve([40, "city"]);




