function gradsToDegree(grads) {
    let degree = 0.9 * Number(grads);
    degree = degree % 360;
    if (Number(grads) <= 0) {
        degree = 360 + (degree % 360);
    }
    console.log(degree);
}

gradsToDegree(['400']);
