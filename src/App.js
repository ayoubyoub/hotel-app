import React from 'react';
import "./sass/main.scss";
import hotel1 from './img/hotel-1.jpg';
import hotel2 from './img/hotel-2.jpg';
import hotel3 from './img/hotel-3.jpg';
import hotel4 from './img/hotel-4.jpg';

function App() {
  return (
      <div className="container">
        <div className="head">
      <header className="header">
      <nav className="logo-nav">
          <div className="logo-nav__user">
            <span className="logo-nav__user-name">LOGO</span>
          </div>
        </nav>
        <nav className="user-nav">
          <div className="user-nav__user">
            <div className="user-nav__user-photo" />
            <span className="user-nav__user-name">John Doe</span>
          </div>
        </nav>
      </header>
      </div>
            <div className="content">
                <main className="hotel-view">
                  {/** HOTEL 1*/}
                  <div className="hotel-view__item">
                    <div>
                      <img src={hotel1} alt="Hotel 1" className="hotel-view__item_img"/>
                    </div>
                    <div className="hotel-view__item__content">
                      <div className="hotel-view__item__content__title">
                        Hotel de la plage
                      </div>
                      <div className="hotel-view__item__content__body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.  
                      </div>
                    </div>
                    <div className="hotel-view__item__price">
                      <b>400€</b>
                      <br/>
                      prix/nuit
                    </div>
                  </div>
                  {/** HOTEL 2*/}
                  <div className="hotel-view__item">
                  <div>
                      <img src={hotel2} alt="Hotel 2" className="hotel-view__item_img"/>
                    </div>
                    <div className="hotel-view__item__content">
                      <div className="hotel-view__item__content__title">
                        Hotel de la plage
                      </div>
                      <div className="hotel-view__item__content__body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.  
                      </div>
                    </div>
                    <div className="hotel-view__item__price">
                      <b>400€</b>
                      <br/>
                      prix/nuit
                    </div>
                  </div>
                  {/** HOTEL 3*/}
                  <div className="hotel-view__item">
                  <div>
                      <img src={hotel3} alt="Hotel 3" className="hotel-view__item_img"/>
                    </div>
                    <div className="hotel-view__item__content">
                      <div className="hotel-view__item__content__title">
                        Hotel de la plage
                      </div>
                      <div className="hotel-view__item__content__body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.  
                      </div>
                    </div>
                    <div className="hotel-view__item__price">
                      <b>400€</b>
                      <br/>
                      prix/nuit
                    </div>
                  </div>
                  {/** HOTEL 4*/}
                  <div className="hotel-view__item">
                  <div>
                      <img src={hotel4} alt="Hotel 4" className="hotel-view__item_img"/>
                    </div>
                    <div className="hotel-view__item__content">
                      <div className="hotel-view__item__content__title">
                        Hotel de la plage
                      </div>
                      <div className="hotel-view__item__content__body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.  
                      </div>
                    </div>
                    <div className="hotel-view__item__price">
                      <b>400€</b>
                      <br/>
                      prix/nuit
                    </div>
                  </div>
                </main>
                <nav className="sidebar">
                    <div className="side-nav">
                    <div className="side-nav__item">
                        <b>PANIER</b>
                        </div>
                        <div className="hotel-view-min__item">
                          <div>
                            <img src={hotel2} alt="Hotel 2" className="hotel-view-min__item_img"/>
                          </div>
                          <div className="hotel-view-min__item__price">
                            <b>400&euro;</b>
                            <br/>
                            <span className="hotel-view-min__item__price-sm">prix/nuit</span>
                          </div>
                        </div>
                        <div className="hotel-view-min__item__total">
                           <span>TOTAL</span> 400&euro;
                        </div>
                    </div>
                </nav>
            </div>
        </div>
  );
}

export default App;
