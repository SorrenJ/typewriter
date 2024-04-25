const sentence = "hello there from lighthouse labs";

let delay = 0;
for (const char of sentence) {
    setTimeout(() => {
        process.stdout.write(`${char}\n`);
    }, delay);
    delay += 50;  // Increase delay by 50 ms for each next character
}