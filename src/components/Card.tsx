import { type ReactNode } from "react";

type Props = {
  children: ReactNode; //children is a special prop that allows you to pass data between the
  // opening and closing tags of a component
};

function Card(props: Props) {
  //object destructuring
  const { children } = props;
  return (
    <div
      className="card"
      style={{
        width: "18rem",
      }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}

type CardBodyProps = {
  title: string;
  text: string;
};
export function CardBody({ title, text }: CardBodyProps) {
  return (
    //fragment
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
    //fragment
  );
}

export default Card;
