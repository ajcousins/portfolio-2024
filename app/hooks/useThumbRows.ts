import { useEffect, useState } from 'react';

const calculateThumbRows = (divWidth: number, elementWidth: number) => {
  let numberInEvenRow = Math.floor(
    (divWidth - elementWidth / 2) / elementWidth
  );
  let numberInOddRow = Math.floor(divWidth / elementWidth);
  if (numberInOddRow === numberInEvenRow && numberInEvenRow !== 1) {
    numberInOddRow = numberInEvenRow - 1;
  }

  if (numberInEvenRow > numberInOddRow) {
    const temp = numberInEvenRow;
    numberInEvenRow = numberInOddRow;
    numberInOddRow = temp;
  }

  return { numberInOddRow, numberInEvenRow };
};

const isOdd = (num: number): boolean => num % 2 === 1;

export const useThumbRows = <T>(
  elements: T[],
  containerWidth: number,
  elementWidth: number
): T[][] => {
  const [thumbRows, setThumbRows] = useState<T[][]>([]);

  useEffect(() => {
    /**
     * If current row is odd and matches max number allowed in odd rows
     *    then push currentRow to allRows
     *    increment currentRowIndex
     *    clear currentRow
     * If current row is even and matches max number allowed in even rows
     *    then push currentRow to allRows
     *    increment currentRowIndex
     *    clear currentRow
     * Put current element in current row
     * Increment counter
     */

    const { numberInOddRow, numberInEvenRow } = calculateThumbRows(
      containerWidth,
      elementWidth
    );
    const allRows = [];
    let currentRowIndex = 0;
    let currentRow = [];
    let counter = 0;

    while (counter < elements.length) {
      if (
        (isOdd(currentRowIndex) && currentRow.length === numberInOddRow) ||
        (!isOdd(currentRowIndex) && currentRow.length === numberInEvenRow)
      ) {
        allRows.push(currentRow);
        currentRow = [];
        currentRowIndex++;
      }
      currentRow.push(elements[counter]);

      if (counter === elements.length - 1) {
        allRows.push(currentRow);
      }

      counter++;
    }
    setThumbRows(allRows);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerWidth, elementWidth]);

  return thumbRows;
};
