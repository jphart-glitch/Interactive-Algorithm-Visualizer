/* ------------------------------------------------------------------ */
/* array.js                                                           */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

'use strict';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

class Array extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render() {
    return (
    <div>
      <div>
        {this.renderSquare(0)}
      </div>
    </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return <Array />
  }
}

/* ------------------------------------------------------------------ */

/* Load into container */
const domContainer = document.querySelector('#array_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<Array />);