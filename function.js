function task(x) {
    return new Promise((resolve, reject) => {
        if (x < 18) {
            resolve("yes");
        } else {
            reject("no");
        }
    });
}