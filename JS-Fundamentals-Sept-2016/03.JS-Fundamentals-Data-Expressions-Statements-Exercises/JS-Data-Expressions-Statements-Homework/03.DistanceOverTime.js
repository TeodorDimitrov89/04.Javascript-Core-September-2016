function distanceOverTime(input) {
    let v1 = Number(input[0]);
    let v2 = Number(input[1]);
    let t = Number(input[2]);
    let dist1 = v1 / 3600 * t;
    let dist2 = v2 / 3600 * t;
    let distance = Math.abs(dist1 - dist2)*1000;
    console.log(distance);
}

distanceOverTime(['5','-5','40']);
