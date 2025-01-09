import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import books from "../assets/books/fantasy.json";
import Container from "react-bootstrap/esm/Container";

function AllMyBooks() {
  return (
    <Container>
      <Row xs={12} md={3} className="g-4 mt-4">
        {books.map(book => {
          return (
            <Col key={book.asin}>
              <Card className="h-100">
                <Card.Img variant="top" className=" h-100" src={book.img} />
                <Card.Body>
                  <Card.Title className="">{book.title}</Card.Title>
                  <Card.Text>
                    tipologia: {book.category} <br />
                    costo: {book.price}$
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default AllMyBooks;
