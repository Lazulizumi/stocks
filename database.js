import Dexie from 'https://unpkg.com/dexie@3.0.3/dist/dexie.mjs';

//DB作成
const db = new Dexie('StocksDatabase');

//ストア定義
db.version(1).stores({
    JpnStocks:'id,name,tosho,nikkei'
});

db.version(1).stores({
    notes:'id,name,tosho,nikkei'
})

//データ追加更新
db.JpnStocks.bulkPut([
    {id:'3382',name:'セブン＆アイ・ホールディングス',tosho:'小売業',nikkei:'小売業'},
    {id:'4063',name:'信越化学工業',tosho:'化学',nikkei:'化学'},
    {id:'4502',name:'武田薬品工業'},
    {id:'4503',name:'アステラス製薬'},
    {id:'4568',name:'第一三共'},
    {id:'6098',name:'リクルートホールディングス'},
    {id:'6273',name:'SMC'},
    {id:'6367',name:'ダイキン工業'},
    {id:'6501',name:'日立製作所'},
    {id:'6594',name:'ニデック'},
    {id:'6758',name:'ソニーグループ'},
    {id:'6861',name:'キーエンス'},
    {id:'6954',name:'ファナック'},
    {id:'6981',name:'村田製作所'},
    {id:'7203',name:'トヨタ自動車'},
    {id:'7267',name:'本田技研工業'},
    {id:'7741',name:'HOYA'},
    {id:'7974',name:'任天堂'},
    {id:'8001',name:'伊藤忠商事'},
    {id:'8031',name:'三井物産'},
    {id:'8035',name:'東京エレクトロン'},
    {id:'8058',name:'三菱商事'},
    {id:'8306',name:'三菱UFJフィナンシャル・グループ'},
    {id:'8316',name:'三井住友フィナンシャルグループ'},
    {id:'8411',name:'みずほフィナンシャルグループ'},
    {id:'8766',name:'東京海上ホールディングス'},
    {id:'9432',name:'日本電信電話'},
    {id:'9433',name:'KDDI'},
    {id:'9434',name:'ソフトバンク'},
    {id:'9984',name:'ソフトバンクグループ'},
    //{id:'',name:'',tosho:'',nikkei:''},
]);

