import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home";

const myFirstElement = <h1>Hello React!</h1>

class Car {
  constructor(name) {
    this.brand = name;
  }

  present = ()  => 'I have a ' + this.brand

  getBrand = () => this.brand;
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show = () => this.present() + ', it is a brand new ' + this.model;

  getModel = () => this.model;
}

const mycar = new Model("Chevy", "Equinox");

const carElement = (
  <table>
    <thead>
      <tr>
        <th>Brand</th>
        <th>Model</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{mycar.getBrand()}</td>
        <td>{mycar.getModel()}</td>
      </tr>
    </tbody>
  </table>
);

class ReactCar extends React.Component {
  constructor (props) {
    super(props);
    // Changing a value in the state re-renders it -> EXTREMELY IMPORTANT
    this.state = {
      brand : props.brand,
      model : props.model,
      color : props.color,
      year : props.year
    };
  }

  render () {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color} {this.state.model} from {this.state.year}.
        </p>
      </div>
    );
  }
}

const secondCar = <ReactCar brand='Toyota' model='Corolla' color='red' year='2001'/>;


class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in my Garage?</h1>
      <ReactCar brand='Toyota' color='red'/>
      </div>
    );
  }
}

const garage = <Garage />;

const router = <Router>
  <div>
    {/* <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/interact">Interact</Link>
        </li>
        <li>
          <Link to="/example-run">Example Run</Link>
        </li>
        <li>
          <Link to="/debug">Debug</Link>
        </li>
      </ul>
    </nav> */}

    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/interact" element={<Interact />}/>
      <Route exact path="/examplerun" element={<ExampleRun />}/>
      <Route exact path="/debug" element={<Debug />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </div>
</Router>

// function Home() {
//   return <h2>Home</h2>
// }
function Interact() {
  return <h2>Interact</h2>
}
function ExampleRun() {
  return <h2>Example Run</h2>
}
function Debug() {
  return <h2>Debug</h2>
}
function NotFound() {
  return <h2>Not Found</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(router);