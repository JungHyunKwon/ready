/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';
		
		window.ready = [];

		/**
		 * @name callback
		 * @param {object} event
		 * @since 2018-12-14
		 */
		function _callback(event) {
			//배열일 때
			if(ready) {
				for(var i in ready) {
					var readyI = ready[i];

					//함수일 때
					if(typeof readyI === 'function') {
						readyI(event);
					}
				}

				ready = undefined;
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
}catch(e) {
	console.error(e);
}