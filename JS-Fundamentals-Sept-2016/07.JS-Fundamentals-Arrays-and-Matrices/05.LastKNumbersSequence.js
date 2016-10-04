function sumLastKNumbersSequence([n, k]) {
    let seq = [1];
    let sum = 0;
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        for (let i = start; i < current; i++) {
            sum+=seq[i];
        }
            seq[current] = sum;
        sum = 0;
    }
    console.log(seq.join(' '));
}
sumLastKNumbersSequence(['8', '2']);
