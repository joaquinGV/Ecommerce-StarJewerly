import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    contador < stock ? setContador(contador + 1) : alert("cantidad maxima");
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  const reset = () => {
    setContador(initial);
  };

  return (
    <Counter
      contador={contador}
      sumar={sumar}
      restar={restar}
      reset={reset}
      onAdd={onAdd}
    />
  );
};

export default CounterContainer;
