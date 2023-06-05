import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col lg="6">
              <p>Address goes here | P: 289 936 0708 | E: matejkozul23@gmail.com</p>
            </Col>
            <Col lg="6">
              Copyright &copy; {new Date().getFullYear()} DSM Exteriors | <Link href="/privacy">Privacy Policy</Link>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
