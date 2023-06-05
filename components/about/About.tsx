import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

interface AboutProps {
  title: string;
  text: string;
  image: string;
}

const About: React.FC<AboutProps> = ({ title, text, image }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg="6">
            <Image className="img-fluid" src={image} width={644} height={320} alt="About" />
          </Col>
          <Col lg="6">
            <h2>{title}</h2>
            <hr />
            <p>{text}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
