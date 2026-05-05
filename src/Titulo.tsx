function Titulo() {
  const nombre = 'Will';
  if (nombre) {
    return <p>Hello, {nombre}!</p>;
  }
  return <p>Hello, World!</p>;
}

export default Titulo;