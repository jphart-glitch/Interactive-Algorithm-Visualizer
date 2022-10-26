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

  handleDragStart = () => {
    let i = this.state.value;
    console.log("Drag of Square #" + i + " has begun!");
  };

  handleDragEnd = () => {
    let i = this.state.value;
    console.log("Drag of Square #" + i + " has ended!");
  };

  handleDragEnter = e => {
    let i = this.state.value;
    console.log("Dragging over Square #" + i + " has begun!");
    e.stopPropagation();
    e.preventDefault();
  };

  // handleDragOver = e => {
  //   let i = this.state.value;
  //   console.log("Dragging over Square #" + i + " is occurring!");
  //   e.stopPropogation()
  //   e.preventDefault()
  // };

  handleDragLeave = e => {
    let i = this.state.value;
    console.log("Dragging over Square #" + i + " has ended!");
    e.stopPropagation();
    e.preventDefault();
  }

  handleDrop = e => {
    let i = this.state.value;
    console.log("Dropped into Square #" + i + "!");
    e.stopPropagation();
    e.preventDefault();
  }

  render() {
    return (
      <button className="square" draggable="true"
      // onDragStart={this.props.onDragStart} 
      // onDragEnd={this.props.onDragEnd} 
      // onDragEnter={this.props.onDragEnter} 
      // onDragLeave={this.props.onDragLeave} 
      // onDrop={this.props.onDrop}
      onDragStart={this.handleDragStart} 
      onDragEnd={this.handleDragEnd} 
      onDragEnter={this.handleDragEnter} 
      // onDragOver={this.handleDragOver}
      onDragLeave={this.handleDragLeave} 
      onDrop={this.handleDrop}
      >
        {this.state.value}
      </button>
    );
  }
}

class FullArray extends React.Component {

  renderSquare(i) {
    return <Square 
      value={i} 
      // onDragStart={this.props.onDragStart(i)} 
      // onDragEnd={this.props.onDragEnd(i)} 
      // onDragEnter={e => this.props.onDragEnter(e, i)} 
      // onDragLeave={e => this.props.onDragLeave(e, i)} 
      // onDrop={e => this.props.onDrop(e, i)}
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
  // handleDragStart(i) {
  //   console.log("Drag of Square #" + i + " has begun!");
  // }

  // handleDragEnd(i) {
  //   console.log("Drag of Square #" + i + " has ended!");
  // }

  // handleDragEnter(e, i) {
  //   console.log("Dragging over Square #" + i + " has begun!");
  //   e.stopPropagation();
  //   e.preventDefault();
  // }

  // handleDragLeave(e, i) {
  //   console.log("Dragging over Square #" + i + " has ended!");
  //   e.stopPropagation();
  //   e.preventDefault();
  //   console.log(e);
  // }

  // handleDrop(e, i) {
  //   console.log("Dropped into Square #" + i + "!");
  //   e.stopPropagation();
  //   e.preventDefault();
  // }

  render() {
    return(
    <div className="simulation">
      <FullArray 
        // onDragStart={this.handleDragStart}
        // onDragEnd={this.handleDragEnd}
        // onDragEnter={this.handleDragEnter} 
        // onDragLeave={this.handleDragLeave}
        // onDrop={this.handleDrop}
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