import styles from "./home.module.css";

import logo from "../../assets/imgs/logo/logo-png.png";

import { IoMdCart } from "react-icons/io";

import Oportunidades from "../../components/Oportunidades";
import Ingressos from "../../components/Ingressos";
import Social from "../../components/Social";

import Section from "../../components/Section";
//beneficios
import imgBeneficios from "../../assets/imgs/beneficios-eventos/beneficios-do-evento.jpg";
import Beneficios from "../../contentSections/Beneficios";

//meia entrada
import imgMeiaEntrada from "../../assets/imgs/meia-entrada/meia-entrada.jpg";
import MeiaEntrada from "../../contentSections/MeiaEntrada";

//sobre nos
import imgSobreNos from "../../assets/imgs/sobre-nos/sobre-nos.jpg";
import SobreNos from "../../contentSections/SobreNos";

import Palestrantes from "../../components/Palestrantes";

import Cronograma from "../../components/Cronograma";
import EspacoConect from "../../components/EspacoConect";
import Patrocinador from "../../components/Patrocinador";
import { arrayPatrocinadorDiamante } from "../../data/patrocinadorDiamante";
import { arrayPatrocinadorOuro } from "../../data/patrocinadorOuro";
import { arrayPatrocinadorPrata } from "../../data/patrocinadorPrata";

import { arrayApoio } from "../../data/apoio";
import { FaArrowDown } from "react-icons/fa";

import PatrocinadorEExpositor from "../../components/PatrocinadorEExpositor";
import Local from "../../components/Local";
import Contagem from "../../components/Contagem";

//versa
import imgVersa from "../../assets/imgs/logo/logoVersa.png";
import Versa from "../../contentSections/Versa";

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
      <Section
        title={"BENEFÍCIOS DO EVENTO"}
        styleImg={"imgSection"}
        img={imgBeneficios}
        descriptionImg={"Palestra"}
        styleComponent={"listSection"}
        component={<Beneficios />}
      />
      <Section
        title={"MEIA-ENTRADA CONECT AUTISMO"}
        styleImg={"imgSection"}
        img={imgMeiaEntrada}
        descriptionImg={"Inclusão"}
        styleComponent={"list2Section"}
        component={<MeiaEntrada />}
      />
      <Section
        title={"SOBRE NÓS"}
        styleImg={"imgSection"}
        img={imgSobreNos}
        descriptionImg={"Aline Sales"}
        styleComponent={"textSection"}
        component={<SobreNos />}
      />
      {/* <SobreNos /> */}
      <Palestrantes />
      <Cronograma />
      <EspacoConect />
      <Patrocinador
        title="PATROCINADOR DIAMANTE"
        array={arrayPatrocinadorDiamante}
      />
      <Patrocinador title="PATROCINADOR OURO" array={arrayPatrocinadorOuro} />
      <Patrocinador title="PATROCINADOR PRATA" array={arrayPatrocinadorPrata} />
      <Patrocinador title="APOIO" array={arrayApoio} />
      <PatrocinadorEExpositor />
      <Local />
      <Contagem />
      <Section
        styleImg={"imgSectionNoBorder"}
        img={imgVersa}
        descriptionImg={"Logo Versa"}
        styleComponent={"textSection"}
        component={<Versa />}
      />
      <RedesSociais />
      <Politica />
      <Footer />
    </div>
  );
}
