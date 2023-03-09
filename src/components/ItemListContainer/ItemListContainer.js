import './ItemListContainer.scss'

const ItemListContainer = ( {greeting} ) => {

    return (
        <div className="container my-5">
            <h2 className="list-container__title">¡Houston, tenemos un problema!</h2>
            <hr/>
            <p className='message'>{greeting}</p>
        </div>
    )
}

export default ItemListContainer