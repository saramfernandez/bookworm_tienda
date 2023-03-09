import { Navbar } from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Aún no hay nada que mostrar, vuelve mas tarde 😖"}/>
    </div>
  );
}

export default App;
