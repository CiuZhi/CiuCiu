//dom has position
//go left
var animate_left = function (obj, target, callback) {
    clearInterval(obj.timer_left);
    obj.timer_left = setInterval(function () {
        var temp = (target - obj.offsetLeft) / 15;
        temp = temp > 0 ? Math.ceil(temp) : Math.floor(temp);
        if (obj.offsetLeft == target) {
            if (callback) {
                callback();
            }
            clearInterval(obj.timer_left);
        }
        obj.style.left = obj.offsetLeft + temp + "px";
    }, 15);
}
//go width
var animate_width = function (obj, target, callback) {
    clearInterval(obj.timer_width);
    obj.timer_width = setInterval(function () {
        // var temp = (target - obj.offsetLeft) / 10;
        // temp = temp > 0 ? Math.ceil(temp) : Math.floor(temp);
        var temp = 0;
        temp = obj.offsetWidth > target ? -1 : 1;
        if (obj.offsetWidth == target) {
            if (callback) {
                callback();
            }
            clearInterval(obj.timer_width);
        }
        obj.style.width = obj.offsetWidth + temp + "px";

    }, 1);
}