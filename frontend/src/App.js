import { Polybase } from "@polybase/client";
import { PolybaseProvider, useDocument, usePolybase } from "@polybase/react";
import './App.css';
import Spinner from './common/Spinner';
import logo from './logo.svg';

// DB用の名前
const nameSpace = "sample-mashharuki4"
// Polybaseを使うための設定
const polybase = new Polybase({
  defaultNamespace: nameSpace,
});

/**
 * App Component
 * @returns 
 */
function App() {
  // Polybaseを使うための準備
  const polybase = usePolybase();
  // DBから情報を取得する。
  const { 
    data, 
    error, 
    loading 
  } = useDocument(polybase.collection("City"));

  /**
   * DBの取得結果を表形式で出力
   */
  const listItems = (data !== null) && data.data.map((item, i) =>
    <ul>
      <li>name: {item.data.name}</li>
      <li>country: {item.data.country}</li>
    </ul>
  );

  return (
    <div className="App">
      {loading ? (
        <Spinner/>
      ) : (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {listItems}
        </header>
      )}
    </div>
  );
}

/**
 * Root Component
 * @returns 
 */
function Root() {
  return (
    <PolybaseProvider polybase={polybase}>
      <App/>
    </PolybaseProvider>
  );
}

export default Root;
