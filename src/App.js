import React from "react";

import "./global.css";

function App() {
    const [value, setValue] = React.useState("");
    const result = React.useMemo(() => {
        let lines = value.split("\n");

        const result = lines.reduce((prevLine, currLine) => {
            const orderedLine = currLine
                .split(" ")
                .sort((a, b) => Number(a) - Number(b))
                .reduce((prev, curr) => {
                    if (
                        prev.find((item) => Number(item) === Number(curr)) ||
                        Number(curr) < 0
                    ) {
                        return prev;
                    }

                    return [...prev, Number(curr)];
                }, []);

            return [...prevLine, orderedLine];
        }, []);

        return result;
    }, [value]);

    return (
        <div className="App">
            <h1>Oi Pai</h1>
            <p>
                Copia os caracteres que o senhor quer ordenar e cola dentro
                desse input de texto ai embaixo.
            </p>
            <textarea
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
                        {result?.map((line) => {
                            return (
                                <>
                                    {line.map((item) => {
                                        if (!Boolean(Number(item))) return null;
                                        return item < 10
                                            ? `0${item} `
                                            : `${item} `;
                                    })}
                                    <br />
                                </>
                            );
                        })}
                    </>
                )}
            </p>
        </div>
    );
}

export default App;
