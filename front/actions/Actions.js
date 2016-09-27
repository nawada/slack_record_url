export const FETCH_TABLE_DATA = 'FETCH_TABLE_DATA';
export const APPLY_FETCH_TABLE_DATA = 'APPLY_FETCH_TABLE_DATA';

export function tableData(type, data) {
  console.log('TableData: ', type, data);
  return {
    type, data
  };
}
