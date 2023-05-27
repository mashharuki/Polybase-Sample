import { Polybase } from "@polybase/client";

// DB用の名前
const nameSpace = "sample-mashharuki4"

const db = new Polybase({
  defaultNamespace: nameSpace,
});

const data2 = await db.collection("City").get();

console.log(`read data2: ${JSON.stringify(data2.toJSON())}`)