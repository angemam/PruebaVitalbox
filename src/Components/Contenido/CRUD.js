const CRUDtable=(data)=>{
    return(
        <div>
            <h3>
                Búsqueda de pacientes
            </h3>
            <table>
                <thead>
                    <tr>
                        <th> Nombre</th>
                        <th> Tipo de documento</th>
                        <th> Numero de documento</th>
                        <th> Fecho</th>
                        <th> Talla</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td> data.nombre</td>
                        <td> data.tipo_doc</td>
                        <td> data.num_doc</td>
                        <td> data.fecha</td>
                        <td> data.peso</td>
                    </tr>  
                </tbody>
            </table>
        </div>
    )
}
export default CRUDtable;