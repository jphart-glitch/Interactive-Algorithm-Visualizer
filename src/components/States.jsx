/* ------------------------------------------------------------------ */
/* States.jsx                                                         */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

export const all_states = {
    MERGESORT: [
        {
          array : [7, 5, 1, 8, 3, 2, 6],
          left : [4],
          right : []
        },
        {
          array : [5, 1, 8, 3, 2, 6],
          left : [4, 7],
          right : []
        },
        {
          array : [1, 8, 3, 2, 6],
          left : [4, 7, 5],
          right : []
        },
        {
          array : [8, 3, 2, 6],
          left : [4, 7, 5, 1],
          right : []
        },
        {
          array : [8, 3, 2, 6],
          left : [4, 7, 1, 5],
          right : []
        },
        {
          array : [8, 3, 2, 6],
          left : [1, 4, 7, 5],
          right : []
        },
        {
          array : [8, 3, 2, 6],
          left : [1, 4, 5, 7],
          right : []
        },
        {
          array : [3, 2, 6],
          left : [1, 4, 5, 7],
          right : [8]
        },
        {
          array : [2, 6],
          left : [1, 4, 5, 7],
          right : [8, 3]
        },
        {
          array : [6],
          left : [1, 4, 5, 7],
          right : [8, 3, 2]
        },
        {
          array : [],
          left : [1, 4, 5, 7],
          right : [8, 3, 2, 6]
        },
        {
          array : [],
          left : [1, 4, 5, 7],
          right : [3, 8, 2, 6]
        },
        {
          array : [],
          left : [1, 4, 5, 7],
          right : [2, 3, 8, 6]
        },
        {
          array : [],
          left : [1, 4, 5, 7],
          right : [2, 3, 6, 8]
        },
        {
          array : [1],
          left : [4, 5, 7],
          right : [2, 3, 6, 8]
        },
        {
          array : [1, 2],
          left : [4, 5, 7],
          right : [3, 6, 8]
        },
        {
          array : [1, 2, 3],
          left : [4, 5, 7],
          right : [6, 8]
        },
        {
          array : [1, 2, 3, 4],
          left : [5, 7],
          right : [6, 8]
        },
        {
          array : [1, 2, 3, 4, 5],
          left : [7],
          right : [6, 8]
        },
        {
          array : [1, 2, 3, 4, 5, 6],
          left : [7],
          right : [8]
        },
        {
          array : [1, 2, 3, 4, 5, 6, 7],
          left : [],
          right : [8]
        },
        {
          array : [1, 2, 3, 4, 5, 6, 7, 8],
          left : [],
          right : []
        }
      ]
};