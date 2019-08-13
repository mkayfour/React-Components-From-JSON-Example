import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AnimalComponent from './animalComponent.js';

class App extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      animalname: null,
      animalCount: null,
    }
  }

  render() {

    const TigerList = [
      { animalLabel: 'Tiger', country: "USA", animalCount: "50" },
      { animalLabel: "Tiger", country: "India", animalCount: "100" },
      { animalLabel: "Tiger", country: "China", animalCount: "30" },
      { animalLabel: "Tiger", country: "Nepal", animalCount: "30" },
      { animalLabel: "Tiger", country: "Thailand", animalCount: "60" },
    ]


    const LionList = [
      { animalLabel: 'Lion', country: "USA", animalCount: "43" },
      { animalLabel: "Lion", country: "India", animalCount: "34" },
      { animalLabel: "Lion", country: "China", animalCount: "43" },
      { animalLabel: "Lion", country: "Nepal", animalCount: "34" },
      { animalLabel: "Lion", country: "Thailand", animalCount: "234" },
    ]

    const CheetahList = [
      { animalLabel: 'Cheetah', country: "USA", animalCount: "54" },
      { animalLabel: "Cheetah", country: "India", animalCount: "43" },
      { animalLabel: "Cheetah", country: "China", animalCount: "23" },
      { animalLabel: "Cheetah", country: "Nepal", animalCount: "54" },
      { animalLabel: "Cheetah", country: "Thailand", animalCount: "34" },
    ]
    const DeerList = [
      { animalLabel: 'Deer', country: "USA", animalCount: "324" },
      { animalLabel: "Deer", country: "India", animalCount: "342" },
      { animalLabel: "Deer", country: "China", animalCount: "54" },
      { animalLabel: "Deer", country: "Nepal", animalCount: "344" },
      { animalLabel: "Deer", country: "Thailand", animalCount: "54" },
    ]

    const PythonList = [
      { animalLabel: 'Python', country: "USA", animalCount: "465" },
      { animalLabel: "Python", country: "India", animalCount: "165" },
      { animalLabel: "Python", country: "China", animalCount: "56" },
      { animalLabel: "Python", country: "Nepal", animalCount: "23" },
      { animalLabel: "Python", country: "Thailand", animalCount: "324" },
    ]

    return (
      <div align="center" className="mainRet">


        <div className="mainWindow">

          <div className="section" id="section1">
            <h1> Tiger Population Stats</h1>
            <div className="reactGen">
            {TigerList.map(AnimalComp => (
              <AnimalComponent animalLabel={AnimalComp.animalLabel} country={AnimalComp.country} animalCount={AnimalComp.animalCount} />

            ))}
            </div>
          </div>

          <div className="section" id="section2">
            <h1> Lion Population Stats</h1>
            <div className="reactGen">

            {LionList.map(AnimalComp => (
              <AnimalComponent animalLabel={AnimalComp.animalLabel} country={AnimalComp.country} animalCount={AnimalComp.animalCount} />

            ))}
            </div>
          </div>

          <div className="section" id="section3">
            <h1> Cheetah population Stats</h1>
            <div className="reactGen">

            {CheetahList.map(AnimalComp => (
              <AnimalComponent animalLabel={AnimalComp.animalLabel} country={AnimalComp.country} animalCount={AnimalComp.animalCount} />

            ))}
            </div>
          </div>


          <div className="section" id="section4">
            <h1>Deer Population Stats</h1>
            <div className="reactGen">
            {DeerList.map(AnimalComp => (
              <AnimalComponent animalLabel={AnimalComp.animalLabel} country={AnimalComp.country} animalCount={AnimalComp.animalCount} />

            ))}
            </div>
          </div>


          <div className="section" id="section5">
            <h1>Python Population Stats</h1>
            <div className="reactGen">

            {PythonList.map(AnimalComp => (
              <AnimalComponent animalLabel={AnimalComp.animalLabel} country={AnimalComp.country} animalCount={AnimalComp.animalCount} />

            ))}
            </div>
          </div>

        </div>
      </div>
    );
  };

}

export default App;
