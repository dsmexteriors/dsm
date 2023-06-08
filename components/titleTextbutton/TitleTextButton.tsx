import Link from "next/link";

import styles from "../../src/styles/home-portfolio.module.scss";

interface TitleTextButtonProps {
  title: string;
  text: string;
  btnLink: string;
  btnText: string;
}

const TitleTextButton: React.FC<TitleTextButtonProps> = ({ title, text, btnLink, btnText }) => {
  return (
    <>
      <h2>{title}</h2>
      <hr />
      <p>{text}</p>
      <Link className={`btn btn-primary ${styles["btn"]}`} href={btnLink}>
        {btnText}
      </Link>
    </>
  );
};

export default TitleTextButton;
