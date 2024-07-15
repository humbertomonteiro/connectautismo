import styles from "./home.module.css";

import logo from "../../assets/imgs/logo/logo-png.png";

import { IoMdCart } from "react-icons/io";

import Oportunidades from "../../components/Oportunidades";
import Ingressos from "../../components/Ingressos";
import Social from "../../components/Social";
import Beneficios from "../../components/Beneficios";
import MeiaEntrada from "../../components/MeiaEntrada";
import SobreNos from "../../components/SobreNos";

import Cronograma from "../../components/Cronograma";
import EspacoConect from "../../components/EspacoConect";
import Patrocinador from "../../components/Patrocinador";
import { arrayPatrocinadorDiamante } from "../../data/patrocinadorDiamante";

import { arrayApoio } from "../../data/apoio";
import { FaArrowDown } from "react-icons/fa";

import PatrocinadorEExpositor from "../../components/PatrocinadorEExpositor";
import Local from "../../components/Local";
import Contagem from "../../components/Contagem";
import Versa from "../../components/Versa";
import RedesSociais from "../../components/RedesSociais";
import Politica from "../../components/Politica";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className={styles.container} data-aos="fade-down">
      <div className={styles.containerHome}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.text}>
          <h1>Conect Autismo 2024</h1>
          <h1>Unindo Mentes, Ampliando Horizontes</h1>
          <p>
            A sua oportunidade de fazer parte de uma história de transformação e
            esperança. Venha e conecte-se com um futuro mais inclusivo e
            compreensivo.
          </p>
        </div>
        <div className={styles.buttons}>
          <a
            href="https://go.hotmart.com/B89195964H?ap=54b0"
            target="_blank"
            className={styles.button}
          >
            Ingresso Online <IoMdCart />
          </a>
          <a href="#ingresso" className={styles.button}>
            Sobre o Evento <FaArrowDown />
          </a>
        </div>
      </div>
      <Oportunidades />
      <Ingressos />
      <Social />
      <Beneficios />
      <MeiaEntrada />
      <SobreNos />
      <Cronograma />
      <EspacoConect />
      <Patrocinador
        title="PATROCINADOR DIAMANTE"
        array={arrayPatrocinadorDiamante}
      />
      <Patrocinador
        title="PATROCINADOR OURO"
        array={arrayPatrocinadorDiamante}
      />
      <Patrocinador
        title="PATROCINADOR PRATA"
        array={arrayPatrocinadorDiamante}
      />
      <Patrocinador title="APOIO" array={arrayApoio} />
      <PatrocinadorEExpositor />
      <Local />
      <Contagem />
      <Versa />
      <RedesSociais />
      <Politica />
      <Footer />
    </div>
  );
}
