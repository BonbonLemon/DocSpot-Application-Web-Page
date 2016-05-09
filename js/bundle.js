/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var colors = ['darksalmon', 'cornflowerblue', 'red', 'yellow', 'wheat',
	  'hotpink', 'green', 'orange', 'purple', 'darkolivegreen', 'aqua'];
	
	var View = function () {
	  this.setupGrid();
	  setInterval(this.createRandomColor, 250);
	};
	
	View.prototype.setupGrid = function () {
	  var ul = document.querySelector('ul');
	  var li;
	  for (var rowIdx = 0; rowIdx < 4; rowIdx++) {
	    for (var colIdx = 0; colIdx < 4; colIdx++) {
	      li = document.createElement("li");
	      li.setAttribute('pos', [rowIdx, colIdx]);
	      ul.appendChild(li);
	    }
	  }
	};
	
	View.prototype.createRandomColor = function () {
	  var rowIdx = Math.floor(Math.random() * 4);
	  var colIdx = Math.floor(Math.random() * 4);
	
	  var randomSquare = document.querySelector('li[pos=\"' + rowIdx
	                      + ',' + colIdx + '\"]');
	  var randomColor = colors[Math.floor(Math.random() * colors.length)];
	  randomSquare.style.background = randomColor;
	};
	
	new View();


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map