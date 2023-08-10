const Navbar = ({busqueda, setBusqueda, colaboradores, setColaboradores}) => {

  const capturarPalabra = (e) =>{
    e.preventDefault()
    setBusqueda(e.target.value)
    const listaFiltrada = colaboradores.filter(colab => colab.nombre.includes(busqueda))
    // const listaFiltrada = colaboradores.filter(colab => colab.nombre === nombre)
    setColaboradores(listaFiltrada)
    
  }
  

      return (
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <h3 className="navbar-brand">Buscador de colaboradores</h3>

          <form onSubmit={(e) =>e.preventDefault()} className="d-flex" role="search">
            <input
              value={busqueda}
              onChange={capturarPalabra}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    );
  }
  
  export default Navbar
