import React from 'react';
import { connect } from 'react-redux';

class TableBody extends React.Component {
  render() {
    const rows = this.props.state;
    return (
      <tbody>
      {rows.map((row) => {
        return (
          <tr key={row.no}>
            <td className="mdl-data-table__cell--non-numeric">
              {row.reg_date}
            </td>
            <td className="mdl-data-table__cell--non-numeric user_name">
              {row.user_name}
            </td>
            <td className="mdl-data-table__cell--non-numeric">
              <a href={row.url} target="_blank">{row.title}</a>
            </td>
          </tr>
        );
      })}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.TableData
  };
};

export default connect(mapStateToProps)(TableBody);
