import { ListGroup } from "react-bootstrap";

function Preferiti() {
  return (
    <>
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <img className=" ps-1" src="" alt="" />
          <div className="ms-2 me-auto">
            <div className="fw-bold">Subheading</div>
            Cras justo odio
          </div>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default Preferiti;
