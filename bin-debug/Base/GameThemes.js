var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Base;
(function (Base) {
    var GameUI = (function () {
        function GameUI() {
        }
        /**得到文字*/
        GameUI.getText = function (w, h, t, c, a, l) {
            if (w === void 0) { w = 100; }
            if (h === void 0) { h = 50; }
            if (c === void 0) { c = 0xffffff; }
            if (a === void 0) { a = egret.HorizontalAlign.CENTER; }
            if (l === void 0) { l = egret.VerticalAlign.MIDDLE; }
            var s = new TextField();
            s.width = w;
            s.height = h;
            s.text = t;
            s.textColor = c;
            s.textAlign = a;
            s.verticalAlign = l;
            return s;
        };
        /**得到矩形*/
        GameUI.getRect = function (w, h, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var s = new Sprite();
            s.graphics.beginFill(c);
            s.graphics.drawRect(x, y, w, h);
            s.graphics.endFill();
            return s;
        };
        /**得到圆角矩形*/
        GameUI.getRoundRect = function (w, h, c, ew, eh, x, y) {
            if (c === void 0) { c = 0; }
            if (ew === void 0) { ew = 5; }
            if (eh === void 0) { eh = 5; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var s = new Sprite();
            s.graphics.beginFill(c);
            s.graphics.drawRoundRect(x, y, w, h, ew, eh);
            s.graphics.endFill();
            return s;
        };
        /**得到圆形*/
        GameUI.getCircle = function (r, c, x, y) {
            if (c === void 0) { c = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var s = new Sprite();
            s.graphics.beginFill(c);
            s.graphics.drawCircle(x, y, r);
            s.graphics.endFill();
            return s;
        };
        /**得到多边形,side边数,rotation角度*/
        GameUI.getPolygon = function (side, r, c, rotation) {
            if (side === void 0) { side = 3; }
            if (r === void 0) { r = 10; }
            if (c === void 0) { c = 0; }
            if (rotation === void 0) { rotation = 0; }
            var s = new Sprite();
            s.rotation = rotation;
            s.graphics.beginFill(c);
            for (var i = 0; i <= side; i++) {
                var lineX = Math.cos((i * (360 / side) * Math.PI) / 180) * r;
                var lineY = Math.sin((i * (360 / side) * Math.PI) / 180) * r;
                if (i == 0)
                    s.graphics.moveTo(lineX, lineY);
                else
                    s.graphics.lineTo(lineX, lineY);
            }
            s.graphics.endFill();
            return s;
        };
        return GameUI;
    }());
    Base.GameUI = GameUI;
    __reflect(GameUI.prototype, "Base.GameUI");
})(Base || (Base = {}));
