/* ------------------------------------------------------------------ */
/* array.js                                                           */
/* Author: John Hart                                                  */
/* ------------------------------------------------------------------ */

'use strict';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : props.value,
      dragging : false,
      entered : false
    };
  }

  render() {
    return (
      <button className="square" draggable="true"
      onDragStart={this.props.onDragStart} onDragEnd={this.props.onDragEnd} 
      onDragEnter={this.props.onDragEnter} onDragLeave={this.props.onDragLeave}>
        {this.state.value}
      </button>
    );
  }
}

class FullArray extends React.Component {
  renderSquare(i) {
    return <Square 
      value={i} 
      onDragStart={() => this.props.onDragStart(i)} 
      onDragEnd={() => this.props.onDragEnd(i)} 
      onDragEnter={event => this.props.onDragEnter(event, i)} 
      onDragLeave={event => this.props.onDragLeave(event, i)}
    />;
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
  handleDragStart(i) {
    console.log("Drag of Square #" + i + " has begun!");
  }

  handleDragEnd(i) {
    console.log("Drag of Square #" + i + " has ended!");
  }

  handleDragEnter(event, i) {
    console.log("Dragging over Square #" + i + " has begun!");
    event.stopPropagation();
    event.preventDefault();
  }

  handleDragLeave(event, i) {
    console.log("Dragging over Square #" + i + " has ended!");
    event.stopPropagation();
    event.preventDefault();
  }

  render() {
    return(
    <div className="simulation">
      <FullArray 
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
        onDragEnter={this.handleDragEnter} 
        onDragLeave={this.handleDragLeave}
      />
    </div>
    );
  }
}

/* ------------------------------------------------------------------ */

/* Load into container */
const domContainer = document.querySelector('#array_container');
const root = ReactDOM.createRoot(domContainer);
root.render(<Simulation />);