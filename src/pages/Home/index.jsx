import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />
      <section className="container">
        <div className="apresentacao">
          <p>
            <span>A doação sangue</span> 
            <br/>
            Pode salva vidas
          </p>
        </div>
        <figure>
          <img className="img-home" src="./r.svg" alt="Imagem de Home" />
        </figure>
      </section>

      
      <Footer />

    </>
  );
}

export default Home
