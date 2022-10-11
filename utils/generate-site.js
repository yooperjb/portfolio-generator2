const fs = require('fs');

const writeFile = fileContent => {
    return new Promise(( resolve, reject ) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if error, reject the Promise and send error to .catch() method
            if (err) {
                reject(err);
                //return out of the function here o make sure the Promise doesn't accidentally execute the resolve() function
                return;
            }

            // if everything went well, resolve Promise and send the successful data to the '.then()' method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise(( resolve, reject) => {
        fs.copyFile('./src/style.css', './dist.style.css', err => {
            // if error, reject the Promise and send error to .catch() method
            if (err) {
                reject(err);
                //return out of the function here o make sure the Promise doesn't accidentally execute the resolve() function
                return;
            }

            // if everything went well, resolve Promise and send the successful data to the '.then()' method
            resolve({
                ok: true,
                message: 'File Copied!'
            });
        });
    });
};
// This exports an object with key value pairs the same
module.exports = {
    writeFile, copyFile};