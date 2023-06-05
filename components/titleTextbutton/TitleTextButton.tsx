import Link from "next/link";

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
      <Link className="btn btn-primary" href={btnLink}>
        {btnText}
      </Link>
    </>
  );
};

export default TitleTextButton;
