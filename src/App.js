import React from "react";

import "./global.css";

function App() {
    const [value, setValue] = React.useState("");
    const result = React.useMemo(() => {
        const returnValue = value
            .split(" ")
            .sort((a, b) => Number(a) - Number(b))
            .reduce((prev, curr) => {
                if (prev.find((item) => Number(item) === Number(curr))) {
                    return prev;
                }

                return [...prev, curr];
            }, []);

        return returnValue.length > 1 ? returnValue : [];
    }, [value]);

    return (
        <div className="App">
            <h1>Oi Pai</h1>
            <p>
                Copia os caracteres que o senhor quer ordenar e cola dentro
                desse input de texto ai embaixo.
            </p>
            <input
                value={value}
                onChange={({ target }) => setValue(target.value)}
            />
            <p>
                Quando o senhor colar ai em cima elas devem aparecer aqui
                embaixo ordenados:
            </p>
            <p>
                {!!result.length && (
                    <>
                        {result?.map((item) => {
                            if (!Boolean(Number(item))) return null;
                            return item < 10 ? `0${item} ` : `${item} `;
                        })}
                    </>
                )}
            </p>
        </div>
    );
}

export default App;
