import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function MyAlert() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="primary">
        <Alert.Heading>WELCOME</Alert.Heading>
        <p>
          Benvenuto nella tua Libreria Digitale! 📚 <br /> Esplora la tua collezione,
          scopri nuovi contenuti e organizza i tuoi titoli preferiti in modo
          semplice e veloce. Grazie per essere parte della nostra comunità! 💡
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default MyAlert;
