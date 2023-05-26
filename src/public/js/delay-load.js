var date = new Date();
var curDate = null;
const millis = 1000;
do { curDate = new Date(); }
while(curDate-date < millis);
console.log("ready to load")