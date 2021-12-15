const MongoClient = require('mongodb').MongoClient;
class DAO {
  constructor(url, dbName, collectionName) {
    this.url = url;
    this.dbName = dbName;
    this.collectionName = collectionName;
  }

  _connect() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.url, (err, client) => {
        if (err) return reject(err);
        resolve(client);
      })
    })
  }

  insert(obj) {
    return new Promise((resolve, reject) => {
      this._connect().then(client => {
        const db = client.db(this.dbName);
        db.collection(this.collectionName).insertOne(obj).then(res =>{
          client.close();
          resolve(res);
        });
      })
    })
  }
}

const dao = new DAO('mongodb://localhost:27017/','test', 'user');
const obj = {
  name: '邓楚恬',
  age: 99
}
dao.insert(obj).then(res => {
  console.log(res);
})