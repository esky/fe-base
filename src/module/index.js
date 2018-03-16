import React from 'react';
import { num, changeNum } from './a';
export default class Page extends React.Component {
  render() {
    // ES 模块输出num引用，只读
    return (
      <div>
        <p>num: {num}</p>
        <button
          onClick={e => {
            changeNum();
            this.forceUpdate();
          }}
        >
          changeNum
        </button>
      </div>
    );
  }
}
