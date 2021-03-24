describe('GIVEN user on the AngularJS home page', function() {

  browser.get('http://www.angularjs.org');

  it('THEN user should see greeting by name', function() {
    
    element(by.model('yourName')).sendKeys('Julie');
    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Julie!');
  });

  describe('GIVEN user on the todo list app', function() {
    var todoList;

    beforeEach(function() {
      browser.get('http://www.angularjs.org');
      todoList = element.all(by.repeater('todo in todoList.todos'));
    });

    it('THEN app should list todos', function() {
      expect(todoList.count()).toEqual(2);
      expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
    });

    it('THEN user should be able to add a todo', function() {
      var addTodo = element(by.model('todoList.todoText'));
      var addButton = element(by.css('[value="add"]'));

      addTodo.sendKeys('write a protractor test');
      addButton.click();

      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });
  });
});
