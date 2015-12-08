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
    //在坐标系之间移动
    var deltaX = startX - originX;
    var deltalY = startY - originY;

    //设置该元素直接捕获该事件
    target.setCapture();
    //鼠标移动的事件处理器
    var moveHandler = function () {
        //对于IE事件模型,获取事件对象
        var evt = window.event;
        //将被拖动元素的位置移动到当前鼠标位置
        target.style.left = (evt.clientX - deltaX) + "px";
        target.style.top = (evt.clientY - deltalY) + "px";
        //防止事件冒泡
        evt.cancelable = true;

    }
    //鼠标松开的事件处理器
    var upHandler = function()
    {
        //对于IE事件模型,获取事件对象
        var evt = window.event;
        //取消该对象上绑定的事件处理器
        target.detachEvent("onlosecapture",upHandler);
        target.detachEvent("onmouseup",upHandler);
        target.detachEvent("onmousemove",upHandler);
        //释放该对象的事件捕获
        target.releaseCapture();
        //防止事件冒泡
        evt.cancelBubble = true;

    }

    //为该元素鼠标移动时绑定时间处理器
    target.attachEvent("onmousemove",moveHandler);
    //为松开鼠标移动时绑定事件处理器
    target.attachEvent("onmouseup",moveHandler);
    //将失去捕获事件当成鼠标松开处理
    target.attachEvent("onclosecapture",moveHandler);
    //阻止事件冒泡
    event.cancelBubble = true;

    event.returnValue = false;



}