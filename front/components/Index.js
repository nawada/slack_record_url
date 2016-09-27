import React from 'react';
import { connect } from 'react-redux';
import { tableData, FETCH_TABLE_DATA } from '../actions/Actions';
import TableBody from './TableBody';

class Index extends React.Component {
  componentWillMount() {
    const {dispatch} = this.props;
    dispatch(tableData(FETCH_TABLE_DATA, []));
  }

  render() {
    return (
      <div className="mdl-grid">
        <div id="table-pos" className="mdl-cell mdl-cell--12-col">
          <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
            <tr>
              <th className="mdl-data-table__cell--non-numeric">
                投稿日時
              </th>
              <th className="mdl-data-table__cell--non-numeric">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                  <label className="mdl-textfield__label" htmlFor="userName">投稿者</label>
                  <input className="mdl-textfield__input" type="text" id="userName" onKeyUp={this.searchUserName}/>
                </div>
              </th>
              <th className="mdl-data-table__cell--non-numeric">
                タイトル
              </th>
            </tr>
            </thead>
            <TableBody/>
          </table>
        </div>
      </div>
    );
  }

  searchUserName(e) {
    const inputValue = e.target.value.toLowerCase();
    console.log(inputValue);
    const nodes = document.querySelectorAll('.user_name');
    const filteredNodes = Array.prototype.forEach.call(nodes, (node) => {
      if (node.textContent.toLowerCase().includes(inputValue)) {
        node.parentNode.classList.remove('hide');
      } else {
        node.parentNode.classList.add('hide');
      }
    });
    console.log(filteredNodes);
  };
}

const mapStateToProps = (state) => {
  return {
    state: state.TableData
  };
};

export default connect(mapStateToProps)(Index);
