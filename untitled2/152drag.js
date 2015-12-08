/**
 * Created by caxa on 15/12/8.
 */


var drag = function(target,event)
{


    //定义开始拖动鼠标位置
    var startX = event.clientX;
    var startY = event.clientY;


    //定义要被拖动元素的位置
    var originX = target.offsetLeft;

    var originY = target.offsetTop;

    var deltaX = startX - originX;

    var deltalY = startY - originY;


    target.setCapture();

    var moveHandler = function () {

        var evt = window.event;

        target.style.left = (evt.clientX - deltaX) + "px";
        target.style.top = (evt.clientY - deltalY) + "px";

        evt.cancelable = true;

    }

    var upHandler = function()
    {
        var evt = window.event;
        target.detachEvent("onlosecapture",upHandler);
        target.detachEvent("onmouseup",upHandler);
        target.detachEvent("onmousemove",upHandler);
        target.releaseCapture();
        evt.cancelBubble = true;

    }

    target.attachEvent("onmousemove",moveHandler);

    target.attachEvent("onmouseup",moveHandler);

    target.attachEvent("onclosecapture",moveHandler);

    event.cancelBubble = true;

    event.returnValue = false;



}