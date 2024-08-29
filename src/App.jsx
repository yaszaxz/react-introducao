import './App.css'
import Anexos from './components/Anexos'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import List2 from './components/List copy'
import List3 from './components/List copy 2'

function App() {

  return (
    <> 
    <Header />
    <main>
        <hr></hr>
        <section class="eu">
            <div>
                <h2>Informações</h2>
                <ul>
                    <li>Nome: Thiago Zanin</li>
                    <li>Nascimento: 22/02/2008</li>
                </ul>
            </div>
          </section>
        <hr></hr>
        <List />
        <div>
            <hr></hr> 
        <List2 />
        </div>
        <div>
            <hr></hr>
        <List3 />
        </div>
        <div>
            <hr></hr>
        <Anexos />
          </div>
    </main>
    <Footer />
    </>
  )
}

export default App