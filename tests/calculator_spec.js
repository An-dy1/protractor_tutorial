describe('GIVEN user working with the Angular calculator', function() {

    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.sleep(2000);

    describe('WHEN user trys to add numbers', function() {

        var firstInput = element(by.model('first'));
        firstInput.sendKeys('8');

        var secondInput = element(by.model('second'));
        secondInput.sendKeys('2');

        var goButton = element(by.id('gobutton'));
        goButton.click();

        it ('THEN numbers are added and displayed correctly', function() {
            
        });
    })

    describe('WHEN user tries to subtract numbers', function() {
        it ("does stuff", function() {

        });
    })
    

});