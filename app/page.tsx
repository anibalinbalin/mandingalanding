import Nav from "./components/Nav";
import RevealOnScroll from "./components/RevealOnScroll";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <Nav />

      <header id="top">
        <div className="hero-glow" />
        <h1>
          <span className="l">
            El cambio es
            <br />
            la constante.
          </span>
          <span className="l">
            <span className="rojo">Nosotros también.</span>
          </span>
        </h1>
        <p className="hero-sub">
          Más de tres décadas construyendo marcas. En ese tiempo cambió todo: los medios, el
          público, las reglas del juego. Lo que no cambió es nuestra ventaja competitiva: vemos lo
          que viene antes de que llegue, y ya estamos ahí.
        </p>
        <div className="hero-claims">
          <span className="claim">Experiencia que no frena. Agilidad que no improvisa.</span>
          <span className="claim">Estrategia, creatividad y ejecución integradas.</span>
        </div>
        <div className="hero-eq">Trabajamos para el mundo.</div>
      </header>

      <section id="nosotros">
        <div className="reveal">
          <span className="diag" />
          <div className="eyebrow">Nosotros</div>
          <h2 className="section-title">Trayectoria que se mueve con el tiempo.</h2>
          <p className="lead">
            El público de hoy es más exigente y más evasivo: conoce las trampas del marketing y no
            le alcanza con que le hagan ruido. Para llegarle hay que construir vínculo, y para eso
            hay que entender el momento. Investigamos tendencias, probamos herramientas nuevas, no
            por moda, sino porque es la única manera de seguir siendo relevantes.{" "}
            <strong>
              Tenemos mucha trayectoria y la usamos a favor: es lo que nos permite mirar lo nuevo
              sin marearnos y separar lo que sirve de lo que es solo ruido.
            </strong>
          </p>
        </div>

        <div className="nos-grid reveal">
          <div className="card">
            <div className="nombre">Virginia Descoueyte</div>
            <div className="rol">Socia directora</div>
            <p className="cv">
              Más de 30 años desarrollando marcas en el mercado local: General Motors, Coca-Cola,
              Movistar, Nestlé, Unilever, L&apos;Oréal, Canal 10, El País, Claro, MasterCard y
              Johnson &amp; Johnson, entre muchas otras.
            </p>
            <a className="mail" href="mailto:virginia@mandinga.info">
              virginia@mandinga.info
            </a>
          </div>
          <div className="card">
            <div className="nombre">Jorge Oromí</div>
            <div className="rol">Socio director</div>
            <p className="cv">
              Más de 30 años en diseño y comunicación, con trabajos para Uruguay, Suiza, México y
              Chile: El País, 3M Uruguay, MundoMac, Société Générale Private Banking, Unilever y
              eMedical, entre otros.
            </p>
            <a className="mail" href="mailto:jorge@mandinga.info">
              jorge@mandinga.info
            </a>
          </div>
        </div>

        <h3 className="bloque-titulo reveal">Trabajamos con una estructura modular.</h3>
        <p className="modular reveal">
          Para cada proyecto armamos equipos flexibles y a medida, formados por profesionales senior
          de las áreas creativas, medios, producción de eventos, realizaciones audiovisuales y
          relaciones públicas, entre otras. Sumamos solo los talentos que cada instancia necesita,
          evitándole al cliente costos innecesarios. Una estrategia acertada fuera de tiempo es
          inútil: por eso cumplimos los plazos sin negociar la calidad.
        </p>
      </section>

      <section id="servicios">
        <div className="reveal">
          <span className="diag" />
          <div className="eyebrow">Agencia</div>
          <h2 className="section-title">Cuatro frentes para que tu marca sea elegida.</h2>
          <p className="lead">
            Las marcas compiten por ser elegidas entre miles de mensajes diarios. La conexión no se
            sostiene sin relación, y esa relación se construye cuando el público se identifica con
            la marca.
          </p>
        </div>

        <div className="serv-grid reveal">
          <div className="serv">
            <span className="num">01</span>
            <h3>Corporativo</h3>
            <p>
              Identidad de marca (naming, marcas gráficas, arquitectura), creación, estrategia y
              gestión de marca, planeamiento de comunicación corporativa, packaging, espacios de
              marca, manuales institucionales y eventos corporativos.
            </p>
          </div>
          <div className="serv">
            <span className="num">02</span>
            <h3>Comunicación externa</h3>
            <p>
              Estrategias de prensa y reputación, relacionamiento con formadores de opinión y grupos
              de interés, eventos, campañas de bien público y RSE, y manejo integral de imagen.
            </p>
          </div>
          <div className="serv">
            <span className="num">03</span>
            <h3>Comunicación interna</h3>
            <p>
              Planes de comunicación interna, incentivos para fuerza de ventas, clubes de
              fidelización, medios internos, eventos de integración y estrategias de engagement.
            </p>
          </div>
          <div className="serv">
            <span className="num">04</span>
            <h3>Comunicación masiva</h3>
            <p>
              Estrategias de marca, lanzamientos, campañas institucionales y de producto,
              activaciones, planificación y compra de medios (digitales y tradicionales), y
              producción gráfica, audiovisual, webs.
            </p>
          </div>
        </div>
      </section>

      <section id="consultoria">
        <div className="reveal">
          <span className="diag" />
          <div className="eyebrow">Consultoría</div>
          <h2 className="section-title">Nos sentamos con vos a pensar.</h2>
          <p className="lead">
            Después de 30 años en el mundo de la comunicación, sabemos que los problemas más costosos
            no son los que se ven. Son los que se deciden erróneamente antes de que llegue la
            agencia.
          </p>
          <p className="lead consultoria-p">
            Por eso ofrecemos algo distinto: encuentros directos con los tomadores de decisión de tu
            organización. Sin intermediarios, sin presentaciones de cien slides. Conversaciones
            entre pares, donde el objetivo es ordenar lo que importa.
          </p>
          <p className="lead consultoria-p">
            <strong>
              Estrategia de comunicación, posicionamiento, reputación, branding, crisis, vocería,
              comunicación interna
            </strong>{" "}
            son algunos de los frentes que podemos abordar juntos.
          </p>
          <p className="lead consultoria-p">El resultado es una organización que comunica mejor.</p>
          <a href="#contacto" className="btn-oscuro">
            Hablemos
          </a>
        </div>
      </section>

      <section id="contacto">
        <div className="contacto-wrap">
          <div className="reveal">
            <span className="diag blanca" />
            <div className="eyebrow">Contacto</div>
            <h2>Hablemos.</h2>
            <p className="lead">
              Contanos qué tenés entre manos.
              <br />
              Te respondemos a la brevedad.
            </p>
            <a className="direct-mail" href="mailto:info@mandinga.info">
              info@mandinga.info
            </a>
          </div>
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer>
        <div className="logo-foot">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Mandinga Comunicación" className="logo-img-foot" />
        </div>
        <div className="foot-meta">© 2026 Mandinga Comunicación. Antes Alma Comunicación.</div>
      </footer>

      <RevealOnScroll />
    </>
  );
}
