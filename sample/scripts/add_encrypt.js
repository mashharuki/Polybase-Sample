/**
 * ================================================================================================
 * ”SWISS”という文言を一度暗号化してPolyBaseに登録し、それを復号化するサンプルスクリプト
 * ================================================================================================
 */

import { Polybase } from "@polybase/client";
import { symmetricDecryptString, symmmetricEncryptString } from './encrypt.js';
import { base64_to_uint8Array } from './utils/base64_to_uint8Array.js';

// DB用の名前
const nameSpace = "sample-mashharuki4"

const db = new Polybase({
  defaultNamespace: nameSpace,
});

// レコードを追加
//await db.collection("City").create(["swiss", "Swiss"]); 

const {
      version,
      nonce,
      ciphertext,
      key
} = await symmmetricEncryptString("SWISS");

console.log(`encypted data: ${ciphertext}`);
console.log(`key: ${key}`);
console.log(`nonce: ${nonce}`);

// データをアップデート
await db.collection("City").record("swiss").call("setCountry", [ciphertext]);

// データを読み込む
const data2 = await db.collection("City").record("swiss").get();

console.log(`read swiss data: ${JSON.stringify(data2.toJSON())}`);
console.log(`country data: ${data2.data.country}`);

// base64からunit8Array型に変換する
const uint8Array = base64_to_uint8Array(data2.data.country);

// インプットデータを作成
const inputData = {
      nonce: nonce,
      ciphertext: uint8Array
}

// 復号化
const result = await symmetricDecryptString(key, inputData);

console.log(`decrypted data: ${result}`);