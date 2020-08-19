import React, { Component } from 'react'; //import React Component
import './style.css';
import {groupBy} from 'lodash';
import {find} from 'lodash';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pets: this.props.pets,
      adopted: false
    }
  }

  adopt = (petName) => {
    let pet = find(this.state.pets, ['name', petName]);
    pet.setState({adopted: true});

    return this.state;
  }

  render() {
    console.log(this.state.pets);
    return (
      <React.Fragment>
        <header className="jumbotron jumbotron-fluid py-4">
          <div className="container">
            <h1>Adopt a Pet</h1>
          </div>
        </header>

        <main className="container">
          <div className="row">
            <div id="navs" className="col-3">
              <BreedNav breeds={Object.keys(groupBy(this.state.pets, 'breed'))}/>
              <AboutNav />
            </div> 

            <div id="petList" className="col-9">
              <PetList pets={this.state.pets}/>
            </div>
          </div>
        </main>

        <footer className="container">
          <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;

class AboutNav extends Component {

  render() {
    return (
        <nav id="aboutLinks">
          <h2>About</h2>
          <ul className="list-unstyled">
            <li><a href="#/">How to Adopt</a></li>
            <li><a href="#/">Volunteering</a></li>
            <li><a href="#/">Events</a></li>
            <li><a href="#/">Donate</a></li>
            <li><a href="#/">About Us</a></li>
          </ul>
        </nav>
    )
  }
}

class BreedNav extends Component {

  render() {  
    let breedsArray = this.props.breeds.map((item) => {
      return (
        <li key={item}>
          <a href="">{item}</a>
        </li>
      )
    })

    return (
      <nav id="breedLinks">
        <h2>Pick a Breed</h2>
        <ul className="list-unstyled">
          {breedsArray}
        </ul>            
      </nav>
    )
  }
}

class PetCard extends Component {

  
  
  render() {
    let displayedName = this.props.pets.name;
    if (this.props.pets.adopted == true) {
      displayedName = displayedName+" (Adopted)";
    }

    return (
      <div className="card">
        <img className="card-img-top" src={this.props.pets.img} alt={this.props.pets.name} />
        <div className="card-body">
          <h3 className="card-title">{displayedName}</h3>
          <p className="card-text">{this.props.pets.sex} {this.props.pets.breed}</p>
        </div>
      </div>
    )
  }
}

class PetList extends Component {

  render() {

    let petsArray = this.props.pets.map((pet) => {
      return <PetCard pets={pet} onClick={this.adopt}/>
    })

    return (
      <React.Fragment>
        <h2>Dogs for Adoption</h2>
        <div className="card-deck">
          {petsArray}
        </div>
      </React.Fragment>
    )
  }
}