//require('./stylesheet.css');
//require('style!css!./stylesheet.css');
//require('style!css!./childstylesheet.css');
require('./stylesheet.css');
require('./childstylesheet.css');
//document.write("Webpack working");
var content = require("./content")
document.write(content);

