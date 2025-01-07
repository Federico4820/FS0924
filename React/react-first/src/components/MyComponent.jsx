const MyComponent = function (props) {
    //props è sempre un oggetto!
  return (
    <div>
      <h2>Componente creato da me {props.aggiunta}</h2>
    </div>
  );
};

export default MyComponent;
