function cone([r,h]) {
    [r, h] = [r, h].map(Number);
    let s = Math.sqrt(Math.pow(r, 2) + Math.pow(h, 2));
    let volume = (Math.PI * Math.pow(r, 2) * h) / 3;
    let baseSurface = Math.PI * Math.pow(r, 2);
    let lateralSurface = Math.PI * r * s;
    let totalSurface = baseSurface + lateralSurface;
    console.log(volume);
    console.log(totalSurface);
}
cone(['3', '5']);
