# leoJs - a tool for Javascript
伟大的leoJs诞生了 ヽﾐ ´∀｀ﾐノ＜ 


## Example codes
leo.helloWorld();


## Home Page
http://www.leojs.com

http://leochan2017.github.io/leoJs/



---
##API列表

####leo.getUrlParam(String)
获取浏览器参数

**调用参数**

| 参数 | 必填 | 类型 | 描述 |
|:-------------|:-------------:|:-------------:|:-------------|
| Param | true | String | 需要获取的浏览器参数的Key |

**返回参数**

| 参数 | 类型 | 描述 |
|:-------------|:-------------:|:-------------|
| data | String | 获取的浏览器参数的Value |

---

####leo.getCookie(String)
获取cookie

**调用参数**

| 参数 | 必填 | 类型 | 描述 |
|:-------------|:-------------:|:-------------:|:-------------|
| Param | true | String | 要获取的参数名 |

**返回参数**

| 参数 | 类型 | 描述 |
|:-------------|:-------------:|:-------------|
| data | String | 返回cookie的值 |

---

####leo.includeJs(Object)
按需加载JS

**调用参数**

| 参数 | 必填 | 类型 | 描述 |
|:-------------|:-------------:|:-------------:|:-------------|
| url | true | String | 传入需要加载的URL |
| succ | false | Function | JS加载成功执行回调 |

**示例代码**
```
leo.includeJs({
	url: 'http://www.leojs.com/leojs.js',
	succ: function() {
		console.log('加载成功');
	}
});
```

---
 
####leo.dateFormat(Object)
日期格式化

**调用参数**

| 参数 | 必填 | 类型 | 描述 |
|:-------------|:-------------:|:-------------:|:-------------|
| date | true | Date Object | 日期对象 |
| format | true | String | 格式 |

**返回参数**

| 参数 | 类型 | 描述 |
|:-------------|:-------------:|:-------------|
| data | String | 返回格式化后的日期字符串 |

**示例代码**

```
// 查询季度
var qq = leo.dateFormat({
	date: new Date(),
	format: 'qq'
});

// qq: 03


// 查询年份
var year = leo.dateFormat({
	date: new Date(),
	format: 'yyyy'
});

// year: 2016


// 查询年月
var ym = leo.dateFormat({
	date: new Date(),
	format: 'yyyy-MM'
});

// ym: 2016-12


// 查询年月日
var ymd = leo.dateFormat({
	date: new Date(),
	format: 'yyyy-MM-dd'
});

// ymd: 2016-12-07


// 查询查询时分秒
var hms = leo.dateFormat({
	date: new Date(),
	format: 'hh:mm:ss'
});

// hms: 17:25:12


// 查询年月日时分
var ymdhm = leo.dateFormat({
	date: new Date(),
	format: 'yyyy-MM-dd hh:mm'
});

// ymdhm: 2016-12-07 23:25

```

---


###leo.log(Anything, Anything)
* 加强console.log显示
* 移动端调试不方便时可以转为alert弹出log内容
* 允许传入参数为1~2个

**调用参数**

| 参数 | 必填 | 类型 | 描述 |
|:-------------|:-------------:|:-------------:|:-------------|
| window.leoType | true | Number | 调试显示的类型，只需整个程序中声明一次即可，0为alert，1为console |
| Param1 | false | Anything | 需要打印的内容 |
| Param2 | false | Anything | 需要打印的内容 |

**示例代码**

```
window.leoType = 0; // 只需声明一次
leo.log('XXX接口返回', res);
```

---

####leo.indexOfArray(Object)
检测数组是否存在某个值

**调用参数**

| 参数 | 必填 | 类型 | 描述 |
|:-------------|:-------------:|:-------------:|:-------------|
| array | true | Array | 待检测数组 |
| value | true | String | 要检测的值 |

**返回参数**

| 参数 | 类型 | 描述 |
|:-------------|:-------------:|:-------------|
| data | Number | 如存在，返回下标；如不存在，返回-1 |


