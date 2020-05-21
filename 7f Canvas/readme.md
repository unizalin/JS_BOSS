# Canvas
產生一個固定大小的繪圖畫布，這個畫布上有一或多個渲染環境(rendering context）
```
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
```

## 關於繪圖畫布
 Canvas，類似畫布網格的座標系統來繪製圖案，網格的原點（0,0) 是由左上角座標開始，所有元素的定位皆在左上角，


## 畫矩形
共有三個矩形繪圖函數:

- fillRect(x, y, width, height)
  畫出一個填滿的矩形。

- strokeRect(x, y, width, height)
  畫出一個矩形的邊框

- clearRect(x, y, width, height)
  清除指定矩形區域內的內容，使其變為全透明。

x,y 代表從原點出發的座標位置，width,heigh 代表矩形寬高

## 畫路徑
  使用路徑(Path)畫圖有三個步驟
- beginPath()
  產生一個新路徑（圖），產生後再使用繪圖指令來設定路徑。

- closePath()
  閉合路徑好讓新的繪圖指令來設定路徑。

- 路徑 API
  路徑 API，這些 API 便是繪圖指令

- stroke()
  畫出圖形的邊框。

- fill()
  填滿路徑內容區域來產生圖形。

- moveTo(x,y)
  移動畫筆到指定的(x, y)座標點
