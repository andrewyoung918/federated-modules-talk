(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
require('./scripts/dataAlert.js');
require('./scripts/fraudAlert.js');
},{"./scripts/dataAlert.js":4,"./scripts/fraudAlert.js":5}],2:[function(require,module,exports){
"use strict";exports.__esModule=!0;var r=["(*^ω^)","(◕‿◕✿)","(◕ᴥ◕)","ʕ•ᴥ•ʔ","ʕ￫ᴥ￩ʔ","(*^.^*)","owo","OwO","(｡♥‿♥｡)","uwu","UwU","(*￣з￣)",">w<","^w^","(つ✧ω✧)つ","(/ =ω=)/"];function e(e){return e.replace(/(?:l|r)/g,"w").replace(/(?:L|R)/g,"W").replace(/n([aeiou])/g,"ny$1").replace(/N([aeiou])|N([AEIOU])/g,"Ny$1").replace(/ove/g,"uv").replace(/nd(?= |$)/g,"ndo").replace(/!+/g," "+r[Math.floor(Math.random()*r.length)])}exports.default=e;
},{}],3:[function(require,module,exports){
var fraudAgreement = 'Please stop entering Bart Simpson';
var dataAgreement = 'We will sell your data.';
},{}],4:[function(require,module,exports){
require('./alertMessages.js');
require('./x-just.js');
require('./y-so.js');
require('./z-many.js');
alert(dataAgreement);
},{"./alertMessages.js":3,"./x-just.js":6,"./y-so.js":7,"./z-many.js":8}],5:[function(require,module,exports){
require('./alertMessages.js');
require('./x-just.js');
require('./y-so.js');
require('./z-many.js');
alert(fraudAgreement);
},{"./alertMessages.js":3,"./x-just.js":6,"./y-so.js":7,"./z-many.js":8}],6:[function(require,module,exports){
var sparrow = 'sparrow-x';
var eagle = 'crow';

console.log('done with x');
},{}],7:[function(require,module,exports){
var sparrow = 'sparrow-y';
var crow = 'eagle';

for (let index = 0; index < 1000000000; index++) {
    var stalling = index;
    
}

console.log('done with y');
},{}],8:[function(require,module,exports){
require('./zz-scripts.js')
    var sparrow = zz;
    var eagle = 'crow';
    
    console.log('done with z');
},{"./zz-scripts.js":9}],9:[function(require,module,exports){
var zz = 'top'
var owoifyx = require('owoifyx');

console.log(owoifyx);
},{"owoifyx":2}]},{},[1]);
