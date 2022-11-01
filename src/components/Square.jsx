/* ------------------------------------------------------------------ */
/* Square.jsx                                                         */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

import React from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : props.value,
            dragging : false,
            entered : false
        };
    }
}

export default Square;