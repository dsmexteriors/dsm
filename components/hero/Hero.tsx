import { Container, Button } from "react-bootstrap";
import Link from "next/link";

interface HeroProps {
  title: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, primaryBtnText, primaryBtnLink, secondaryBtnText, secondaryBtnLink }) => {
  return (
    <>
      <Container>
        <div className="box">
          <h1>{title}</h1>
          <Link className="btn btn-primary" href={primaryBtnLink}>
            {primaryBtnText}
          </Link>
          <Link className="btn btn-secondary" href={secondaryBtnLink}>
            {secondaryBtnText}
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Hero;
