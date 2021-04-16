import React from 'react';
import styles from './index.less';
import MonacoEditor from "../components/MonacoEditor";

export default function Page() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <MonacoEditor
        language='javascript'
        value={`alert(2);

function foo() {}`}
      />
    </div>
  );
}
