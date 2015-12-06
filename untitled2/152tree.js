/**
 * Created by caxa on 15/12/6.
 */

var clickHandler = function()
{
    //定义需要操作的HTML元素id
    var targetId;
    //定义需要被操作的HTML元素
    var targetElement;
    //定义触发事件的事件源(其中event是隐士可用的全局对象)
    var srcElement = event.srcElement;

    //根据其className属性值判断它不是叶子节点,即该节点可以展开
    if (srcElement.className.substr(0,7) == "outline")
    {
        //如果事件源是树节点前的图片
        if (srcElement.id.indexOf("Image")>0)
        {
            //获取该节点对应<div.../>元素的id
            targetId = srcElement.id.substring(0,srcElement.id.length-5+"Details");
        }
        // 如果事件源是树节点所在的<div.../>元素
        else
        {
            //获取该节点对应<div.../>元素的id
            targetId = srcElement.id + "Details";
        }

        //找到对应的<div.../>元素
        targetElement = document.getElementById(targetId);

        //如果targetElement对象存在
        if (targetElement)
        {
            //如果该<div.../>元素处于"隐藏"状态
            if (targetElement.style.display == "none")
            {
                //显示该<div.../>元素
                targetElement.style.display = "";
            }else
            {
                //否则,隐藏该<div.../>元素
                targetElement.style.display = "none";
            }
        }

        //如果事件源是树节点前的图片
        if (srcElement.id.indexOf("Image") > 0)
        {
            //获取该节点前<img../>元素的id
            targetId = srcElement.id;
        }
        //如果事件源是树节点所在的<div.../>元素
        else
        {
            //将<img.../>的加号图片换为建好图片
            targetId = srcElement.id + "Image";
        }

        targetElement = document.getElementById(targetId);

        if (targetElement.src.indexOf("plus") >= 0)
        {
            //否则,将<img.../>的减号图片换为加号图片
            targetElement.src = "image/plus.gif";
        }

    }
}


document.onclick = clickHandler();