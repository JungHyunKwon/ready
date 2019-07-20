/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';
	
	var _toString = Object.prototype.toString;

	window.ready = [];

	/**
	 * @name isArray
	 * @since 2017-12-06
	 * @param {*} value
	 * @return {boolean}
	 */
	function _isArray(value) {
		return _toString.call(value) === '[object Array]';
	}

	/**
	 * @name callback
	 * @param {object} event
	 * @since 2018-12-14
	 */
	function _callback(event) {
		//배열일 때
		if(_isArray(ready)) {
			for(var i = 0, readyLength = ready.length; i < readyLength; i++) {
				var element = ready[i];

				//함수일 때
				if(typeof element === 'function') {
					element(event);
				}					
			}
		}	
	}
	
	//addEventListener가 있을 때
	if(document.addEventListener) {
		document.addEventListener('DOMContentLoaded', function(event) {
			_callback(event);
		}, false);
	
	//attachEvent가 있을 때
	}else if(document.attachEvent) {
		document.attachEvent('onreadystatechange', function(event) {
			//문서가 준비되었을 때
			if(document.readyState === 'interactive') {
				_callback(event);
			}
		});
	}

})();