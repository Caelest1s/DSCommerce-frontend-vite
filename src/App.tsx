import './App.css';
import cartImg from './assets/cart.svg';
import computerImg from './assets/computer.png';

function App() {
  return (
    //fragment <> ... </>
    <>
      <header className="dsc-header-client">
        <nav className="dsc-container">
          <h1>DSCommerce</h1>
          <div className="dsc-navbar-right">
            <div className="dsc-menu-items-container">
              <div className="dsc-menu-item">
                <img src={cartImg} alt="Shopping cart"/>
              </div>
            </div>
            <a href="#">Entrar</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="dsc-product-details-section" className="dsc-container">
          <div className="dsc-card dsc-mb20">
            <div className="dsc-product-details-top dsc-line-bottom">
              <img src={computerImg} alt="computer"/>
            </div>

            <div className="dsc-product-details-bottom">
              <h3>R$ 5.000,00</h3>
              <h4>Computador Gamer XT</h4>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ex a justo vehicula, et
                vulputate orci sollicitudin. Vestibulum fermentum ornare accumsan. Aenean malesuada ante vel leo
                posuere, molestie ornare quam rhoncus. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Suspendisse potenti. Aenean vitae dictum lectus. Etiam
                blandit, magna vel dapibus viverra, nisl ipsum accumsan ipsum, at feugiat tortor turpis in dui.
                Sed dictum lacus libero, eget commodo metus porttitor non. Aenean tincidunt nisi egestas orci
                aliquet, egestas malesuada dui dignissim. Nam vel tempus risus. Morbi eget condimentum metus, et
                vehicula turpis.
              </p>
              <div className="dsc-category-container">
                <div className="dsc-category">Eletronicos</div>
                <div className="dsc-category">Computadores</div>
              </div>
            </div>
          </div>

          <div className="dsc-btn-page-container">
            <div className="dsc-btn dsc-btn-blue">
              Comprar
            </div>
            <div className="dsc-btn dsc-btn-white">
              Início
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App
