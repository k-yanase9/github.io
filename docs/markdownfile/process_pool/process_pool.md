# CPUの数の暴力で押す方法

<img src="/github.io/markdownfile/process_pool/process_pool.jpg" heght="100px">

-----

<br />

##　まずは全体

<details>
<summary>全体コード</summary>

```python
from concurrent.futures import ProcessPoolExecutor
import pandas as pd
import os

def proc(df:pd.DataFrame) -> pd.DataFrame:
    ret_df = df.copy()
    for index, row in df.iterrows():
        Label1 = labels[labels.LabelName==row["LabelName1"]]
        Label2 = labels[labels.LabelName==row["LabelName2"]]
        if (Label2.empty) or (Label1.empty):
            ret_df.drop(index,inplace=True)
    return ret_df

labels = pd.read_csv("/local_data1/openimage/oidv7-class-descriptions.csv")
anopath = os.path.join("/local_data1/openimage","relation",f"oidv6-validation-annotations-vrd.csv")
rel = pd.read_csv(anopath)
df_arr= [rel[index*len(rel)//300:(index+1)*len(rel)//300-1] for index in range(300)]

with ProcessPoolExecutor(max_workers=30) as process:
    ret = process.map(proc,df_arr)
result = [r for r in ret]

df = result[0]
for i in range(1,len(result)):
    df = pd.concat([df,result[i]])

df.to_csv("/home/k-yanase/openimagedatgaset/oidv6-vaildation-annotations-vrd-fix.csv")

```
</details>

<br />

## 並列処理させる関数の定義

実際に並列処理させる関数を定義する  
ここでリターンする変数がスタックされていく


```python
def proc(df:pd.DataFrame) -> pd.DataFrame:
    ret_df = df.copy()
    for index, row in df.iterrows():
        Label1 = labels[labels.LabelName==row["LabelName1"]]
        Label2 = labels[labels.LabelName==row["LabelName2"]]
        if (Label2.empty) or (Label1.empty):
            ret_df.drop(index,inplace=True)
    return ret_df

```

<br />

## データの分割

<br />

map関数に流すためにデータを分割
今回は300に分けている

```python
f_arr= [rel[index*len(rel)//300:(index+1)*len(rel)//300-1] for index in range(300)]
```
<br />

## 並列処理＋スタック

<br />

map関数で定義して内包表記でスタックしていく
順序は保障されないので注意

```python
with ProcessPoolExecutor(max_workers=30) as process:
    ret = process.map(proc,df_arr)
result = [r for r in ret]

```

<br />

## 結合と保存

<br />

あとは結合して保存するだけ

```python
df = result[0]
for i in range(1,len(result)):
    df = pd.concat([df,result[i]])

df.to_csv("/home/k-yanase/openimagedatgaset/oidv6-vaildation-annotations-vrd-fix.csv")

```
