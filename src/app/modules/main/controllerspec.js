(function() {
  'use strict';

  describe('src/app/modules/main/controllerspec.js', function() {
    var vm;

    beforeEach(module('gulpDemo'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController');
    }));

    it('should test whether the MainController is defined or not',
      function() {
        expect(vm).toBeDefined();
      });
  });
})();
