/* ------------------------------------------------------------------ */
/* States.jsx                                                         */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

export const all_states = {
    MERGESORT: [
        { answer : {
          array : [4, 7, 5, 1, 8, 3, 2, 6],
          left : [],
          right : []
        }, step : "Beginning array." },
        { answer : {
          array : [7, 5, 1, 8, 3, 2, 6],
          left : [4],
          right : []
        }, step : "Move 4 into left-hand merging array." },
        { answer : {
          array : [5, 1, 8, 3, 2, 6],
          left : [4, 7],
          right : []
        }, step : "Move 7 into left-hand merging array." },
        { answer : {
          array : [1, 8, 3, 2, 6],
          left : [4, 7, 5],
          right : []
        }, step : "Move 5 into left-hand merging array." },
        { answer : {
          array : [8, 3, 2, 6],
          left : [4, 7, 5, 1],
          right : []
        }, step : "Move 1 into left-hand merging array." },
        { answer : {
          array : [8, 3, 2, 6],
          left : [4, 7, 1, 5],
          right : []
        }, step : "Since 4 and 7 are already in increasing order, swap 1 and 5." },
        { answer : {
          array : [8, 3, 2, 6],
          left : [1, 4, 7, 5],
          right : []
        }, step : "Begin \"merging\" left half and right half of array by moving 1 to front of merging array." },
        { answer : {
          array : [8, 3, 2, 6],
          left : [1, 4, 5, 7],
          right : []
        }, step : "Move 5 to index 2, making all elements in the left-hand merging array in their correct places." },
        { answer : {
          array : [3, 2, 6],
          left : [1, 4, 5, 7],
          right : [8]
        }, step : "Move 8 into right-hand merging array." },
        { answer : {
          array : [2, 6],
          left : [1, 4, 5, 7],
          right : [8, 3]
        }, step : "Move 3 into right-hand merging array." },
        { answer : {
          array : [6],
          left : [1, 4, 5, 7],
          right : [8, 3, 2]
        }, step : "Move 2 into right-hand merging array." },
        { answer : {
          array : [],
          left : [1, 4, 5, 7],
          right : [8, 3, 2, 6]
        }, step : "Move 6 into right-hand merging array." },
        { answer : {
          array : [],
          left : [1, 4, 5, 7],
          right : [3, 8, 2, 6]
        }, step : "Swap 3 and 8." },
        { answer : {
          array : [],
          left : [1, 4, 5, 7],
          right : [2, 3, 8, 6]
        }, step : "Since 2 and 6 are already in increasing order, begin \"merging\" left half and right half of array by moving 2 to front of merging array." },
        { answer : {
          array : [],
          left : [1, 4, 5, 7],
          right : [2, 3, 6, 8]
        }, step : "Move 6 to index 2, making all elements in the right-hand merging array in their correct places." },
        { answer : {
          array : [1],
          left : [4, 5, 7],
          right : [2, 3, 6, 8]
        }, step : "Begin merging left- and right-hand arrays, comparing 1 and 2 and placing the lesser value (1) into the destination array." },
        { answer : {
          array : [1, 2],
          left : [4, 5, 7],
          right : [3, 6, 8]
        }, step : "Compare 4 and 2 and place the lesser value (2) into the destination array." },
        { answer : {
          array : [1, 2, 3],
          left : [4, 5, 7],
          right : [6, 8]
        }, step : "Compare 4 and 3 and place the lesser value (3) into the destination array." },
        { answer : {
          array : [1, 2, 3, 4],
          left : [5, 7],
          right : [6, 8]
        }, step : "Compare 4 and 6 and place the lesser value (4) into the destination array." },
        { answer : {
          array : [1, 2, 3, 4, 5],
          left : [7],
          right : [6, 8]
        }, step : "Compare 5 and 6 and place the lesser value (5) into the destination array." },
        { answer : {
          array : [1, 2, 3, 4, 5, 6],
          left : [7],
          right : [8]
        }, step : "Compare 7 and 6 and place the lesser value (6) into the destination array." },
        { answer : {
          array : [1, 2, 3, 4, 5, 6, 7],
          left : [],
          right : [8]
        }, step : "Compare 7 and 8 and place the lesser value (7) into the destination array." },
        { answer : {
          array : [1, 2, 3, 4, 5, 6, 7, 8],
          left : [],
          right : []
        }, step : "Place the last value (8) into the destination array, completing our sort!" },
      ],
      INSERTIONSORT : [
        { answer : {
          array : [4, 7, 5, 1, 8, 3, 2, 6]
        }, step : "Beginning array." },
        { answer : {
          array : [4, 5, 7, 1, 8, 3, 2, 6]
        }, step : "Swap 5 and 7." },
        { answer : {
          array : [4, 5, 1, 7, 8, 3, 2, 6]
        }, step : "Swap 7 and 1." },
        { answer : {
          array : [4, 1, 5, 7, 8, 3, 2, 6]
        }, step : "Swap 5 and 1." },
        { answer : {
          array : [1, 4, 5, 7, 8, 3, 2, 6]
        }, step : "Swap 4 and 1." },
        { answer : {
          array : [1, 4, 5, 7, 3, 8, 2, 6]
        }, step : "Swap 8 and 3." },
        { answer : {
          array : [1, 4, 5, 3, 7, 8, 2, 6]
        }, step : "Swap 7 and 3." },
        { answer : {
          array : [1, 4, 3, 5, 7, 8, 2, 6]
        }, step : "Swap 5 and 3." },
        { answer : {
          array : [1, 3, 4, 5, 7, 8, 2, 6]
        }, step : "Swap 4 and 3." },
        { answer : {
          array : [1, 3, 4, 5, 7, 2, 8, 6]
        }, step : "Swap 8 and 2." },
        { answer : {
          array : [1, 3, 4, 5, 2, 7, 8, 6]
        }, step : "Swap 7 and 2." },
        { answer : {
          array : [1, 3, 4, 2, 5, 7, 8, 6]
        }, step : "Swap 5 and 2." },
        { answer : {
          array : [1, 3, 2, 4, 5, 7, 8, 6]
        }, step : "Swap 4 and 2." },
        { answer : {
          array : [1, 2, 3, 4, 5, 7, 8, 6]
        }, step : "Swap 3 and 2." },
        { answer : {
          array : [1, 2, 3, 4, 5, 7, 6, 8]
        }, step : "Swap 8 and 6." },
        { answer : {
          array : [1, 2, 3, 4, 5, 6, 7, 8]
        }, step : "Swap 7 and 6, completing our sort!" },
      ],
      SELECTIONSORT : [
        { answer : {
          array : [4, 7, 5, 1, 8, 3, 2, 6],
          temp : []
        }, step : "Beginning array."},
        { answer : {
          array : [7, 5, 1, 8, 3, 2, 6],
          temp : [4]
        }, step : "Move 4 into temp array." },
        { answer : {
          array : [1, 7, 5, 8, 3, 2, 6],
          temp : [4]
        }, step : "Move 1 into index 0." },
        { answer : {
          array : [1, 7, 5, 4, 8, 3, 2, 6],
          temp : []
        }, step : "Move 4 into index 3, completing the swap." },
        { answer : {
          array : [1, 5, 4, 8, 3, 2, 6],
          temp : [7]
        }, step : "Move 7 into temp array." },
        { answer : {
          array : [1, 2, 5, 4, 8, 3, 6],
          temp : [7]
        }, step : "Move 2 into index 1." },
        { answer : {
          array : [1, 2, 5, 4, 8, 3, 7, 6],
          temp : []
        }, step : "Move 7 into index 6, completing the swap." },
        { answer : {
          array : [1, 2, 4, 8, 3, 7, 6],
          temp : [5]
        }, step : "Move 5 into temp array." },
        { answer: {
          array : [1, 2, 3, 4, 8, 7, 6],
          temp : [5] 
        }, step : "Move 3 into index 2."},
        { answer : {
          array : [1, 2, 3, 4, 8, 5, 7, 6],
          temp : []
        }, step : "Move 5 into index 5, completing the swap." },
        { answer : {
          array : [1, 2, 3, 4, 5, 7, 6],
          temp : [8]
        }, step : "Move 8 into temp array." },
        { answer : {
          array : [1, 2, 3, 4, 5, 8, 7, 6],
          temp : []
        }, step : "Since 5 is now already in place, move 8 into index 5, completing the swap." },
        { answer : {
          array : [1, 2, 3, 4, 5, 7, 6],
          temp : [8]
        }, step : "Move 8 into temp array." },
        { answer : {
          array : [1, 2, 3, 4, 5, 6, 7],
          temp : [8]
        }, step : "Move 6 into index 5." },
        { answer : {
          array : [1, 2, 3, 4, 5, 6, 7, 8],
          temp : []
        }, step : "Move 8 into index 7, completing the swap. Since 8 is also now in place, we are done!" }
      ],
      STACKS : [
        { answer : {
          input : [1, 2, 3, 4, 5, 6, 7, 8],
          stack : [],
          output : []
        }, step : "Beginning state." },
        { answer : {
          input : [2, 3, 4, 5, 6, 7, 8],
          stack : [1],
          output : []
        }, step : "Push 1." },
        { answer : {
          input : [3, 4, 5, 6, 7, 8],
          stack : [2, 1],
          output : []
        }, step : "Push 2." },
        { answer : {
          input : [3, 4, 5, 6, 7, 8],
          stack : [1],
          output : [2]
        }, step : "Pop." },
        { answer : {
          input : [3, 5, 6, 7, 8],
          stack : [4, 1],
          output : [2]
        }, step : "Push 4." },
        { answer : {
          input : [3, 5, 6, 7, 8],
          stack : [1],
          output : [2, 4]
        }, step : "Pop." },
        { answer : {
          input : [3, 5, 6, 7],
          stack : [8, 1],
          output : [2, 4]
        }, step : "Push 8." },
        { answer : {
          input : [3, 5, 7],
          stack : [6, 8, 1],
          output : [2, 4]
        }, step : "Push 6." },
        { answer : {
          input : [3, 5, 7],
          stack : [8, 1],
          output : [2, 4, 6]
        }, step : "Pop." },
        { answer : {
          input : [3, 5, 7],
          stack : [1],
          output : [2, 4, 6, 8]
        }, step : "Pop." },
        { answer : {
          input : [3, 7],
          stack : [5, 1],
          output : [2, 4, 6, 8]
        }, step : "Push 5." },
        { answer : {
          input : [3, 7],
          stack : [1],
          output : [2, 4, 6, 8, 5]
        }, step : "Pop." },
        { answer : {
          input : [3, 7],
          stack : [],
          output : [2, 4, 6, 8, 5, 1]
        }, step : "Pop." },
        { answer : {
          input : [3],
          stack : [7],
          output : [2, 4, 6, 8, 5, 1]
        }, step : "Push 7." },
        { answer : {
          input : [],
          stack : [3, 7],
          output : [2, 4, 6, 8, 5, 1]
        }, step : "Push 3." },
        { answer : {
          input : [],
          stack : [7],
          output : [2, 4, 6, 8, 5, 1, 3]
        }, step : "Pop." },
        { answer : {
          input : [],
          stack : [],
          output : [2, 4, 6, 8, 5, 1, 3, 7]
        }, step : "Pop." }
      ],
      QUEUES : [
        { answer : {
          input : [1, 2, 3, 4, 5, 6, 7, 8],
          stack : [],
          output : []
        }, step : "Beginning state." },
        { answer : {
          input : [2, 3, 4, 5, 6, 7, 8],
          stack : [1],
          output : []
        }, step : "Enqueue 1." },
        { answer : {
          input : [3, 4, 5, 6, 7, 8],
          stack : [2, 1],
          output : []
        }, step : "Enqueue 2." },
        { answer : {
          input : [3, 4, 5, 6, 7, 8],
          stack : [2],
          output : [1]
        }, step : "Dequeue." },
        { answer : {
          input : [3, 5, 6, 7, 8],
          stack : [4, 2],
          output : [1]
        }, step : "Enqueue 4." },
        { answer : {
          input : [3, 5, 6, 7, 8],
          stack : [4],
          output : [1, 2]
        }, step : "Dequeue." },
        { answer : {
          input : [3, 5, 6, 7],
          stack : [8, 4],
          output : [1, 2]
        }, step : "Enqueue 8." },
        { answer : {
          input : [3, 5, 7],
          stack : [6, 8, 4],
          output : [1, 2]
        }, step : "Enqueue 6." },
        { answer : {
          input : [3, 5, 7],
          stack : [6, 8],
          output : [1, 2, 4]
        }, step : "Dequeue." },
        { answer : {
          input : [3, 5, 7],
          stack : [6],
          output : [1, 2, 4, 8]
        }, step : "Dequeue." },
        { answer : {
          input : [3, 7],
          stack : [5, 6],
          output : [1, 2, 4, 8]
        }, step : "Enqueue 5." },
        { answer : {
          input : [3, 7],
          stack : [5],
          output : [1, 2, 4, 8, 6]
        }, step : "Dequeue." },
        { answer : {
          input : [3, 7],
          stack : [],
          output : [1, 2, 4, 8, 6, 5]
        }, step : "Dequeue." },
        { answer : {
          input : [3],
          stack : [7],
          output : [1, 2, 4, 8, 6, 5]
        }, step : "Enqueue 7." },
        { answer : {
          input : [],
          stack : [3, 7],
          output : [1, 2, 4, 8, 6, 5]
        }, step : "Enqueue 3." },
        { answer : {
          input : [],
          stack : [3],
          output : [1, 2, 4, 8, 6, 5, 7]
        }, step : "Dequeue." },
        { answer : {
          input : [],
          stack : [],
          output : [1, 2, 4, 8, 6, 5, 7, 3]
        }, step : "Dequeue." }
      ],
      PRIORITYQUEUES : [
        { answer : {
          input : [1, 2, 3, 4, 5, 6, 7, 8],
          stack : [],
          output : []
        }, step : "Beginning state." },
        { answer : {
          input : [2, 3, 4, 5, 6, 7, 8],
          stack : [1],
          output : []
        }, step : "Enqueue 1." },
        { answer : {
          input : [3, 4, 5, 6, 7, 8],
          stack : [2, 1],
          output : []
        }, step : "Enqueue 2." },
        { answer : {
          input : [3, 4, 5, 6, 7, 8],
          stack : [2],
          output : [1]
        }, step : "Extract minimum." },
        { answer : {
          input : [3, 5, 6, 7, 8],
          stack : [4, 2],
          output : [1]
        }, step : "Enqueue 4." },
        { answer : {
          input : [3, 5, 6, 7, 8],
          stack : [4],
          output : [1, 2]
        }, step : "Extract minimum." },
        { answer : {
          input : [3, 5, 6, 7],
          stack : [8, 4],
          output : [1, 2]
        }, step : "Enqueue 8." },
        { answer : {
          input : [3, 5, 7],
          stack : [6, 8, 4],
          output : [1, 2]
        }, step : "Enqueue 6." },
        { answer : {
          input : [3, 5, 7],
          stack : [6, 8],
          output : [1, 2, 4]
        }, step : "Extract minimum." },
        { answer : {
          input : [3, 5, 7],
          stack : [8],
          output : [1, 2, 4, 6]
        }, step : "Extract minimum." },
        { answer : {
          input : [3, 7],
          stack : [5, 8],
          output : [1, 2, 4, 6]
        }, step : "Enqueue 5." },
        { answer : {
          input : [3, 7],
          stack : [8],
          output : [1, 2, 4, 6, 5]
        }, step : "Extract minimum." },
        { answer : {
          input : [3, 7],
          stack : [],
          output : [1, 2, 4, 6, 5, 8]
        }, step : "Extract minimum." },
        { answer : {
          input : [3],
          stack : [7],
          output : [1, 2, 4, 6, 5, 8]
        }, step : "Enqueue 7." },
        { answer : {
          input : [],
          stack : [3, 7],
          output : [1, 2, 4, 6, 5, 8]
        }, step : "Enqueue 3." },
        { answer : {
          input : [],
          stack : [7],
          output : [1, 2, 4, 6, 5, 8, 3]
        }, step : "Extract minimum." },
        { answer : {
          input : [],
          stack : [],
          output : [1, 2, 4, 6, 5, 8, 3, 7]
        }, step : "Extract minimum." }
      ],
      TWOTHREETREES : [
        { answer : {
        root : [],
        levelOneLeftOne : [],
        levelOneLeftTwo : [],
        levelOneLeftThree : [],
        levelTwoLeftOne : [],
        levelTwoLeftTwo : [],
        levelTwoLeftThree : [],
        levelTwoLeftFour : [],
        levelTwoLeftFive : [],
        levelTwoLeftSix : [],
        input : [50, 62, 69, 43, 31, 25, 15, 85, 99, 108]
        }, step : "Beginning state." },
        { answer : {
          root : [50],
          levelOneLeftOne : [],
          levelOneLeftTwo : [],
          levelOneLeftThree : [],
          levelTwoLeftOne : [],
          levelTwoLeftTwo : [],
          levelTwoLeftThree : [],
          levelTwoLeftFour : [],
          levelTwoLeftFive : [],
          levelTwoLeftSix : [],
          input : [62, 69, 43, 31, 25, 15, 85, 99, 108]
          }, step : "Insert 50 at root node." }
      ]
};