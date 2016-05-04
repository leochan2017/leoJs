# leoJs - a tool for Javascript
伟大的leoJs诞生了 ヽﾐ ´∀｀ﾐノ＜ 


## Example codes
leo.helloWorld();


## Home Page
http://www.leojs.com



---
##API列表

####获取浏览器参
	leo.getUrlParam
	
	@param  String param 要获取的参数名
    @return String       如存在，返回参数的值，不存在返回null

####按需加载JS
	leo.includeJs
	
	@param  String   URL         传入需要加载的URL
    @param  Function callBackFn  加载成功后需要执行的回调
    
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

####据说很好看，很方便的调试神器
	leo.log
	
	注意，使用此接口时，需要先声明：
	window.leoDebug = true; // 是否允许log输出 flase则不允许输出任何调试信息
	window.leoType = 1; // 输出的方式 0:alert ,1: console

####检测数组是否存在某个值
	leo.indexOfArray
	
	@param  Array      
    @param  String     要检索的值
    @return Number     如存在，返回下标；如不存在，返回-1
    
####在词后增加3个省略点
	leo.cutStr
	
	@param  Number    达到某字节长度则剪掉 中文: 2字节 英文:1字节
    @param  String    字符串
    @return Element   超过长度则返回增加3个点的字符串
    
####获取字符串的字节长度
	leo.getByteLen
	
	@param  String    要获取长度的字符串
	@return Number    返回str的字节
	
####判断当前环境是否移动端
	leo.isMobile
	
	@return Boolean [true : 是移动端， flase : 非移动端]
	
####判断当前环境是否Android
	leo.isAndroid
	
	@return Boolean [true ：是Android ; false ：爱疯或其他]
	
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
	调用 ： 绑定到一个事件，如input，然后 this.value = leo.matchNumber(this.value);


