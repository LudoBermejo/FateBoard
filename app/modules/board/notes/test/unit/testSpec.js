describe('Board Body test', function() {

	beforeEach(module('boilerApp'));

	var NotesController,
		scope;

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		NotesController = $controller('NotesController', {
			$scope: scope
		});
	}));
	
	it('Remove note must be false if not note is sended', function () {
		expect(scope.removeNote()).toBeFalsy();
	});

	it('Remove note must be true if not note is sended', function () {
		expect(scope.removeNote('a')).toBeTruthy();
	});
});
