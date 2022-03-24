import React, {useState} from 'react';
import "./Contenido.css";
import ""

const documentos =[
    {
        "docs" : "Tarjeta de identidad"
    },
    {
        "docs" : "Cédula de ciudadanía"
    },
    {
        "docs" : "Pasaporte"
    }
]

const plantilla={
    "nombre": "",
    "tipo_doc": "",
    "num_doc": null,
    "fecha": "",
    "peso": null,
    "talla": null
}

function Contenido() {

    const handleSubmit=(e)=>{};

    const [nombre, setNombre]=useState("");
    const [idDocumentos, setIdDocumentos]=useState(-1);
    const [valorPeso, setPeso]=useState("");
    const [valorTalla, setTalla]=useState("");
    const [valorFecha, setFecha]=useState("");
    console.log(valorPeso)

    return (
        <div className="jumbotron">
            <h1>Registro de pacientes</h1>
            <form className='registro' onSubmit={handleSubmit}>
                <input type="text" id='nombre' placeholder='Nombre'></input>
                <select name="documentos" id="selectDocumentos" value={db.nombre}>
                        <option value={-1}> Tipo de documento</option>
                        {
                            documentos.map((item,i)=>(
                                <option key={"documentos"+i} value={i}> {item.docs} </option>
                            ))
                        }
                    </select>
                <input type="number" id='NumDoc' placeholder='Número de documento' value={db.num_doc}></input>
                <input type="date" id='date' value={valorFecha} onChange={(e)=>setFecha(e.target.value)}></input>
                <input type="number" id='Peso' value={valorPeso} placeholder='Peso' onChange={(e)=>setPeso(e.target.value)}></input>
                <input type="number" id='Talla' value={valorTalla} placeholder='Talla' onChange={(e)=>setTalla(e.target.value)}></input>
                <input type="submit" value="Agregar" onClick={handleSubmit}> </input>
            </form>
            <h1>
                    Cálculos
                </h1>
                <h3>
                    IMC = {valorPeso/(valorTalla*valorTalla)}
                </h3>
                <h3>
                    Edad = {2022-Number(valorFecha.toString().slice(0,4))}
                </h3>
        </div>
    );
}

export default Contenido;