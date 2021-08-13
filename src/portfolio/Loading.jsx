import React, { useEffect } from 'react'
import background from '../pics/programmer.svg'
import { Fade } from 'react-reveal'
import { useDencrypt } from "use-dencrypt-effect";

export default function Loading() {
  const values = ["Niku419"];
  const { result, dencrypt } = useDencrypt();
  useEffect(() => {
    let i = 0;
    const action = setInterval(() => {
      dencrypt(values[i]);
      i = i === values.length - 1 ? 0 : i + 1;
    }, 2000);
    return () => clearInterval(action);
  }, []);

  return (
    <div className="loader-background d-flex flex-column justify-content-center align-items-center">
      <div>
        <Fade><img src={background} alt="You got hacked!!"/></Fade>
      </div>
      <div>
        <Fade><div className="heading">{`<${result}/>`}</div></Fade>
      </div>
    </div>
  )
}
