// import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <h1 style={{color: 'red'}}>Daniel Peter-Salawu</h1>
//       <h5 style={{color: 'orange'}}>Learn React!</h5>
//     </div>
//   );
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1 style={{color: 'red'}}>Daniel Peter-Salawu</h1>
//         <h5 style={{color: 'orange'}}>Learn React!</h5>
//       </div>
//     );
//   }
// };

// const App = () => {
//   <h1>Daniel Peter-Salawu</h1>
// }

// const App = () => {

//   const obj = {
//     name: 'Daniel Peter-Salawu',
//     age: 30,
//     migratedToCanada: 1995
//   }

//   const currentYear = new Date().getFullYear();
//   const isBornInCanada = currentYear - obj.age >= obj.migratedToCanada;

//   return (
//     <div style={{color: 'green', textAlign: 'center'}}>
//       <h3>Name: {obj.name}</h3>
//       <h3>Is born in Canada: {isBornInCanada.toString()}</h3>
//       <h3>Age: {obj.age}</h3>
//       <h3>Year: {obj.migratedToCanada}</h3>
//     </div>
//   );
// }

const App = () => {
  const arr = [
    {
      name: 'Dan',
      age: 10,
      city: 'Winnipeg'
    },
    {
      name: 'Man',
      age: 20,
      city: 'Winnipeg'
    },
    {
      name: 'Fan',
      age: 30,
      city: 'Winnipeg'
    },
    {
      name: 'Can',
      age: 40,
      city: 'Winnipeg'
    },
    {
      name: 'Wan',
      age: 50,
      city: 'Winnipeg'
    }
  ];

  return (
    <div>
      <h3>
        List of the students are:
      </h3>
      <h3>
        {arr.map(item => (
           <li>Name: {item.name}, Age: {item.age}, City: {item.city}</li>
        ))}
      </h3>
    </div>
  )
}

export default App;
