describe('GIVEN user working with the Angular calculator', function() {

    browser.get('http://juliemr.github.io/protractor-demo/');
    browser.sleep(2000);

    describe('WHEN user trys to add numbers', function() {

        let parameters = [
            { description: 'User adds 8 and 2', numberOne: '8', numberTwo: '2', expectedResult: '10'}
        ];

        parameters.forEach(({ numberOne, numberTwo, expectedResult }) => {
            let firstInput = element(by.model('first'));
            firstInput.sendKeys(numberOne);

            let secondInput = element(by.model('second'));
            secondInput.sendKeys(numberTwo);

            let goButton = element(by.id('gobutton'));
            goButton.click();

            // var actualResult = element(by.cssName('ng-binding'));
            // var resultText = actualResult.getText();

            let actualResult = element(by.cssContainingText('.ng-binding', expectedResult));

            it ('THEN numbers are added and displayed correctly', function() {
                expect(actualResult.getText()).toEqual(expectedResult);
            });
        })

        
    })

    describe('WHEN user tries to subtract numbers', function() {
        it ("does stuff", function() {

        });
    })
    

});