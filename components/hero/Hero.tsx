import { Container } from "react-bootstrap";
import Link from "next/link";

import styles from "../hero/Hero.module.scss";

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
      <section className={styles.hero}>
        <Container>
          <div className={styles.box}>
            <h1>{title}</h1>
            <Link className="btn btn-primary" href={primaryBtnLink}>
              {primaryBtnText}
            </Link>
            <Link className="btn btn-secondary" href={secondaryBtnLink}>
              {secondaryBtnText}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
