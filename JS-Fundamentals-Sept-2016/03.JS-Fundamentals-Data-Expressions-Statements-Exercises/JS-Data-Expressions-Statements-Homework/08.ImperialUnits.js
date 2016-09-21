function imperialUnits(units) {
    let foot = Math.floor(Number(units)/12);
    let inches = Number(units)%12;
    console.log(`${foot}'-${inches}"`);
}
imperialUnits(['11']);
