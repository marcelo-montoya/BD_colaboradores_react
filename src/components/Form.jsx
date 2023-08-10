import { useState } from "react";
import { nanoid } from "nanoid";


const Form = ({colaboradores, setColaboradores}) => {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')

    const enviarForm = (e) => {
        e.preventDefault()
        setColaboradores([
          ...colaboradores, 
          { id: nanoid(),
            nombre: nombre,
            correo: correo,
          }
        ])
        setNombre('')
        setCorreo('')

        
    }

    const capturarNombre = (e) =>{
      setNombre(e.target.value)
    }
    
    const capturarCorreo = (e) =>{
      setCorreo(e.target.value)
    }


    return (
      <form onSubmit={enviarForm}>
        <div className="mb-3">
          <label className="form-label">Nombre del colaborador</label>
          <input
            onChange={capturarNombre}
            value={nombre}
            name='nombre'
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Correo del colaborador</label>
          <input
            onChange={capturarCorreo}
            value={correo}
            name='correo'
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar colaborador
        </button>
      </form>
    );
}

export default Form