import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

function Preferiti() {
  const selector = useSelector((s) => s.main.preferiti);

  return (
    <>
      <ListGroup as="ol" numbered>
        {selector.map((e) => {
          return (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
              key={e}
            >
              {" "}
              <div className="ms-2 me-auto">
                <div className="fw-bold">{e}</div>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}

export default Preferiti;
