import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyFooter() {
  return (
    <Card className="text-center mt-4 bg-black text-light">
      <Card.Body>
        <Card.Title as="h2">This is the footer</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MyFooter;