**示例代码**

```
leo.indexOfArray({
    array: ['leo', 'jack', 'tom'],
    value: 'tom'
});
```

---
    
####leo.cutStr(String)
在词后增加3个省略点

**调用参数**

| 参数 | 必填 | 类型 | 描述 |
|:-------------|:-------------:|:-------------:|:-------------|
| cutLength | true | Number | 达到某字节长度则剪掉 中文: 2字节 英文:1字节 |
| str | true | String | 要处理的字符串 |

**返回参数**

| 参数 | 类型 | 描述 |
|:-------------|:-------------:|:-------------|
| data | String | 超过长度则返回增加3个点的字符串 |


**示例代码**

```
var s = leo.cutStr({cutLength:3,str:'asdfghkl'});
```

---

    
####leo.getByteLen(String)
获取字符串的字节长度

**调用参数**

| 参数 | 必填 | 类型 | 描述 |
|:-------------|:-------------:|:-------------:|:-------------|
| str | true | String | 要处理的字符串 |

**返回参数**

| 参数 | 类型 | 描述 |
|:-------------|:-------------:|:-------------|
| data | Number | 返回str的字节 |


**示例代码**

```
var len = leo.getByteLen({str:'jjhjkhkjhjk'})
```

---


####leo.isMobile()
判断当前运行环境是否移动端

**返回参数**

| 参数 | 类型 | 描述 |
|:-------------|:-------------:|:-------------|
| data | Boolean | true: 移动端, false: 非移动端 |


**示例代码**

```
if (leo.isMobile()) {
	console.log('当前是移动端环境');
}
```
	
---

####leo.isAndroid()
判断当前运行是否安卓环境

**返回参数**

| 参数 | 类型 | 描述 |
|:-------------|:-------------:|:-------------|
| data | Boolean | true: 安卓, false: 非安卓 |


**示例代码**

```
if (leo.isAndroid()) {
	console.log('当前是安卓环境');
}
```

---
	
####leo.htmlInfo
调试用，获取当前的网页信息

**返回参数**

| 参数 | 类型 | 描述 |
|:-------------|:-------------:|:-------------|
| data | console.log | 网页可见区域高，网页可见区域高，网页可见区域高，网页正文全文宽，网页正文全文高，网页被卷去的高，网页被卷去的左，网页正文部分上，网页正文部分左，屏幕分辨率的高，屏幕分辨率的宽，屏幕可用工作区高度，屏幕可用工作区宽度 |

---
	
####leo.objInfo(Object)
调试用，获取当前obj里面的信息

**调用参数**

| 参数 | 必填 | 类型 | 描述 |
|:-------------|:-------------:|:-------------:|:-------------|
| Object | true | Object | 需要查看的Object |

**返回参数**

| 参数 | 类型 | 描述 |
|:-------------|:-------------:|:------------|
| data | console.log | 返回Object的key，value |

---
	
####leo.matchNumber(String)
金额数字处理，允许: 正数、负数、正浮点数、负浮点数



**注: 绑定到一个事件，如input，然后 this.value = leo.matchNumber(this.value);**

---

###leo.ajax()
链式调用的ajax


**调用参数**


| 方法 | 参数 | 必填 | 类型 | 描述 |
|:-------------||:-------------:|:-------------:|:-------------|
| get | url, data | true | String, Object | 请求URL, 请求参数， Get请求可以在URL上带上参数，那么第二个参数就可以不传了 |
| post | url, data | true | String, Object | 请求URL, 请求参数 |
| before | Function | false | Function | 请求前置处理回调 |
| succ | Function | false | Function | 请求成功回调 |
| fail | Function | false | Function | 请求失败回调 |


**示例代码**

```
leo.ajax().before([Function]).get|post(url, data).always([Function]).succ([Function]).fail([Function])
```

**注: always、succ、fail可连续调用多次，即succ().succ().succ()...**

---
