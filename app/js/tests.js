/**
 * Created by Brad on 1/14/17.
 */
'use strict';

describe('myApp.view1 module', function() {

    beforeEach(module('myApp.view1'));

    describe('view1 controller', function(){

        it('should ....', inject(function($controller) {
            //spec body
            var view1Ctrl = $controller('View1Ctrl');
            expect(view1Ctrl).toBeDefined();
        }));

    });
});

describe('myApp.view2 module', function() {

    beforeEach(module('myApp.view2'));

    describe('view2 controller', function(){

        it('should ....', inject(function($controller) {
            //spec body
            var view2Ctrl = $controller('View2Ctrl');
            expect(view2Ctrl).toBeDefined();
        }));

    });
});