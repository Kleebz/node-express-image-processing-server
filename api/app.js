let express = require('express');
let path = requre('path');



const app = express();
const pathToIndex = path.resolve(__dirname, '../client/index.html');

module.exports = {
    app

}