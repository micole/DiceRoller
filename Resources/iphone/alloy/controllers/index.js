function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function d2() {
        rollDie(2);
    }
    function d20() {
        rollDie(20);
    }
    function rollDie(d) {
        die = getRandomInt(1, d + 1);
        $.CurrentDie.text = "D" + d + ": " + die;
        var row = Titanium.UI.createTableViewRow({
            title: "D" + d + ": " + die
        });
        1 > $.PreviousDice.data ? $.PreviousDice.appendRow(row) : $.PreviousDice.insertRowBefore(0, row);
        $.PreviousDice.data > 15 && $.PreviousDice.deleteRow(15);
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createView({
        height: "100%",
        width: "100%",
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.DiceShower = Ti.UI.createView({
        id: "DiceShower",
        height: "50%"
    });
    $.__views.__alloyId0.add($.__views.DiceShower);
    $.__views.CurrentDieView = Ti.UI.createView({
        id: "CurrentDieView",
        backgroundColor: "blue",
        width: "50%",
        left: "0"
    });
    $.__views.DiceShower.add($.__views.CurrentDieView);
    $.__views.CurrentDie = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        id: "CurrentDie"
    });
    $.__views.CurrentDieView.add($.__views.CurrentDie);
    $.__views.PreviousDice = Ti.UI.createTableView({
        id: "PreviousDice",
        backgroundColor: "red",
        width: "50%",
        right: "0"
    });
    $.__views.DiceShower.add($.__views.PreviousDice);
    $.__views.DicePicker = Ti.UI.createView({
        id: "DicePicker",
        backgroundColor: "grey",
        height: "50%",
        layout: "vertical"
    });
    $.__views.__alloyId0.add($.__views.DicePicker);
    $.__views.TopDie = Ti.UI.createView({
        id: "TopDie",
        layout: "horizontal",
        horizontalWrap: "true"
    });
    $.__views.DicePicker.add($.__views.TopDie);
    $.__views.__alloyId1 = Ti.UI.createButton({
        width: "33%",
        height: "33%",
        title: "D2",
        backgroundColor: "green",
        id: "__alloyId1"
    });
    $.__views.TopDie.add($.__views.__alloyId1);
    d2 ? $.__views.__alloyId1.addEventListener("click", d2) : __defers["$.__views.__alloyId1!click!d2"] = true;
    $.__views.__alloyId2 = Ti.UI.createButton({
        width: "33%",
        height: "33%",
        title: "D4",
        id: "__alloyId2"
    });
    $.__views.TopDie.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createButton({
        width: "33%",
        height: "33%",
        title: "D6",
        id: "__alloyId3"
    });
    $.__views.TopDie.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createButton({
        width: "33%",
        height: "33%",
        title: "D8",
        id: "__alloyId4"
    });
    $.__views.TopDie.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createButton({
        width: "33%",
        height: "33%",
        title: "D10",
        id: "__alloyId5"
    });
    $.__views.TopDie.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createButton({
        width: "33%",
        height: "33%",
        title: "D12",
        id: "__alloyId6"
    });
    $.__views.TopDie.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createButton({
        width: "33%",
        height: "33%",
        title: "D20",
        backgroundColor: "orange",
        id: "__alloyId7"
    });
    $.__views.TopDie.add($.__views.__alloyId7);
    d20 ? $.__views.__alloyId7.addEventListener("click", d20) : __defers["$.__views.__alloyId7!click!d20"] = true;
    $.__views.__alloyId8 = Ti.UI.createButton({
        width: "33%",
        height: "33%",
        title: "D100",
        id: "__alloyId8"
    });
    $.__views.TopDie.add($.__views.__alloyId8);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.__alloyId1!click!d2"] && $.__views.__alloyId1.addEventListener("click", d2);
    __defers["$.__views.__alloyId7!click!d20"] && $.__views.__alloyId7.addEventListener("click", d20);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;