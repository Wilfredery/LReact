// function App() {
//   //JSX -> React.createElement('p', null, 'Hello, World!');
//   return <p>Hello, {'World!'}</p>
// }

// export default App;
//  const nombre = 'Will';
// function App() {

//   return <p>hello, {nombre}</p>
// }

// export default App;

// function App() {
//   const nombre = 'Will';
//   if (nombre) {
//     return <p>Hello, {nombre}!</p>;
//   }
//   return <p>Hello, World!</p>;
// }

// export default App;

// import Titulo from "./Titulo";

// function App() {
//   return <Titulo></Titulo>;
//   // return <Titulo/>;
// }

// export default App;

// import Card, { CardBody } from "./components/Card";
// import Lists from "./components/Lists";
// function App() {
//   const list: string[] = ["Hola", "Hello"];
//   //const data = ["Spiderman", "Batman", "Superman", "Wonder Woman", "The Flash"];
//   const handleSelect = (elemento: string) => {
//     console.log("handleSelect: ", elemento);
//   };
//   // const handleSelect2 = (elemento: string) => {
//   //   console.log("handleSelect2: ", elemento);
//   // };

//   return (
//     <Card>
//       <CardBody title="Hola" text="Mundo" />
//       {list.length !== 0 ? (
//         <Lists data={list} onSelect={handleSelect} />
//       ) : (
//         "No hay elementos."
//       )}
//       {/* <Lists data={data} onSelect={handleSelect2} /> */}
//     </Card>
//   );
// }

// export default App;

// import { useState } from "react";
// import Button from "./components/Button";
// function App() {
//   const [isLoading, setIsLoading] = useState(false);
//   const handleClick = () => setIsLoading(!isLoading);

//   return (
//     <Button isLoading={isLoading} onClick={handleClick}>
//       Hola
//     </Button>
//   );
// }

// export default App;

import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Lists from "./components/Lists";

function App() {
  const [data, setData] = useState(["Hola", "Hello"]);
  const addMinion = () => setData([...data, "Minion"]);
  const deleteMinion = () => setData(data.slice(0, -1));

  return (
    <Card>
      <Button onClick={addMinion}>Agregar</Button>
      <Button onClick={deleteMinion}>Eliminar</Button>
      <Lists data={data}></Lists>
    </Card>
  );
}

export default App;
