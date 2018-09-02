var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextField;
}(egret.TextField));
__reflect(TextField.prototype, "TextField");
var Sprite = (function (_super) {
    __extends(Sprite, _super);
    function Sprite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sprite;
}(egret.Sprite));
__reflect(Sprite.prototype, "Sprite");
var Shape = (function (_super) {
    __extends(Shape, _super);
    function Shape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Shape;
}(egret.Shape));
__reflect(Shape.prototype, "Shape");
var DisplayObject = (function (_super) {
    __extends(DisplayObject, _super);
    function DisplayObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DisplayObject;
}(egret.DisplayObject));
__reflect(DisplayObject.prototype, "DisplayObject");
var DisplayObjectContainer = (function (_super) {
    __extends(DisplayObjectContainer, _super);
    function DisplayObjectContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DisplayObjectContainer;
}(egret.DisplayObjectContainer));
__reflect(DisplayObjectContainer.prototype, "DisplayObjectContainer");
var Point = (function (_super) {
    __extends(Point, _super);
    function Point() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Point;
}(egret.Point));
__reflect(Point.prototype, "Point");
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rectangle;
}(egret.Rectangle));
__reflect(Rectangle.prototype, "Rectangle");
var Bitmap = (function (_super) {
    __extends(Bitmap, _super);
    function Bitmap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bitmap;
}(egret.Bitmap));
__reflect(Bitmap.prototype, "Bitmap");
var BitmapData = (function (_super) {
    __extends(BitmapData, _super);
    function BitmapData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BitmapData;
}(egret.BitmapData));
__reflect(BitmapData.prototype, "BitmapData");
var Stage = (function (_super) {
    __extends(Stage, _super);
    function Stage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Stage;
}(egret.Stage));
__reflect(Stage.prototype, "Stage");
var Tween = (function (_super) {
    __extends(Tween, _super);
    function Tween() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tween;
}(egret.Tween));
__reflect(Tween.prototype, "Tween");
var Ease = (function (_super) {
    __extends(Ease, _super);
    function Ease() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Ease;
}(egret.Ease));
__reflect(Ease.prototype, "Ease");
var Base;
(function (Base) {
    var GameContainer = (function (_super) {
        __extends(GameContainer, _super);
        function GameContainer() {
            var _this = _super.call(this) || this;
            _this.init();
            _this.once(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
            return _this;
        }
        GameContainer.prototype.addToStage = function () {
            this.render();
        };
        /**加载到舞台之前调用 */
        GameContainer.prototype.init = function () { };
        /**加载到舞台之后调用 */
        GameContainer.prototype.render = function () {
            this.stageWidth = this.stage.stageWidth;
            this.stageHeight = this.stage.stageHeight;
        };
        return GameContainer;
    }(DisplayObjectContainer));
    Base.GameContainer = GameContainer;
    __reflect(GameContainer.prototype, "Base.GameContainer");
    var GameView = (function (_super) {
        __extends(GameView, _super);
        function GameView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return GameView;
    }(GameContainer));
    Base.GameView = GameView;
    __reflect(GameView.prototype, "Base.GameView");
    /**游戏模版 */
    var GamePanel = (function (_super) {
        __extends(GamePanel, _super);
        function GamePanel() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**加载到舞台之后调用 */
        GamePanel.prototype.render = function () {
            _super.prototype.render.call(this);
            this.initView();
        };
        GamePanel.prototype.initView = function () {
            var gameBg = Base.GameUI.getRect(this.stageWidth, this.stageHeight, 0);
            var gameName = Base.GameUI.getText(this.stageWidth, 200, "激光射线", 0xffffff, egret.HorizontalAlign.CENTER, egret.VerticalAlign.MIDDLE);
            this.addChild(gameBg);
            this.addChild(gameName);
        };
        return GamePanel;
    }(GameView));
    Base.GamePanel = GamePanel;
    __reflect(GamePanel.prototype, "Base.GamePanel");
})(Base || (Base = {}));
