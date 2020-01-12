// дэлгэцтэй ажиллах контроллер
var uiController = (function() {})();
// Санхүүтэй ажиллах контроллер
var financeController = (function() {})();
// програмын холбогч контроллер
var appController = (function(uiController, financeController) {
  document.querySelector(".add_btn").addEventListener("click", function() {
    //1.оруулах өгөгдлийг дэлгэцээс авна
    //2. олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална.
    //3. олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана.
    //4. төсвийг тооцоолно.
    // 5. эцсийн үлдэгдэл, тооцоог дэлгэцэнд гаргана.
    console.log("товч дарагдлаа");
  });
  document.addEventListener("keypress", function(event) {
    console.log(event);
  });
})(uiController, financeController);
