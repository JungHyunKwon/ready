/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';
	
	var toStr = Object.prototype.toString;

	window.ready = [];

	/**
	 * @name isArray
	 * @since 2017-12-06
	 * @param {*} value
	 * @return {boolean}
	 */
	function isArray(value) {
		return toStr.call(value) === '[object Array]';
	}

	/**
	 * @name callback
	 * @param {object} event
	 * @since 2018-12-14
	 */
	function callback(event) {
		//배열일 때
		if(isArray(ready)) {
			for(var i = 0, readyLength = ready.length; i < readyLength; i++) {
				var value = ready[i];

				//함수일 때
				if(typeof value === 'function') {
					value(event);
				}					
			}
		}	
	}
	
	//addEventListener가 있을 때
	if(document.addEventListener) {
		document.addEventListener('DOMContentLoaded', callback, false);
	
	//attachEvent가 있을 때
	}else if(document.attachEvent) {
		document.attachEvent('onreadystatechange', function(event) {
			//문서가 준비되었을 때
			if(document.readyState === 'interactive') {
				callback(event);
			}
		});
	}

})();