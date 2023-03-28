const SearchWidget = () => {
    
    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"/>
            <button className="btn btn-outline-light" type="submit">Buscar</button>
        </form>
    )
}

export default SearchWidget