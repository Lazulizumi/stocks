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
    {id:'4568',name:'第一三共',market:'Prime',tosho:'医薬品',nikkei:'医薬品'},
    {id:'6098',name:'リクルートホールディングス',market:'Prime',tosho:'サービス',nikkei:'サービス業'},
    {id:'6273',name:'SMC',market:'Prime',tosho:'機械',nikkei:'機械'},
    {id:'6367',name:'ダイキン工業',market:'Prime',tosho:'機械',nikkei:'機械'},
    {id:'6501',name:'日立製作所',market:'Prime',tosho:'電気機器',nikkei:'電気機器'},
    {id:'6594',name:'ニデック',market:'Prime',tosho:'電気機器',nikkei:'電気機器'},
    {id:'6758',name:'ソニーグループ',market:'Prime',tosho:'電気機器',nikkei:'電気機器'},
    {id:'6861',name:'キーエンス',market:'Prime',tosho:'電気機器',nikkei:'電気機器'},
    {id:'6954',name:'ファナック',market:'Prime',tosho:'電気機器',nikkei:'電気機器'},
    {id:'6981',name:'村田製作所',market:'Prime',tosho:'電気機器',nikkei:'電気機器'},
    {id:'7203',name:'トヨタ自動車',market:'Prime',tosho:'輸送用機器',nikkei:'自動車'},
    {id:'7267',name:'本田技研工業',market:'Prime',tosho:'輸送用機器',nikkei:'自動車'},
    {id:'7741',name:'HOYA',market:'Prime',tosho:'精密機器',nikkei:'精密機器'},
    {id:'7974',name:'任天堂',market:'Prime',tosho:'その他製品',nikkei:'サービス'},
    {id:'8001',name:'伊藤忠商事',market:'Prime',tosho:'卸売業',nikkei:'商社'},
    {id:'8031',name:'三井物産',market:'Prime',tosho:'卸売業',nikkei:'商社'},
    {id:'8035',name:'東京エレクトロン',market:'Prime',tosho:'電気機器',nikkei:'電気機器'},
    {id:'8058',name:'三菱商事',market:'Prime',tosho:'卸売業',nikkei:'商社'},
    {id:'8306',name:'三菱UFJフィナンシャル・グループ',market:'Prime',tosho:'銀行業',nikkei:'銀行'},
    {id:'8316',name:'三井住友フィナンシャルグループ',market:'Prime',tosho:'銀行業',nikkei:'銀行'},
    {id:'8411',name:'みずほフィナンシャルグループ',market:'Prime',tosho:'銀行業',nikkei:'銀行'},
    {id:'8766',name:'東京海上ホールディングス',market:'Prime',tosho:'保険業 ',nikkei:'保険'},
    {id:'9432',name:'日本電信電話',market:'Prime',tosho:'情報・通信業',nikkei:'通信'},
    {id:'9433',name:'KDDI',market:'Prime',tosho:'情報・通信業',nikkei:'通信'},
    {id:'9434',name:'ソフトバンク',market:'Prime',tosho:'情報・通信業',nikkei:'通信'},
    {id:'9984',name:'ソフトバンクグループ',market:'Prime',tosho:'情報・通信業',nikkei:'通信'},
    //{id:'',name:'',market:'',tosho:'',nikkei:''},
]);


