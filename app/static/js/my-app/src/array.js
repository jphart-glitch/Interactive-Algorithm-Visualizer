/* ------------------------------------------------------------------ */
/* array.js                                                           */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

'use strict';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : props.value
    };
  }

  render() {
    return (
      <button className="square" draggable="true">
        {this.state.value}
      </button>
    );
  }
  // handleDragStart = event => {
  //   // console.log("Drag of Square #" + this.props.value + " has begun!");
  // }

  // handleDragEnd = event => {
  //   // console.log("Drag of Square #" + this.props.value + " has ended!");
  // }

  // handleDragEnter = event => {
  //   // console.log("Dragging over Square #" + this.props.value + " has begun!");
  //   event.stopPropagation();
  //   event.preventDefault();
  // }

  // handleDragLeave = event => {
  //   // console.log("Dragging over Square #" + this.props.value + " has ended!");
  //   event.stopPropagation();
  //   event.preventDefault();
  // }
  // onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd}
  // onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave}
}

class FullArray extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render() {
    return (
    <div>
      {this.renderSquare(0)}
      {this.renderSquare(1)}
      {this.renderSquare(2)}
      {this.renderSquare(3)}
      {this.renderSquare(4)}
      {this.renderSquare(5)}
      {this.renderSquare(6)}
      {this.renderSquare(7)}
    </div>
    );
  }
}

class Simulation extends React.Component {
  render() {
    return(
    <div className="simulation">
      <FullArray />
    </div>
    );
  }
}

/* ------------------------------------------------------------------ */

/* Load into container */
const domContainer = document.querySelector('#array_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<Simulation />);