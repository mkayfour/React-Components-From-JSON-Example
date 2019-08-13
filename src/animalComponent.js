import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function AnimalComponent(props){

    console.log("AnimalComponent Called");
    console.log(props);

    return(
        <div>
        <div className="section-heading">
        <h1>{ props.animalname} </h1>
        </div>
        <div className="section-content">
            <h3> { props.animalLabel} population in { props.country} : { props.animalCount }  </h3>
            {/* <h2> { props.animalname} population in { props.country} : { props.animalpopulation}  </h2>                  
            <h2> { props.animalname} population in { props.country}  : { props.animalpopulation}  </h2>
            <h2> { props.animalname} population in { props.country}  : { props.animalpopulation}  </h2>
            <h2> { props.animalname} population in { props.country}  : { props.animalpopulation} </h2> */}
        </div>
        </div>
    );

};

export default AnimalComponent;