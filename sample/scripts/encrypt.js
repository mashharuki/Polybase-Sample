import { aescbc, decodeFromString, encodeToString } from '@polybase/util'

/**
 * 文字列を暗号するメソッド
 * @param {*} str 暗号化の対象となる文字列
 * @returns 
 */
export async function symmmetricEncryptString (str) {
  // This returns symmetric key as Uint8Array
  const key = aescbc.generateSecretKey()

  // Convert string value to Uint8Array so it can be encrypted
  const strDataToBeEncrypted = decodeFromString(str, 'utf8')

  // Encrypt the data, as EncryptedDataAesCbc256
  const encryptedData = await aescbc.symmetricEncrypt(key, strDataToBeEncrypted)

  // Store this data for later access
  return {
    version: encryptedData.version, // aes-cbc-256/symmetric
    nonce: encryptedData.nonce, // Uint8array
    ciphertext: encryptedData.ciphertext, // Uint8array
    key: key,
  }
}

/**
 * 復号化のためのメソッド
 * @param {*} key 鍵
 * @param {*} encryptedData 暗号化されたデータ 
 * @returns 
 */
export async function symmetricDecryptString (key, encryptedData){
  console.log("encryptedData:", encryptedData)
  // Encrypt the data (as EncryptedDataAesCbc256)
  const strData = await aescbc.symmetricDecrypt(key, encryptedData)

  // Convert back from Uint8Array to string
  const str = encodeToString(strData, 'utf8')

  return str
}
