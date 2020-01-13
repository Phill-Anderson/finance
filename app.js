// дэлгэцтэй ажиллах контроллер
var uiController = (function() {
  // html css - д хийгдэх өөрчлөлтөд тэсвэртэй болгохын тулд DOMstrings обьект хувьсагч зарласан
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    addBtn: ".add__btn"
  };
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };
})();
// Санхүүтэй ажиллах контроллер
var financeController = (function() {
  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    // бүх орлого зарлагаа хадгалах сав
    allItems: {
      inc: [],
      exp: []
    },
    // орлого зарлагын нийлбэрээ хадгалах сав
    totals: {
      inc: 0,
      exp: 0
    }
  };
})();
// програмын холбогч контроллер
var appController = (function(uiController, financeController) {
  var ctrlAddItem = function() {
    //1.оруулах өгөгдлийг дэлгэцээс авна
    console.log(uiController.getInput());
    //2. олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    //3. олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана.
    //4. төсвийг тооцоолно.
    // 5. эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
  };
  var setupEventListeners = function() {
    var DOM = uiController.getDOMstrings();
    document.querySelector(DOM.addBtn).addEventListener("click", function() {
      ctrlAddItem();
    });
    document.addEventListener("keypress", function(event) {
      // keycode ===13 enter товч дарагдвал
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };
  return {
    init: function() {
      console.log("Application started...");
    }
  };
})(uiController, financeController);
appController.init();
