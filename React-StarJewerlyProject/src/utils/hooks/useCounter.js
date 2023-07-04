import { useState } from "react";

const useCounter = (initialValue, stock) => {
  const [contador, setContador] = useState(initialValue);

  const sumar = () => {
    contador < stock ? setContador(contador + 1) : alert("cantidad maxima");
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  const reset = () => {
    setContador(initialValue);
  };

  return { contador, sumar, restar, reset };
};

export default useCounter;
