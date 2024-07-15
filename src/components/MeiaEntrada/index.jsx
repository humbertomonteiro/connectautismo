import styles from "./meiaEntrada.module.css";

import meiaEntrada from "../../assets/imgs/meia-entrada/meia-entrada.jpg";

export default function MeiaEntrada() {
  return (
    <div className={styles.container}>
      <div className={styles.title} data-aos="zoom-in">
        <h2>MEIA-ENTRADA CONECT AUTISMO</h2>
      </div>

      <div className={styles.box} data-aos="zoom-in">
        <div className={styles.img}>
          <img src={meiaEntrada} alt="Meia entrada" />
        </div>
        <div className={styles.content}>
          <p>
            No Conect Autismo 2024, estamos empenhados em garantir o acesso ao
            conhecimento sobre o autismo para todos. Com isso, oferecemos meia
            entrada para as seguintes categorias:
          </p>
          <ul>
            <li>
              ✔︎Pessoas com Deficiência (PcD), incluindo autistas: Apresentar
              documento comprovativo da condição.
            </li>

            <li>
              ✔︎dosos (60 anos ou mais): Documento de identidade com foto.
            </li>

            <li>
              ✔︎Estudantes (de qualquer curso): Carteira de Identificação
              Estudantil (CIE), Comprovante de Matrícula ou Mensalidade.
            </li>

            <li>
              ✔︎Professores de redes públicas e privadas: Comprovante de vínculo
              com instituição de ensino.
            </li>

            <li>
              ✔︎Pais de autistas: Documento que comprove a condição de
              responsável legal.
            </li>

            <li>
              ✔︎Pessoas de Baixa Renda: Apresentar comprovante de renda ou outro
              documento válido.
            </li>
          </ul>

          <span>
            🔖 Para obter o benefício da meia entrada, utilize o CUPOM:
            MEIAENTRADA (tudo em maiúsculo, sem espaços) no momento da compra.
            Este cupom não é acumulativo com outros descontos ou promoções.
          </span>

          <p>
            Lembre-se: os documentos comprobatórios devem ser apresentados na
            entrada do evento. A meia entrada é um direito que promove a
            inclusão e o acesso, e sua colaboração na apresentação dos
            documentos é essencial.
          </p>
        </div>
      </div>
    </div>
  );
}
