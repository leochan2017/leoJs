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

####leo.getCookie
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

#####示例代码:
```
leo.includeJs({
	url: 'http://www.leojs.com/leojs.js',
	succ: function() {
		console.log('加载成功');
	}
});
```

---
 
####日期格式化
	leo.dateFormat
	
	@param  Object   date    传入日期
    
    @param  String   format  查询季度: leo.dateFormat(new Date(), 'qq')
    @return String   Return  返回：02
    
    @param  String   format  查询年份: leo.dateFormat(new Date(), 'yyyy')
    @return String   Return  返回：2016
    
    @param  String   format  查询年月: leo.dateFormat(new Date(), 'yyyy-MM')
    @return String   Return  返回：2016-05
    
    @param  String   format  查询年月日: leo.dateFormat(new Date(), 'yyyy-MM-dd')
    @return String   Return  返回：2016-05-01
    
    @param  String   format  查询时分秒: leo.dateFormat(new Date(), 'hh:mm:ss')
    @return String   Return  返回：17:25:12
    
    @param  String   format  查询年月日时分秒: leo.dateFormat(new Date(), 'yyyy-MM-dd hh:mm')
    @return String   Return  返回：2016-05-01 17:25

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

#####示例代码:
```
window.leoType = 0; // 只需声明一次
leo.log('XXX接口返回', res);
```

---

####leo.indexOfArray()
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


#####示例代码:
```
leo.indexOfArray({
    array: ['leo', 'jack', 'tom'],
    value: 'tom'
});
```

---
    
####在词后增加3个省略点
	leo.cutStr
	
	@param  Number    达到某字节长度则剪掉 中文: 2字节 英文:1字节
    @param  String    字符串
    @return Element   超过长度则返回增加3个点的字符串
    
####获取字符串的字节长度
	leo.getByteLen
	
	@param  String    要获取长度的字符串
	@return Number    返回str的字节
	
---

####leo.isMobile()
判断当前运行环境是否移动端

**返回参数**

| 参数 | 类型 | 描述 |
|:-------------|:-------------:|:-------------|
| data | Boolean | true: 移动端, false: 非移动端 |


#####示例代码:
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


#####示例代码:
```
if (leo.isAndroid()) {
	console.log('当前是安卓环境');
}
```

---
	
####调试用: 获取当前设备的网页信息
	leo.htmlInfo
	
	@return Alert 当前的网页信息
	
####调试用: 获取当前obj里面的东东
	leo.objInfo
	
	@param  Object
	@return Alert      当前obj里面的东东
	
####金额数字处理，允许: 正数、负数、正浮点数、负浮点数
	leo.matchNumber
	
	@param  String     要处理的字符串 
	调用: 绑定到一个事件，如input，然后 this.value = leo.matchNumber(this.value);

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


#####示例代码:
```
leo.ajax().before([Function]).get|post(url, data).always([Function]).succ([Function]).fail([Function])
```

**注: always、succ、fail可连续调用多次，即succ().succ().succ()...**

---
