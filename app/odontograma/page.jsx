'use client'
import { useState } from "react";
import Odontogram from "./odontogram";
import Navbar from "../components/Navbar/navbar";

function Odontograma({ idPaciente = 0 }) {

    const [data, setData] = useState([]);
    const [nombrePaciente, setnombrePaciente] = useState("Sebastian");

    return (
        <div className="w-full">
            <Navbar />
            <div className="mx-auto mt-8">
                <div className="flex ml-20">
                    <h1 className="mr-4 font-bold text-4xl">Paciente:</h1>  <h2 className="text-2xl mt-auto">{nombrePaciente}</h2>
                </div>
                <Odontogram
                    tooth={(labelT, zoneT, idT) => {
                        setData((oldArray) => [
                            ...oldArray,
                            {
                                label: labelT,
                                zone: zoneT,
                                id: idT,
                            },
                        ]);
                    }}
                    rtooth={(id) => {
                        setData((current) =>
                            current.filter((obj) => {
                                return obj.id !== id;
                            })
                        );
                    }}
                />
                <div style={{ padding: "1rem", display: "flex", justifyContent: "center" }}>
                    <button

                        onClick={() => {
                            console.log(data)
                        }}

                        style={{
                            backgroundColor: "#FF6363",
                            width: "10rem",
                            borderRadius: "1rem",
                            padding: "0.5rem",
                            color: "#f1f1f1",
                            fontSize: 18,
                            cursor: "pointer"
                        }}

                    >Guardar</button>
                </div>
            </div>
        </div>

    );
}

export default Odontograma;