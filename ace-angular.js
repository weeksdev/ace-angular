'use strict';
/**
*  Module
*
* Description
*/
angular.module('ace.angular',[])
.directive('aceEditor', function() {
	if (angular.isUndefined(window.ace)) {
		throw new Error('ace-angular need ace to work...');
	}

	return {
		restrict: 'EA',
		require: '?ngModel',
		link: function (scope, elm, attrs, ngModel) {
			var editor = window.ace.edit(elm[0]);

			var session = editor.getSession();

			session.on("change", function(e){
				ngModel.$setViewValue(session.getValue());
			});
		}
	}

});