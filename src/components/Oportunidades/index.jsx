import styles from "./oportunidade.module.css";

import ampliacao from "../../assets/imgs/oportunidades/ampliacao.png";
import acesso from "../../assets/imgs/oportunidades/acesso-recursos.png";
import desenvolvimento from "../../assets/imgs/oportunidades/desenvolvimento.png";
import aprendizado from "../../assets/imgs/oportunidades/aprendizado.png";
import trocaExperiencias from "../../assets/imgs/oportunidades/troca-experiencias.png";
import visibilidade from "../../assets/imgs/oportunidades/visibilidade.png";
import atualizacao from "../../assets/imgs/oportunidades/atualizacao.png";
import acoesSociais from "../../assets/imgs/oportunidades/acoes-sociais.png";

import Title from "../Title";

export default function oportunidades() {
  return (
    <div>
      <Title text={"OPORTUNIDADES"} />
      <div
        className={styles.containerBoxes}
        data-aos="zoom-in"
        data-delay="200"
      >
        <div className={styles.boxes}>
          <div className={styles.firstBox} data-aos="zoom-in">
            <img src={ampliacao} alt="Ampliação de Conhecimento" />
            <h3>Ampliação de Conhecimento</h3>
            <p>
              Mergulhe no universo do autismo com o Conect Autismo 2024. Este
              evento é uma janela para o mundo do TEA, oferecendo insights
              profundos através de apresentações de especialistas de renome
              internacional. Explore as mais recentes descobertas, terapias
              inovadoras e abordagens progressivas que estão moldando o futuro
              do autismo
            </p>
          </div>
          <div className={styles.box} data-aos="zoom-in">
            <img src={acesso} alt="Acesso a Recursos" />
            <h3>Acesso a Recursos</h3>
            <p>
              Participar do Conect Autismo 2024 significa ter acesso a um
              arsenal de recursos valiosos. Desde terapias de vanguarda e
              técnicas de apoio até informações cruciais sobre serviços e
              organizações dedicadas ao TEA, tudo ao seu alcance. É uma
              oportunidade única para enriquecer seu conhecimento e rede de
              apoio.
            </p>
          </div>
          <div className={styles.box} data-aos="zoom-in">
            <img src={desenvolvimento} alt="Desenvolvimento Profissional" />
            <h3>Desenvolvimento Profissional</h3>
            <p>
              Para profissionais da saúde, educadores e terapeutas, o Conect
              Autismo 2024 é um catalisador para o crescimento profissional.
              Atualize suas habilidades, absorva novas abordagens terapêuticas e
              mantenha-se à frente das tendências emergentes no campo do
              autismo. Aqui, a evolução profissional encontra a inovação.
            </p>
          </div>
          <div className={styles.box} data-aos="zoom-in">
            <img src={aprendizado} alt="Aprendizado Contínuo" />
            <h3>Aprendizado Contínuo</h3>
            <p>
              Com uma diversidade de palestrantes e especialistas de elite, o
              evento é um epicentro de aprendizado contínuo. Descubra as
              pesquisas mais atuais, terapias inovadoras e estratégias eficazes
              de apoio ao TEA. Cada sessão é uma porta aberta para novos
              conhecimentos e perspectivas.
            </p>
          </div>
        </div>

        <div className={styles.boxes}>
          <div className={styles.firstBox} data-aos="zoom-in">
            <img src={trocaExperiencias} alt="Troca de Experiências" />
            <h3>Troca de Experiências</h3>
            <p>
              O Conect Autismo 2024 é um ponto de encontro para líderes,
              profissionais e entusiastas do TEA de todo o mundo. Este ambiente
              é fértil para colaborações significativas, troca de ideias e
              experiências que podem elevar carreiras e enriquecer vidas.
              Participe deste intercâmbio de saberes com os mais influentes no
              campo do autismo.
            </p>
          </div>
          <div className={styles.box} data-aos="zoom-in">
            <img src={visibilidade} alt="Visibilidade e Reconhecimento" />
            <h3>Visibilidade e Reconhecimento</h3>
            <p>
              Para expositores e palestrantes, o evento oferece uma plataforma
              de visibilidade inigualável. É a chance de destacar produtos,
              serviços e pesquisas diante de um público especializado,
              expandindo reconhecimento e oportunidades de negócios em um
              mercado em crescimento.
            </p>
          </div>
          <div className={styles.box} data-aos="zoom-in">
            <img src={atualizacao} alt="Atualização Pessoal" />
            <h3>Atualização Pessoal</h3>
            <p>
              O Conect Autismo 2024 é um centro vibrante de atualização e
              aprendizado. Com palestras e workshops abordando as tendências
              mais recentes e abordagens eficazes no manejo do TEA, o evento
              enriquece tanto o desenvolvimento profissional quanto pessoal dos
              participantes.
            </p>
          </div>
          <div className={styles.box} data-aos="zoom-in">
            <img src={acoesSociais} alt="Ações Sociais" />
            <h3>Ações Sociais</h3>
            <p>
              Parte da receita do Conect Autismo 2024 é destinada a projetos
              sociais transformadores, como o TEAFRICA, que capacita
              profissionais e familiares na África sobre o TEA. Esta iniciativa
              sublinha o compromisso do evento com impactos sociais positivos,
              tanto local quanto globalmente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
