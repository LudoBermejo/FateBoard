describe('Board Header test', function() {

	beforeEach(module('boilerApp'));
	

	var HeaderController,
		scope;

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		HeaderController = $controller('HeaderController', {
			$scope: scope
		});
	}));  
	it('AddNote must return true ', function () {
		expect(scope.addNote).toBeTruthy();
	});
});
