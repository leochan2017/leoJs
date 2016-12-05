/**
 * @description : 一些常用方法的封装，JS工具库
 * @author      : Leo
 * @createtime  : 2015/09/01
 * @lastupdate  : 2016/12/05
 * @version     : 2.0
 */

(function(w) {
    var leo = leo || {};

    leo.helloWorld = function() {
        console.log('Hello Leo !');
    };

    /**
     * [获取浏览器参]
     * 
     * @param  String param 要获取的参数名
     * @return String       如存在，返回参数的值，不存在返回null
     */
    leo.getUrlParam = function(param) {
        var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    };

    /**
     * [获取cookie]
     * @param  String name 要获取的参数名
     * @return String      返回cookie的值
     */
    leo.getCookie = function(name) {
        var arr = [];
        var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');

        if (arr = document.cookie.match(reg)) {
            return (arr[2]);
        } else {
            return null;
        }
    };

    /**
     * [按需加载JS]
     * 
     * 骚年，如果你只是想在特定情况下才加载某JS，并在加载成功后执行某些语句，而不是页面加载时尽管用不用的上也一并加载某JS，那么我觉得你需要这个啊，什么？你说require，sea等模块引入可以实现？哈哈我这个非常轻量呀！
     * 
     * @param  String   URL         传入需要加载的URL
     * @param  Function success  加载成功后需要执行的回调
     * 
     */
    leo.includeJs = function(options) {
        var options = options || {},
            url = options.url,
            script = document.createElement('script'),
            head = document.getElementsByTagName('head')[0],
            succFn = function() {
                if (typeof options.success == 'function') {
                    options.success();
                }
            };

        if (typeof url == 'undefined' || url == '' || url == null) {
            console.error('请正确传入参数: url');
            return;
        }

        script.type = 'text/javascript';
        script.src = url;
        head.appendChild(script);

        if (script.readyState) { // IE 
            script.onreadystatechange = function() {
                if (script.readyState == 'loaded' || script.readyState == 'complete') {
                    script.onreadystatechange = null;
                    succFn();
                }
            };
        } else { // 标准浏览器 
            script.onload = function() {
                succFn();
            };
        }
    };

    /**
     * [日期格式化]
     * 
     * @param  Object   date    传入日期
     *
     * @param  String   format  查询季度: leo.dateFormat(new Date(), 'qq')
     * @return String   Return  返回：02
     * 
     * @param  String   format  查询年份: leo.dateFormat(new Date(), 'yyyy')
     * @return String   Return  返回：2016
     *
     * @param  String   format  查询年月: leo.dateFormat(new Date(), 'yyyy-MM')
     * @return String   Return  返回：2016-05
     *
     * @param  String   format  查询年月日: leo.dateFormat(new Date(), 'yyyy-MM-dd')
     * @return String   Return  返回：2016-05-01
     *
     * @param  String   format  查询时分秒: leo.dateFormat(new Date(), 'hh:mm:ss')
     * @return String   Return  返回：17:25:12
     *
     * @param  String   format  查询年月日时分秒: leo.dateFormat(new Date(), 'yyyy-MM-dd hh:mm')
     * @return String   Return  返回：2016-05-01 17:25
     *
     * 卧槽，能想到的有好多好多，我就不一一举例了，骚年麻烦你看个代码？
     * 
     */
    leo.dateFormat = function(options) {
        var options = options || {},
            date = options.date,
            format = options.format;

        if (typeof date == 'undefined' || date == '' || date == null) {
            console.error('请正确传入参数: date');
            return;
        }

        if (typeof format == 'undefined' || format == '' || format == null) {
            console.error('请正确传入参数: format');
            return;
        }

        var option = {
            'M+': date.getMonth() + 1, // 月份
            'd+': date.getDate(), // 日
            'h+': date.getHours(), // 小时
            'm+': date.getMinutes(), // 分
            's+': date.getSeconds(), // 秒
            'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
            'S': date.getMilliseconds() // 毫秒
        };

        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        };

        for (var i in option) {
            if (new RegExp('(' + i + ')').test(format)) {
                format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (option[i]) : (('00' + option[i]).substr(('' + option[i]).length)));
            }
        };

        return format;
    };

    /**
     * [据说很好看，很方便的调试神器]
     * 
     * 不过代码写的有点烂，凑合着先用
     * 注意，使用此接口时，需要先声明：
     *     window.leoType = 1; // 输出的方式 0:alert ,1: console
     * 
     */
    leo.log = function() {
        if (typeof window.leoType == 'undefined' || window.leoType == '' || window.leoType == null) {
            console.error('请先声明: window.leoType');
            return;
        }

        var param = arguments[0];

        if (window.leoType == 0) {
            var json = arguments[1];

            if (typeof json != 'undefined') {
                alert(param + ':' + JSON.stringify(json));
                return;
            }

            if (typeof param == 'object') {
                alert(JSON.stringify(param));
            } else {
                alert(param);
            }
            return;
        }

        if (arguments.length == 2) {
            var obj = arguments[1];

            console.group && console.group(param);

            console.info(JSON.parse(JSON.stringify(obj)));

            console.groupEnd && console.groupEnd();
        }

        if (arguments.length == 1) {
            if (typeof param == 'object') {
                console.info(JSON.parse(JSON.stringify(param)));
                return;
            }

            if (param == '') {
                console.error('传入参数为空');
                return;
            }

            console.log('%c' + JSON.parse(JSON.stringify(param)), 'color:red');
        }
    };

    /**
     * [检测数组是否存在某个值]
     * 
     * @param  Array      
     * @param  String     要检索的值
     * @return Number     如存在，返回下标；如不存在，返回-1
     */
    leo.indexOfArray = function(options) {
        var options = options || {},
            arr = options.arr,
            val = options.val;

        if (typeof arr == 'undefined' || arr == '' || arr == null) {
            console.error('请正确传入参数: arr');
            return;
        }

        if (typeof val == 'undefined' || val == '' || val == null) {
            console.error('请正确传入参数: val');
            return;
        }

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                return i;
            }
        }

        return -1;
    };

    /**
     * [在词后增加3个省略点]
     * 
     * @param  Number    达到某字节长度则剪掉 中文: 2字节 英文:1字节
     * @param  String    字符串
     * @return Element   超过长度则返回增加3个点的字符串
     */
    leo.cutStr = function(options) {
        var options = options || {},
            cutLength = options.cutLength,
            str = options.str,
            a = 0,
            temp = '';

        if (typeof cutLength == 'undefined' || cutLength == '' || cutLength == null) {
            console.error('请正确传入参数: cutLength');
            return;
        }

        if (typeof str == 'undefined' || str == '' || str == null) {
            console.error('请正确传入参数: str');
            return;
        }

        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 255) {
                a += 2;
            } else {
                a++;
            }
            if (a > cutLength) {
                return temp + '…';
            }
            temp += str.charAt(i);
        }

        return str;
    };


    /**
     * [获取字符串的字节长度]
     * 
     * @param  String    要获取长度的字符串
     * @return Number    返回str的字节
     */
    leo.getByteLen = function(options) {
        var options = options || {},
            str = options.str || '',
            bl = 0;

        for (var i = 0, l = str.length; i < l; i++) {
            if (str.charCodeAt(i) > 255) {
                bl++;
            }
            bl++;
        }
        return bl;
    };

    /**
     * [判断当前环境是否移动端]
     * 
     * @return Boolean [true : 是移动端， flase : 非移动端]
     */
    leo.isMobile = function() {
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
    };

    /**
     * [判断当前环境是否Android]
     * 
     * @return Boolean [true ：是Android ; false ：爱疯或其他]
     */
    leo.isAndroid = function() {
        var u = navigator.userAgent;
        if (u.indexOf('Android') != -1 || u.indexOf('Linux') != -1) {
            return true;
        } else {
            return false;
        }
    };

    /**
     * [调试用: 获取当前设备的网页信息]
     * 
     * @return Alert 当前的网页信息
     */
    leo.htmlInfo = function() {
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
        console.log(s);
    };


    /**
     * [调试用: 获取当前obj里面的东东]
     * 
     * @param  Object
     * @return Alert      当前obj里面的东东
     */
    leo.objInfo = function(obj) {
        if (obj) {
            for (i in obj) {
                console.log('属性:' + i + '的值是：\r\n' + obj[i]); // 获得属性
            }
        }
    };

    /**
     * [金额数字处理，允许: 正数、负数、正浮点数、负浮点数]
     * 
     * @param  String     要处理的字符串 
     * 
     * 调用 ： 绑定到一个事件，如input，然后 this.value = leo.matchNumber(this.value);
     * 
     */
    leo.matchNumber = function(str) {
        var str = str || '';
        var numberRegExp = /(\-?\d+\.\d*)|(\-?\d+\.)|(\-?\d+)|(\-?)/;
        var matches = str.match(numberRegExp);
        var numbers = '';
        if (matches) {
            numbers = matches[0];
        }
        return numbers;
    };

    /**
     * [可链式调用的ajax]
     * @param  {[object]} options [初始化参数对象，传入后会替换掉原参数，一般不用传]
     * 
     * 链式调用方式：ajax().before([Function]).get|post(url,data).always([Function]).succ([Function]).fail([Function])
     * 
     * 注：always、succ、fail可连续调用多次，即succ().succ().succ()...
     */
    leo.ajax = function(options) {
        // 默认初始化参数对象，可悲options替换
        var _options = {
            async: true, // 是否异步
            contentType: 'application/json; charset=utf-8', // POST时，head编码方式，默认json
            jsonForce: true // 是否强制要求返回格式为json
        };
        // 覆盖默认参数对象
        if (Object.prototype.toString.call(options) == '[object Object]') {
            for (var pname in options) {
                _options[pname] = options[pname];
            }
        }
        // 生成xhr对象，懒函数
        var createXHR = function() {
            try {
                xhr = new XMLHttpRequest(); // 直接创建
                createXHR = function() {
                    return new XMLHttpRequest()
                };
            } catch (e) {
                try {
                    xhr = new ActiveXObject('Msxml2.XMLHTTP'); // IE高版本创建XMLHTTP
                    createXHR = function() {
                        return new ActiveXObject('Msxml2.XMLHTTP')
                    };
                } catch (e) {
                    try {
                        xhr = new ActiveXObject('Microsoft.XMLHTTP'); // IE低版本创建XMLHTTP
                        createXHR = function() {
                            return new ActiveXObject('Microsoft.XMLHTTP')
                        };
                    } catch (e) {
                        xhr = null;
                        createXHR = function() {
                            return null
                        };
                    }
                }
            }
            return xhr;
        }
        var xhr = createXHR();
        var doAjax = function(url, data, method) {
            // 开始执行ajax
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    // 执行always里面的函数
                    for (var i = 0, l = main.alwaysCallbacks.length; i < l; i++) {
                        main.alwaysCallbacks[i](xhr.responseText, xhr);
                    }
                    // 返回结果转换为json
                    var resJson;
                    try {
                        resJson = JSON.parse(xhr.responseText || null);
                    } catch (e) {
                        resJson = undefined;
                    }
                    var status = xhr.status;
                    if (status < 200 || (status >= 300 && status != 304) || (_options.jsonForce && typeof(resJson) === 'undefined')) {
                        // 执行errCallbacks里面的函数
                        for (var i = 0, l = main.errCallbacks.length; i < l; i++) {
                            main.errCallbacks[i](xhr.responseText, xhr);
                        }
                    } else {
                        // 执行sucCallbacks里面的函数
                        for (var i = 0, l = main.sucCallbacks.length; i < l; i++) {
                            main.sucCallbacks[i](resJson, xhr);
                        }
                    }
                }
            }
            xhr.open(method, url, _options.async);
            // 如果是post要改变头
            method === 'POST' && xhr.setRequestHeader('Content-Type', _options.contentType);
            xhr.send(data || null);
        }

        var main = {
            sucCallbacks: [],
            errCallbacks: [function(err) { console.error('responseText:' + err) }],
            alwaysCallbacks: [],
            options: _options,
            get: function(url, data) {
                doAjax(url, data, 'GET');
                return main;
            },
            post: function(url, data) {
                doAjax(url, data, 'POST');
                return main;
            }
        };

        /**
         * 设置多个请求头
         * @param  {object} headers
         */
        main.headers = function(headers) {
            if (Object.prototype.toString.call(headers) === '[object Object]') {
                for (var name in headers) {
                    console.log(name + ' ' + headers[name]);
                    console.log(xhr)
                    xhr.setRequestHeader(name, headers[name]);
                }
            }
        };

        /**
         * 设置前置处理方法
         * @param  {Function} callback
         */
        main.before = function(callback) {
            typeof(callback) === 'function' && callback(xhr);
            return main;
        };

        /**
         * 分别是成功、失败、完成的回调函数
         * @param  {Function} callback [description]
         */
        main.succ = function(callback) {
            typeof(callback) === 'function' && main.sucCallbacks.push(callback);
            return main;
        };

        main.fail = function(callback) {
            typeof(callback) === 'function' && main.errCallbacks.push(callback);
            return main;
        };

        main.always = function(callback) {
            typeof(callback) === 'function' && main.alwaysCallbacks.push(callback);
            return main;
        };

        return main;
    }

    w.leo = leo;

})(window);
