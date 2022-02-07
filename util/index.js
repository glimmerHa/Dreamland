/**
 * 获取随机布尔值（True/False）
 * @returns Boolean
 */
// Math.random => [0,1)
const randomBoolean = () => Math.random() > 0.5;
console.log(randomBoolean());


/**
 * 判断一个日期是否是工作日
 * @param {Date} date (new Date())
 * @returns Boolean
 */
 const isWeekday = (date) => date.getDay() % 6 !== 0;
 console.log(isWeekday(new Date(2021, 0, 11)));
 // Result: true (周一)
 console.log(isWeekday(new Date(2021, 0, 10)));
 // Result: false (周日)

 /**
  * 反转字符串
  * @param {String} str 
  * @returns String
  */
const reverse = str => str.split('').reverse().join('');
reverse('hello world');     
// Result: 'dlrow olleh'

/**
 * 判断当前标签页是否为可视状态
 * @returns 
 */
const isBrowserTabInView = () => document.hidden;
// isBrowserTabInView();
// false 显示
// true 隐藏

/**
 * 判断数字为奇数或者偶数
 * @param {*} num 
 * @returns boolean
 */
const isEven = num => num % 2 === 0;
console.log(isEven(2));
// Result: true
console.log(isEven(3));
// Result: false

/**
 * 从 Date 对象中获取时间
 * @param {Date} date 
 * @returns 
 */
const timeFromDate = date => date.toTimeString().slice(0, 8);
console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0))); 
// Result: "17:30:00"
console.log(timeFromDate(new Date()));
// Result: 返回当前时间

/**
 * 保留指定的小数位
 * @param {*} n 
 * @param {Number} fixed 
 * @returns 
 */
const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
// Examples
toFixed(25.198726354, 1);       // 25.1
toFixed(25.198726354, 2);       // 25.19
toFixed(25.198726354, 3);       // 25.198
toFixed(25.198726354, 4);       // 25.1987
toFixed(25.198726354, 5);       // 25.19872
toFixed(25.198726354, 6);       // 25.198726

/**
 * 检查指定元素是否处于聚焦状态
 * @param {Element} el 
 * @returns 
 */
const elementIsInFocus = (el) => (el === document.activeElement);
elementIsInFocus(anyElement)
// Result: 如果处于焦点状态会返回 True 否则返回 False

/**
 * 检查当前用户是否支持触摸事件
 */
const touchSupported = () => {
    ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);
  }
  console.log(touchSupported());
  // Result: 如果支持触摸事件会返回 True 否则返回 False

/**
 * 检查当前用户是否是苹果设备
 */
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
console.log(isAppleDevice);
// Result: 是苹果设备会返回 True

/**
 * 滚动到页面顶部
 * @returns 
 */
const goToTop = () => window.scrollTo(0, 0);
goToTop();
// Result: 将会滚动至顶部

/**
 * 获取所有参数的平均数
 * @param  {...any} args 
 * @returns 
 */
const average = (...args) => args.reduce((a, b) => a + b) / args.length;
average(1, 2, 3, 4);
// Result: 2.5

/**
 * 转换华氏/摄氏
 * @param {*} celsius 
 * @returns 
 */
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
// Examples
celsiusToFahrenheit(15);    // 59
celsiusToFahrenheit(0);     // 32
celsiusToFahrenheit(-20);   // -4
fahrenheitToCelsius(59);    // 15
fahrenheitToCelsius(32);    // 0
