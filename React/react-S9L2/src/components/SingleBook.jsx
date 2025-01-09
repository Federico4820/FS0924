import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';

function SingleBook(props) {
  return (
    <Col key={props.book.asin}>
      <Card style={{}} className=" mb-4 h-100">
        <Card.Img variant="top" src={props.book.img} className=' h-100'/>
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;