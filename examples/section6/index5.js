var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.onClickBad = function (e) {
        this.type = e.type;
    };
    return Handler;
}());
var h = new Handler();
var uiElement = {
    addClickListener: function () {
    }
};
uiElement.addClickListener(h.onClickBad);
