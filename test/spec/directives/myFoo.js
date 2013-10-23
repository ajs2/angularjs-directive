'use strict';

describe('Directive: myFoo', function () {

    beforeEach(module('MyTest'));
    beforeEach(module('/views/my-foo.html'));

    it('should have a scope', inject(function ($compile, $rootScope) {
        var scope = $rootScope.$new(),
          element = angular.element('<my-foo></my-foo>');

        element = $compile(element)(scope);
        scope.$digest();

        expect(element.scope()).toBeDefined();
    }));
});

