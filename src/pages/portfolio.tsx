import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { InnerHero } from "../../components/inner-hero/InnerHero";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <>
      <div ref={ref}>
        <InnerHero title="Portfolio" />
        <title>Portfolio | DSM Exteriors</title>
        <meta
          name="description"
          content="Browse through our impressive portfolio showcasing the excellence of DSM Exteriors. Witness the transformation of residential and commercial properties with our top-quality siding, aluminum, gutter, and railing/column installations. Get inspired for your next project."
        />
        <Container>
          <Row>
            <Col lg="12">
              <motion.div
                variants={{ hidden: { opacity: 0, y: 35 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p>Content</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
