##  API 差異
### XMLHttpRequest
  XHR 是最原始的方法，目前大部分的套件都是基於此方法實作。它可以使用JSON、XML、HTML和text文字等格式傳送和接收資料。
優點
- 不重新載入頁面的情況下更新網頁
- 在頁面已載入後從伺服器請求/接收資料
- 在後臺向伺服器傳送資料。

  
但是有一些缺點
- 不符合關注點分離 ( Separation of Concerns )
- 設定與使用上較為混亂
- 容易造成 callback 地獄

``` 
const xhr = new XMLHttpRequest();
// 宣告一個 xhr 物件

xhr.open('GET', 'https://uinames.com/api/', true);
// 方法、API、同步與非同步 ( false 為同步，true 為非同步 )

xhr.onload = () => console.log(xhr.response);
// 成功則執行此函式
xhr.onerror = err => console.log(err);
// 失敗則執行此函式

xhr.send(null);
// 送出資料
```


### jQuery AJAX
為了更快捷的操作DOM，並且規避一些瀏覽器相容問題，產生了jQuery。它裡面的AJAX請求也相容了各瀏覽器，可以有簡單易用的方法$.get，$.post。簡單點說，就是對XMLHttpRequest物件的封裝。

優點：
- 對原生XHR的封裝，做了相容處理，簡化了使用。
- 增加了對JSONP的支援，可以簡單處理部分跨域。

缺點：
- 如果有多個請求，並且有依賴關係的話，容易形成回撥地獄。
- 本身是針對MVC的程式設計，不符合現在前端MVVM的浪潮。
- ajax是jQuery中的一個方法。如果只是要使用ajax卻要引入整個jQuery非常的不合理。

```
$.ajax({
  type: 'POST',
  url: url, 
  data: data,
  dataType: dataType,
  success: function () {},
  error: function () {}
}

```

### Fetch
Fetch 是 ES6 的規範，使用上程式碼相對簡潔，但發展尚未成熟

優點
- 符合關注點分離 ( Separation of Concerns )
- 寫法較 XHR 精簡
- 使用 Promise 方法
- 它是更為底層的 API，設定較彈性

缺點
- 網路發生錯誤或中斷時才會回傳 reject，其餘則回傳 resolve
- 預設不傳送或接收任何 cookies
- 不支援同步
- 不支援請求進度顯示
- 不支援取消請求


```
fetch( '/v1/accounts', {
  method:
  headers:
  body:
  credentials:  
  // cookie
  mode:
  cache：
  redirect:
  referrer:
  referrerPolicy:
  integrity:
} )

```
#### Get 方式
```
fetch('https://uinames.com/api/')
  // API ( 預設為 GET )
  .then(res => res.json())
  // 轉換 ReadableStream 物件
  .then(data => console.log(data))
  // 成功則執行此函式
  .catch(err => console.log(err));
  // 失敗則執行此函式
```
#### Post 方式
```
fetch('https://uinames.com/api/', {
  method: 'POST',
  // 方法改為 POST
  headers: { 'Content-Type': 'application/json' },
  // 設定 Header
  body: JSON.stringify(data),
  // 資料內容
  credentials: 'include'
  // 若要使用 cookies 須加上此段設定
}).then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
```
