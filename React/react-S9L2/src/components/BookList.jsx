import SingleBook from "./SingleBook";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";

function BookList(props) {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="g-4">
        {props.ArrBook.map((x) => {
          return <SingleBook book={x} key={x.asin} />;
        })}
      </Row>
    </Container>
  );
}

export default BookList;
