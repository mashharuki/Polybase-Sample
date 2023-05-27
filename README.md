# Polybase-Sample

Polybase-Sample

## Polybase について

Polybase は、zk-STARKs で構築された、プライバシーを保護する分散型データベースです。zk-rollup とネイティブインデックスを組み合わせることで、分散型データベースルール、高速クエリ、スケーラブルライトを可能にしています。

Polybase は NoSQL のようなデータベースで、検証ルールは JavaScript のような言語で記述されています。SDK は Firestore や Supabase に似ている。

Polybase は、Web3 のパーミッションが組み込まれているので、Firebase や Postgres、Supabase のような集中型データベースを使うよりも優れています。行レベルのトークンゲーティングやウォレットベースのパーミッションを行うことができます。さらに、ウォレットを使ってデータを暗号化して「自己主権データ」にしたり、スマートコレクションから Polybase に検証的に問い合わせることができます（近日公開予定）。

Polybase がオンチェーンにデータを保存するよりも優れているのは、オンチェーンのストレージよりも 1000 倍から 100 万倍安いからです。例えば、Ethereum で 1MB を保存すると 10,000 円程度かかります。

### Get Started で作った DB に登録したデータを取得したデータ

```json
read data: {"data":{"country":"USA","id":"new-york","name":"New York"},"block":{"hash":"0x0000000000000000000000000000000000000000000000000000000000000000"}}
```

### 参考文献

1. [Polybase Docs](https://polybase.xyz/docs/introduction)
2. [Polybase Explorer](https://explorer.testnet.polybase.xyz/)
3. [Sample Dapp Social](https://social.testnet.polybase.xyz/)
4. [【GitHub】Sample Dapp Social](https://github.com/polybase/social)
5. [【GitHub】Sample Chat Dapp](https://github.com/polybase/chat)
6. [Collections](https://polybase.xyz/docs/collections)
7. [Authentication](https://codesandbox.io/s/polybase-client-auth-vqo2ui?file=/index.html)
8. [React hooks for Polybase.](https://polybase.xyz/docs/react)
9. []()
