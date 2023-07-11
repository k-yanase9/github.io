# Vuejsで作ったページをgithub pagesに公開するまで

<img src="/github.io/markdownfile/vuejs_to_githubpage/vuejs_to_githubpage.jpg" height="300px">

-----

## vuejs??


javascriptのフレームワークで非常にわかりやすく、高度なwebページを作ることができる  
プラグインを入れることでSPAを作ることもできる  

<br />

##　準備

### github

レポジトリが必要なので作っておく  
レポジトリのsettings→pagesで  
branchをmasterにして.folderを/docsにしてsave


### dockerfile

curlをインストールしてnvmを落としてこればOK
これで最新のNODEが使える
あとはubuntuならいつも使ってるやつでOK
下記が使うのに必要なパッケージ関連

```docker
~~~
RUN apt install curl
~~~
#node
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash 
RUN . $HOME/.nvm/nvm.sh && \  
    nvm install -s --lts && \ 
    nvm use --lts && \  
    node -v && npm -v
```

### 環境構築

基本はvuetifyとセットで使った方が圧倒的に楽なのでそれをベースに構築する

```bash
npm create vuetify

? Project name: › vuetify-project  #プロジェクト名を決める。プロジェクト名のフォルダが自動生成される
? Which preset would you like to install? › - Use arrow-keys. Return to submit. #構成を決めるここではcustomにする
    Default (Vuetify)
    Base (Vuetify, VueRouter)
    Essentials (Vuetify, VueRouter, Pinia)
❯   Custom (Choose your features)
? Use TypeScript? › No / Yes #必要であればtypescriptにする。今回は普通のjsで作る
? Use Vue Router? › No / Yes #SPAには必須なのでいれる
? Use Pinia? › No / Yes #大きなアプリケーションで状態を管理する必要があるならいれる。今回はいれない
? Use ESLint? › No / Yes #Linter。無いときついのでいれる
Would you like to install dependencies with yarn, npm, or pnpm? › - Use arrow-keys. Return to submit. #npmが幸せだと思う
    yarn
❯   npm
    pnpm
    none

```

<br />

## 必要な設定

### vite.config.js

baseに公開するアドレスを追加  
pageに公開するときは下記アドレスになると思うのでbaseにyoupageを追加する  
https://yourname.github.io/yourpage/  

また、githubpageはdocsフォルダにディプロイする必要があるのでbuildの設定を追加する

```javascript
// https://vitejs.dev/config/
export default defineConfig({
  base: '/yourpage',
  build: {
    outDir: './docs',
    publicDir: './public',
  },
  ~~
})

```

### src/router/index.js

ここはなぜがバグがあるので  
history: createWebHistory(process.env.BASE_URL)　の  
process.env.BASE_URLをimport.meta.env.BASE_URLに書き換える  

<br />

## debug

githubpageはpushしてから反映されるまで3～4分程度かかるのでデバッグには向かない  
そこで、ローカル起動することで、デバッグをやりやすくする  
下記コマンドでローカル起動ができる  

```bash
npm run dev
```

<br />

## コンパイル


下記でコンパイルするとdocsフォルダが作れるのであとはgithubにpushする

```bash
npm run build
```
