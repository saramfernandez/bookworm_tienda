import './Navbar.scss'
import CartWidget from '../CartWidget/CartWidget'
import SearchWidget from '../SearchWidget/SearchWidget'

export const Navbar = () => {
    return (
        <header className="header">
            <div className="header__container">
                <h1>BookWoorms</h1>
                <nav className="navbar">
                    <p className="navbar__link">Libros Físicos</p>
                    <p className="navbar__link">E-books</p>
                    <p className="navbar__link">Lectores</p>
                </nav>
                <SearchWidget />
                <CartWidget />
            </div>
        </header>
    )
}