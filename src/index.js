import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

// const myFirstElement = <h1>Hello React!</h1>

// class Car {
//   constructor(name) {
//     this.brand = name;
//   }

//   present = ()  => 'I have a ' + this.brand

//   getBrand = () => this.brand;
// }

// class Model extends Car {
//   constructor(name, mod) {
//     super(name);
//     this.model = mod;
//   }
//   show = () => this.present() + ', it is a brand new ' + this.model;

//   getModel = () => this.model;
// }

// const mycar = new Model("Chevy", "Equinox");

// const carElement = (
//   <table>
//     <thead>
//       <tr>
//         <th>Brand</th>
//         <th>Model</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>{mycar.getBrand()}</td>
//         <td>{mycar.getModel()}</td>
//       </tr>
//     </tbody>
//   </table>
// );

// class ReactCar extends React.Component {
//   constructor (props) {
//     super(props);
//     // Changing a value in the state re-renders it -> EXTREMELY IMPORTANT
//     this.state = {
//       brand : props.brand,
//       model : props.model,
//       color : props.color,
//       year : props.year
//     };
//   }

//   render () {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color} {this.state.model} from {this.state.year}.
//         </p>
//       </div>
//     );
//   }
// }

// const secondCar = <ReactCar brand='Toyota' model='Corolla' color='red' year='2001'/>;


// class Garage extends React.Component {
//   render() {
//     return (
//       <div>
//       <h1>Who lives in my Garage?</h1>
//       <ReactCar brand='Toyota' color='red'/>
//       </div>
//     );
//   }
// }

// const garage = <Garage />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);