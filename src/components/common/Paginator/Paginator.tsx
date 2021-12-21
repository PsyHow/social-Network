import { FC, useState } from 'react';

import style from './Paginator.module.css';

export const Paginator: FC<PropsType> = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  const onePortion = 1;
  const [portionNumber, setPortionNumber] = useState<number>(onePortion);

  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i += onePortion) {
    pages.push(i);
  }
  const portionSize = 10;
  const portionCount = Math.ceil(pagesCount / portionSize);
  const leftPortionPageNumber = (portionNumber - onePortion) * portionSize + onePortion;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={style.paginator}>
      {portionNumber > onePortion && (
        <button
          type="submit"
          onClick={() => {
            setPortionNumber(portionNumber - onePortion);
          }}
        >
          Left
        </button>
      )}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(m => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,react/jsx-key
          <span
            className={currentPage === m ? style.selectedPage : style.pageNumber}
            onClick={() => {
              onPageChanged(m);
            }}
          >
            {m}
          </span>
        ))}

      {portionCount > portionNumber && (
        <button
          type="submit"
          onClick={() => {
            setPortionNumber(portionNumber + onePortion);
          }}
        >
          Right
        </button>
      )}
    </div>
  );
};

// types
type PropsType = {
  totalItemsCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
};
