
import styles from './Sobre.module.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Avatar({
  nome,
  sobre
}) {
  return (
    <>
      <div className={styles.perfil}>
        <figure>
          <img className={styles.img_perfil} src="./imgP.svg" alt="Imagem de Home" />
        </figure>
        <div className={styles.info_perfil}>
          <h1>Ruan</h1>
          <p>Olá, eu sou Ruan sou estudante na Universidade Católica de Pernambuco no curso sistemas para internet, 
            só um desenvolvedor back end e adoro práticas esportivas. Meu objetivo futuramente é ter um emprego estável e ser 
            uma referência para os meus amigos e familiares.</p>
          <div className={styles.redes}>
            <figure>
              <a href='https://github.com/RuanAzevedoLira'>
                <img className={styles.img_redes} src="./github.png" alt="Logo Github" />
              </a>
              <a href='https://www.linkedin.com/in/ruan-henrique-azevedo-lira-7043ab285/'>
                <img className={styles.img_redes} src="./linkedin.png" alt="Logo LinkedIn" />
              </a>
            </figure>
          </div>
        </div>
      </div>
    </>

  );
}


function Sobre() {
  return (
    <>
      <Header />
      <Avatar
        nome="Igor"
        sobre="Testando e atualizando..."
      />
      <Footer />
    </>
  )
}

export default Sobre
