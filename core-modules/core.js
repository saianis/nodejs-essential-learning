const path = require("path");
const util = require("util");
const v8 = require("v8");


util.log(path.basename(__filename));

util.log(" ^ The name of currenet file");

util.log(v8.getHeapStatistics());