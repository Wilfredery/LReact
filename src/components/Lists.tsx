import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (elemento: string) => void;
};

function Lists({ data, onSelect }: Props) {
  //   function handleClick() {
  //     console.log("click desde handleClick");
  //   }
  const [index, setIndex] = useState(1);
  const handleClick = (i: number, elemento: string) => {
    setIndex(i);

    onSelect?.(elemento);
  };

  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          key={elemento}
          onClick={() => handleClick(i, elemento)}
          className={`list-group-item ${index === i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default Lists;
