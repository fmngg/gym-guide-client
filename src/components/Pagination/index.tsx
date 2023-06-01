import { FC, useEffect, useState } from 'react';
import { MdOutlineArrowLeft, MdOutlineArrowRight } from 'react-icons/md';
import styles from './Pagination.module.scss';

type Props = {
  currentPage: number;
  setCurrentPage: any;
  totalCount: number;
};

const Pagination: FC<Props> = ({ currentPage, setCurrentPage, totalCount }) => {
  const [isActiveBack, setIsActiveBack] = useState(true);
  const [isActiveNext, setIsActiveNext] = useState(true);

  useEffect(() => {
    if (currentPage === 1) {
      setIsActiveBack(false);
    } else {
      setIsActiveBack(true);
    }

    if (currentPage * 9 > totalCount) {
      setIsActiveNext(false);
    } else {
      setIsActiveNext(true);
    }
  }, [currentPage]);

  const handleClickBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClickNext = () => {
    if (currentPage * 9 < totalCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <MdOutlineArrowLeft
        className={isActiveBack ? styles.arrow : styles.disabled}
        onClick={handleClickBack}
      />
      <p>{currentPage}</p>
      <MdOutlineArrowRight
        className={isActiveNext ? styles.arrow : styles.disabled}
        onClick={handleClickNext}
      />
    </div>
  );
};

export default Pagination;
