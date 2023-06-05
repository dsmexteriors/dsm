import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

interface ServicesProps {
  title: string;
  imageOne: string;
  titleOne: string;
  imageTwo: string;
  titleTwo: string;
  imageThree: string;
  titleThree: string;
  paraOne: string;
  paraTwo: string;
}

const Services: React.FC<ServicesProps> = ({
  title,
  imageOne,
  titleOne,
  imageTwo,
  titleTwo,
  imageThree,
  titleThree,
  paraOne,
  paraTwo,
}) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2>{title}</h2>
            <hr />
          </Col>
        </Row>
        <Row className="text-center">
          <Col lg="4">
            <Image className="img-fluid" src={imageOne} width={100} height={100} alt="Icon One" />
            <h4>{titleOne}</h4>
          </Col>
          <Col lg="4">
            <Image className="img-fluid" src={imageTwo} width={100} height={100} alt="Icon Two" />
            <h4>{titleTwo}</h4>
          </Col>
          <Col lg="4">
            <Image className="img-fluid" src={imageThree} width={100} height={100} alt="Icon Three" />
            <h4>{titleThree}</h4>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <p>{paraOne}</p>
          </Col>
          <Col lg="6">
            <p>{paraTwo}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
