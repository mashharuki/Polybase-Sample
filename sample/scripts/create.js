import { Polybase } from "@polybase/client";

const nameSpace = "sample-mashharuki4"

const db = new Polybase({
  defaultNamespace: nameSpace,
});

// スキーマを定義
await db.applySchema(`
  @public
  collection City {
    id: string;
    name: string;
    country?: string;

    constructor (id: string, name: string) {
      this.id = id;
      this.name = name;
    }

    setCountry (country: string) {
      this.country = country;
    }
  }

  @public
  collection Country {
    id: string;
    name: string;

    constructor (id: string, name: string) {
      this.id = id;
      this.name = name;
    }
  }
`,
  `${nameSpace}`
); // your-namespace is optional if you have defined a default namespace

// City collectionにデータを追加
await db.collection("City").create(["new-york", "New York"]); 
await db.collection("City").create(["japan", "Japan"]); 

// データをアップデート
await db.collection("City").record("new-york").call("setCountry", ["USA"]);
await db.collection("City").record("japan").call("setCountry", ["JAPAN"]);

// データを読み込む
const data = await db.collection("City").record("new-york").get();
const data2 = await db.collection("City").get();

console.log(`read data: ${JSON.stringify(data.toJSON())}`)
console.log(`read data2: ${JSON.stringify(data2.toJSON())}`)