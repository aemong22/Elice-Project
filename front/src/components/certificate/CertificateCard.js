import { Card, Button, Row, Col } from "react-bootstrap";

function CertificateCard({ certificate, isEditable, setIsEditing }) {
  return(
    <Card.Text>
        <Row className="align-items-center">
          <Col>
            <span>{certificate.title}</span>
            <br/>
            <span>{certificate.description}{"  "}</span>
            <span>{certificate.when_date}</span>
          </Col>
          {isEditable && (
            <Col xs lg="1">
              <Button
                variant="outline-info"
                size="sm"
                onClick={() => setIsEditing((prev) => !prev)}
                className="mr-3"
              >
                편집
              </Button>
            </Col>
          )}
        </Row>
    </Card.Text>
  )
}

export default CertificateCard;