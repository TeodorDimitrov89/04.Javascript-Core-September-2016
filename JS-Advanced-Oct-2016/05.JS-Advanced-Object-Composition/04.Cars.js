function carFactory(input) {
    let cars = new Map();
    for (let line of input) {
        let cmd = line.split(' ');
        switch (cmd[0]) {
            case "create":
                if(cmd.length == 2) {
                    create(cmd[1]);
                }
                else{
                    inherit(cmd[1],cmd[3]);
                }
                break;
            case "set":
                set(cmd[1],cmd[2],cmd[3]);
                break;
            default:
                print(cmd[1]);
        }
    }

    function create(name) {
        let car = {}; //задавам празен обект за да можем да държим след това key-value
        cars.set(name, car);
    }

    function inherit(name, parent) {
        let car = Object.create(cars.get(parent)); //наследяваме обекта от мапа
        cars.set(name, car);
    }

    function set(name, key, value) {
        let car = cars.get(name); //гетвам името от мапа и на ключа key слагам value.
        car[key] = value;

    }

    function print(name) {
        let result = [];
        let car = cars.get(name);
        for (let c in car) {
            result.push(`${c}:${car[c]}`);
        }
        console.log(result.join(', '));
    }

}

carFactory(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);