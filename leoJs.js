/**
 * @description : 一些常用方法的封装，JS工具库
 * @author      : leo
 * @createtime  : 2015/09/01
 */

(function(w) {
    var leoJs = leoJs || {};
    var helloWorld = function() {
        console.log('Hello Leo !');
    }

    /**
     * 获取浏览器参
     * @param  {String} param [要获取的参数名]
     * @return {String}       [如存在，返回参数的值，不存在返回null]
     */
    var getUrlParam = function(param) {
        var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }


    /**
     * 检测数组是否存在某个值
     * @param  {Array}      
     * @param  {String}     [要检索的值]
     * @return {number}     [如存在，返回下标；如不存在，返回-1]
     */
    var indexOfArray = function(arr, val) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                return i;
            }
        }
        return -1;
    }


    /**
     * 在词后增加3个点
     * @param  {Number}    [达到某字节长度则剪掉 中文: 2字节 英文:1字节]
     * @param  {String}    [字符串]
     * @return {Element}   [超过长度则返回增加3个点的字符串 ]
     */
    var cutStr = function(cutLen, str) {
        if (!cutLen) {
            return '';
        }
        var a = 0;
        var temp = '';
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 255) {
                a += 2;
            } else {
                a++;
            }
            if (a > cutLen) {
                return temp + '…';
            }
            temp += str.charAt(i);
        }
        return str;
    }


    /**
     * 获取字节长度
     * @param  {String}    [要获取长度的字符串]
     * @return {Number}    [返回str的字节]
     */
    var getByteLen = function(str) {
        var bl = 0;
        for (var i = 0, l = str.length; i < l; i++) {
            if (str.charCodeAt(i) > 255) {
                bl++;
            }
            bl++;
        }
        return bl;
    }


    /**
     * 判断是否移动端
     * @return {Boolean} [true : 是移动端， flase : 非移动端]
     */
    var isMobile = function() {
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array('Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod');
        var flag = false;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) != -1) {
                flag = true;
                break;
            }
        }
        return flag;
    }

    /**
     * 判断是否Android
     * @return {Boolean} [true ：是Android ; false ：爱疯或其他]
     */
    var isAndroid = function() {
        var u = navigator.userAgent;
        if (u.indexOf('Android') != -1 || u.indexOf('Linux') != -1) {
            return true;
        } else {
            return false;
        }
    }


    /**
     * 调试用：获取当前设备的网页信息
     * @return {Alert} [alert当前的网页信息]
     */
    var htmlInfo = function() {
        var s = '网页可见区域宽：' + document.body.clientWidth;
        s += '\r\n网页可见区域高：' + document.body.clientHeight;
        s += '\r\n网页可见区域高：' + document.body.offsetWeight + '  (包括边线的宽)';
        s += '\r\n网页可见区域高：' + document.body.offsetHeight + '  (包括边线的宽)';
        s += '\r\n网页正文全文宽：' + document.body.scrollWidth;
        s += '\r\n网页正文全文高：' + document.body.scrollHeight;
        s += '\r\n网页被卷去的高：' + document.body.scrollTop;
        s += '\r\n网页被卷去的左：' + document.body.scrollLeft;
        s += '\r\n网页正文部分上：' + window.screenTop;
        s += '\r\n网页正文部分左：' + window.screenLeft;
        s += '\r\n屏幕分辨率的高：' + window.screen.height;
        s += '\r\n屏幕分辨率的宽：' + window.screen.width;
        s += '\r\n屏幕可用工作区高度：' + window.screen.availHeight;
        s += '\r\n屏幕可用工作区宽度：' + window.screen.availWidth;
        alert(s);
    }


    /**
     * 调试用： alert当前元素的html，一般用于移动端
     * @param  {id}     [当前元素id]
     * @return {Alert}  [当前元素的html]
     */
    var mbAlertHtml = function(id) {
        alert($(id).parent().html());
    }


    /**
     * 调试用： 获取当前obj里面的东西，一般用于移动端
     * @param  {Object}
     * @return {Alert}      [当前obj里面的东西]
     */
    var objInfo = function(obj) {
        if (obj) {
            for (i in obj) {
                alert('属性:' + i + '的值是：\r\n' + obj[i]); //获得属性
            }
        }
    }

    /**
     * 金额数字处理，允许：正数、负数、正浮点数、负浮点数
     * 调用 ： 绑定到一个事件，如input，然后 this.value = leoJs.matchNumber(this.value);
     * 
     * @param  {string}     [要处理的字符串] 
     * 
     */
    var matchNumber = function(str) {
        var str = str || '';
        var numberRegExp = /(\-?\d+\.\d*)|(\-?\d+\.)|(\-?\d+)|(\-?)/;
        var matches = str.match(numberRegExp);
        var numbers = '';
        if (matches) {
            numbers = matches[0];
        }
        return numbers;
    }

    w.leoJs = leoJs;
    leoJs.helloWorld = helloWorld;
    leoJs.getUrlParam = getUrlParam;
    leoJs.indexOfArray = indexOfArray;
    leoJs.cutStr = cutStr;
    leoJs.getByteLen = getByteLen;
    leoJs.isMobile = isMobile;
    leoJs.isAndroid = isAndroid;
    leoJs.htmlInfo = htmlInfo;
    leoJs.mbAlertHtml = mbAlertHtml;
    leoJs.objInfo = objInfo;
    leoJs.matchNumber = matchNumber;
    leoJs.getUrlParam = getUrlParam;
})(window);
