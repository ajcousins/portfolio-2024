/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';

const calculateThumbRows = (divWidth: number, elementWidth: number) => {
  /* Returns an array of arrays of thumbProps */
  const numberInOddRow = Math.floor(divWidth / elementWidth);
  const numberInEvenRow = Math.floor((divWidth - elementWidth / 2) / elementWidth);

  return { numberInOddRow, numberInEvenRow };
};

// const calculateTotalRows = (oddRowLength, evenRowLength, totalLength) => {
//   if (totalLength > (oddRowLength + evenRowLength)) {

//   }
// }

const isOdd = (num: number): boolean => num % 2 === 1;

export const useThumbRows = <T>(
  elements: T[],
  containerWidth: number,
  elementWidth: number
): T[][] => {

  const [thumbRows, setThumbRows] = useState<T[][]>([]);

  useEffect(() => {
    const { numberInOddRow, numberInEvenRow } = calculateThumbRows(containerWidth, elementWidth);
    console.log('numberInOddRow:', numberInOddRow);
    console.log('numberInEvenRow:', numberInEvenRow);

    // const numberOfTotalRows = calculateTotalRows(numberInOddRow, numberInEvenRow, docs.length);

    const allRows = [];
    let currentRowIndex = 0;
    let currentRow = [];
    let counter = 0;

    while(counter < elements.length) {
      if (
        (isOdd(currentRowIndex) && currentRow.length === numberInOddRow)
        || (!isOdd(currentRowIndex) && currentRow.length === numberInEvenRow)
      ) {
        allRows.push(currentRow);
        currentRow = []
        currentRowIndex++
      }
      currentRow.push(elements[counter])
      
      if (counter === elements.length - 1) {
        // last element
        allRows.push(currentRow);
        // currentRow.push(elements[counter])
      }

      counter++;

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
    }
    setThumbRows(allRows)


  }, [containerWidth, elementWidth]);

  return thumbRows
};
