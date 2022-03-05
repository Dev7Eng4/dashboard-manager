import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Table } from 'react-bootstrap';

import './index.scss';

interface Column {
  key: string;
  value: string | React.ReactNode;
}

type Props = {
  columns: Column[];
  rows: Record<string, string | React.ReactNode>[];
  isSort?: boolean;
  isPagination?: boolean;
};

const TableComponent = (props: Props) => {
  const { columns, rows, isSort, isPagination } = props;

  return (
    <div className='table-container'>
      <Table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {columns.map((column, idx) => (
                <td key={`${column.key} ${idx}`}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>

      {isPagination && (
        <ul className='pagination'>
          <li className='page-item'>
            <FontAwesomeIcon icon={['fas', 'angle-double-left']} />
          </li>
          <li className='page-item'>
            <FontAwesomeIcon icon={['fas', 'angle-left']} />
          </li>
          <li className='page-item'>1</li>
          <li className='page-item'>2</li>
          <li className='page-item'>79</li>
          <li className='page-item'>
            <FontAwesomeIcon icon={['fas', 'angle-right']} />
          </li>
          <li className='page-item'>
            <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
          </li>
        </ul>
      )}
    </div>
  );
};

export default TableComponent;
