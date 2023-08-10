 
const List = (colaboradores) => {
    return (
      <div className="colabs">
        <h1>Lista de colaboradores</h1>

        {colaboradores.colaboradores.map((colab) => (
            <p key={colab.id}>{colab.nombre} - {colab.correo}</p>
          ))}
      </div>
    );
}

export default List