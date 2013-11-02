'use strict';

describe('Directive: myFoo', function () {

    beforeEach(module('MyTest'));
    beforeEach(module('/views/my-foo.html'));

    it('should have a scope', inject(function ($compile, $rootScope) {
        var scope = $rootScope.$new(),
          element = angular.element('<div><my-foo></my-foo></div>');

        element = $compile(element)(scope);
        scope.$digest();

        expect(element.scope()).toBeDefined();
        expect(element.scope().foo).toEqual('bar');
        expect(element.scope().$id).not.toEqual(scope.$id);
    }));
});

