describe('Board Body test: ', function() {

	beforeEach(module('boilerApp'));

	
	var BodyController,
		scope;

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		BodyController = $controller('BodyController', {
			$scope: scope
		});
	}));
	
	
	it('Notes must exist', function () {
		expect(scope.notes).toBeDefined();
	});

});
