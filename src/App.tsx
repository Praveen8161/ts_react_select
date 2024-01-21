import "./App.css";
import React, { ReactNode, useState } from "react";

const App = () => {
  const [value, setvalue] = useState<string>("");
  const [valArr, setValArr] = useState<string[]>([]);

  const handleValArr = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key !== "Enter" || !value) return;

    setValArr((prev) => [...prev, value]);
    setvalue("");
  };

  return (
    <div className="container">
      <p>Enter Tags:</p>
      <section className="section">
        {valArr[0] &&
          valArr?.map(
            (val: string, ind: number): ReactNode => (
              <div className="badge" key={ind}>
                <span className="badge_txt">{val}</span>
                <span className="divider"></span>
                <img className="remove" src="/images/remove.svg" />
              </div>
            )
          )}
        <input
          type="text"
          id="txt"
          value={value}
          onChange={(e): void => setvalue(e.target.value)}
          onKeyDown={(e) => handleValArr(e)}
        />
      </section>
    </div>
  );
};

export default App;
