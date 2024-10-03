import Dexie from 'https://unpkg.com/dexie@3.0.3/dist/dexie.mjs';

//DB作成
const db = new Dexie('StocksDatabase');

//ストア定義
db.version(1).stores({
    JpnStocks:'id,name,market,tosho,nikkei'
});

//データ追加更新
db.JpnStocks.bulkPut([
    {id:'3382',name:'セブン＆アイ・ホールディングス',market:'Prime',tosho:'小売業',nikkei:'小売業'},
    {id:'4063',name:'信越化学工業',market:'Prime',tosho:'化学',nikkei:'化学'},
    {id:'4502',name:'武田薬品工業',market:'Prime',tosho:'医薬品',nikkei:'医薬品'},
    {id:'4503',name:'アステラス製薬',market:'Prime',tosho:'医薬品',nikkei:'医薬品'},
    {id:'4568',name:'第一三共',market:'Prime',},
    {id:'6098',name:'リクルートホールディングス',market:'Prime',},
    {id:'6273',name:'SMC',market:'Prime',},
    {id:'6367',name:'ダイキン工業',market:'Prime',},
    {id:'6501',name:'日立製作所',market:'Prime',},
    {id:'6594',name:'ニデック',market:'Prime',},
    {id:'6758',name:'ソニーグループ',market:'Prime',},
    {id:'6861',name:'キーエンス',market:'Prime',},
    {id:'6954',name:'ファナック',market:'Prime',},
    {id:'6981',name:'村田製作所',market:'Prime',},
    {id:'7203',name:'トヨタ自動車',market:'Prime',},
    {id:'7267',name:'本田技研工業',market:'Prime',},
    {id:'7741',name:'HOYA',market:'Prime',},
    {id:'7974',name:'任天堂',market:'Prime',},
    {id:'8001',name:'伊藤忠商事',market:'Prime',},
    {id:'8031',name:'三井物産',market:'Prime',},
    {id:'8035',name:'東京エレクトロン',market:'Prime',},
    {id:'8058',name:'三菱商事',market:'Prime',},
    {id:'8306',name:'三菱UFJフィナンシャル・グループ',market:'Prime',},
    {id:'8316',name:'三井住友フィナンシャルグループ',market:'Prime',},
    {id:'8411',name:'みずほフィナンシャルグループ',market:'Prime',},
    {id:'8766',name:'東京海上ホールディングス',market:'Prime',},
    {id:'9432',name:'日本電信電話',market:'Prime',},
    {id:'9433',name:'KDDI',market:'Prime',},
    {id:'9434',name:'ソフトバンク',market:'Prime',},
    {id:'9984',name:'ソフトバンクグループ',market:'Prime',},
    //{id:'',name:'',market:'',tosho:'',nikkei:''},
]);

