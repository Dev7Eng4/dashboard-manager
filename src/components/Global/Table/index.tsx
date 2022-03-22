import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useMemo } from 'react';
import { Table } from 'react-bootstrap';

// import './index.scss';

interface Column {
  key: string;
  value: string | React.ReactNode;
}

type Props = {
  columns: Column[];
  rows: Record<string, string | React.ReactNode>[];
  isSort?: boolean;
  isPagination?: boolean;
  pageActive?: number;
  rowsPerPage?: number;
  count?: number;
  onPageChange?: (page: number) => void;
  onRowsPerPageChange?: () => void;
};

const numbers = (length: number) =>
  Array.from({ length: length }, (_: unknown, i: number) => i + 1);

const TableComponent = (props: Props) => {
  const {
    columns,
    rows,
    isSort,
    isPagination,
    pageActive = 1,
    rowsPerPage = 10,
    count = 0,
    onPageChange,
    onRowsPerPageChange,
  } = props;

  const pages = useMemo(
    () => Math.ceil(count / rowsPerPage),
    [count, rowsPerPage]
  );

  const getNumbersForPage = useCallback(() => {
    console.log('pages', pages);
    if (pages <= 5) {
      return numbers(pages);
    }
    if (pageActive <= 3) {
      return numbers(5);
    }

    if (pages - pageActive <= 3) {
      console.log(
        'a',
        numbers(5).map((i) => i + pages - 5)
      );
      return numbers(5).map((i) => i + pages - 5);
    }
    return [
      pageActive - 2,
      pageActive - 1,
      pageActive,
      pageActive + 1,
      pageActive + 2,
    ];
  }, [count, rowsPerPage, pageActive]);

  const handlePageChange = (page: number) => {
    onPageChange && onPageChange(page);
  };

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
          <li
            className={`page-item ${pageActive === 1 ? 'disabled' : ''}`}
            onClick={() => pageActive !== 1 && handlePageChange(1)}
          >
            <FontAwesomeIcon icon={['fas', 'angle-double-left']} />
          </li>
          <li
            className={`page-item ${pageActive === 1 ? 'disabled' : ''}`}
            onClick={() => pageActive !== 1 && handlePageChange(pageActive - 1)}
          >
            <FontAwesomeIcon icon={['fas', 'angle-left']} />
          </li>
          {getNumbersForPage().map((i) => (
            <li
              key={i}
              className={`page-item ${pageActive === i ? 'active' : ''}`}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </li>
          ))}
          <li
            className={`page-item ${pageActive === pages ? 'disabled' : ''}`}
            onClick={() =>
              pageActive !== pages && handlePageChange(pageActive + 1)
            }
          >
            <FontAwesomeIcon icon={['fas', 'angle-right']} />
          </li>
          <li
            className={`page-item ${pageActive === pages ? 'disabled' : ''}`}
            onClick={() => pageActive !== pages && handlePageChange(pages)}
          >
            <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
          </li>
        </ul>
      )}
    </div>
  );
};

export default TableComponent;
