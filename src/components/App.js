import React from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import Modal from 'react-modal';
// ACTIONS
import * as nuitAction from '../actions/nuitActions';
// STYLE
import "../sass/main.scss";
// DEFAULT IMAGES
import hotel1 from '../img/hotel-1.jpg';
import hotel2 from '../img/hotel-2.jpg';
import hotel3 from '../img/hotel-3.jpg';
import hotel4 from '../img/hotel-4.jpg';
// Modal
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    modalIsOpen: false
  };
}

openModal = () =>{
  this.setState({modalIsOpen: true});
}

closeModal = () => {
  this.setState({modalIsOpen: false});
}

getImg = (hotel) => {
  let img = null;
  switch (hotel.img) {
    case 'hotel1':
      img = hotel1;
      break;
      case 'hotel2':
        img = hotel2;
        break;
        case 'hotel3':
          img = hotel3;
          break;
          case 'hotel4':
            img = hotel4;
            break;
    default:
      break;
  }
  return img;
}

sendNuit = (hotel) => {
  let nuit = {
    hotel
  }
  this.props.createNuit(nuit);
}

render() {
  const {hotels, nuits} = this.props;
  let total = 0;
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
                  {/** HOTEL NUITS*/}
                  {map(hotels, (hotel, i) => (
                    <div className="hotel-view__item" key={i} onClick={() => this.sendNuit(hotel)}>
                    <div>
                      <img src={this.getImg(hotel)} alt={hotel.img} className="hotel-view__item_img"/>
                    </div>
                    <div className="hotel-view__item__content">
                      <div className="hotel-view__item__content__title">
                        {hotel.title}
                      </div>
                      <div className="hotel-view__item__content__body">
                        {hotel.body}
                      </div>
                    </div>
                    <div className="hotel-view__item__price">
                      <b>{hotel.price}&euro;</b>
                      <br/>
                      prix/nuit
                    </div>
                  </div>
                  ))}
                </main>
                <nav className="sidebar">
                    <div className="side-nav">
                    <div className="side-nav__item">
                        <b>PANIER</b>
                        </div>
                        {/** NUITS*/}
                        
                        {map(nuits, (nuit, i) => (
                          <div className="hotel-view-min__item" key={i}>
                          <div className="calcMe">{total = total + nuit.hotel.price} </div>
                          <div>
                            <img src={this.getImg(nuit.hotel)} alt={nuit.hotel.img} className="hotel-view-min__item_img"/>
                          </div>
                          <div className="hotel-view-min__item__price">
                            <b>{nuit.hotel.price}&euro;</b>
                            <br/>
                            <span className="hotel-view-min__item__price-sm">prix/nuit</span>
                          </div>
                        </div>
                        ))}
                        <div className="hotel-view-min__item__total">
                           <span>TOTAL</span> {total}&euro;
                        </div>
                        <div className={total>0 ? "" : "calcMe" }>
                        <button className="valider" onClick={this.openModal}>Reserver</button>
                        </div>
                    </div>
                </nav>
            </div>
            {/** MODAL */}
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Informations personnelles"
            >
              <h2 ref={subtitle => this.subtitle = subtitle}>Informations personnelles</h2>
              <br/><br/>
              <form>
                Email: <input /> (email obligatoire)<br/>
                Nom: <input /><br/>
                Prénom: <input /><br/>
                Adresse: <input /><br/>
              </form>
              <br/><br/>
              <button onClick={this.closeModal}>Valider</button>
              <button onClick={this.closeModal}>Annuler</button>
            </Modal>
        </div>
  );
}
}
const mapStateToProps = (state) => {
  return {
    hotels: state.hotels,
    nuits: state.nuits
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNuit: nuit => dispatch(nuitAction.createNuit(nuit))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);