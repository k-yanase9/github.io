# OpenImageDatasetのTips

----
<br />

URL:https://storage.googleapis.com/openimages/web/index.html

<img src="/github.io/markdownfile/openimagedataset/openimagedataset.png" width="100%">

## detection

- 存在しないイメージがある

　　現状把握しているのは、"7f1934f5884fad79"  


- オブジェクトが100を超えるものが多数ある

　　全部は見切れていないが300を超えるものもあった  
　　別途CSVとかを作った方がいいかも

<br />

## relation


- 存在していないLabelIDがある

　　LabelNameでひっかからないものがある。現状は除外したcsvファイルを作って対応  

- isは関係性が崩壊しているのがあるので除外

　　Man is Smileはrelationではないと判断

