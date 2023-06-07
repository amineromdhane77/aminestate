import React, { Component } from 'react'


{/* importation component */}

export default class Counterr extends Component {
    constructor(){
        super()
        this.state={
            fullname:"amine"
          
        }
    }

  render() {
    return (
      <div style={{textAlign:"center",background:'grey',padding:'10px'}}>
        
        {
      // single-line test
  }
  </>
       <p>AMINE ROMDHANE est un informaticien spécialisé dans la programmation ou expressément impliqué dans le développement des applications du web, ou des applications qui sont exécutées à partir dun serveur web sur un navigateur web et qui utilisent le protocole HTTP comme vecteur de transmission de information</p>
       <div  style={{textAlign:"center",backgroundColor:'red', padding:'10px', width:'50vw'}}>

       <h1>Skills:</h1>
{
    /*
      mult-line
      test
    */
  }
       <p>Réception du brief du Directeur Artistique (DA) ou directement des équipes marketing et commerciales Intervention en support du DA sur l’élaboration de concepts créatifs et la conception des maquettes</p>
       <h1>Conception et réalisation des visuels:</h1>
       <p>Travail sur l’ergonomie et la réalisation des éléments graphiques d’un site web en accord avec l’identité graphique de l’annonceur : définition du zoning, travail sur l’expérience utilisateur, respect de la charte graphique… Conception des éléments graphiques (logos, pictos, animations…) et des visuels (site internet, emailing, …) à partir des maquettes réalisées en amon</p>
       <h1>Coordination de l’intégration:</h1>
       <p>Suivi du travail des intégrateurs et validation de la qualité du rendu</p>
       </div>
      </div>
            


    
    )
  }
}
