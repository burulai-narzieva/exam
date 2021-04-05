import React from 'react'
import css from './Card.module.css'


export const Card = (props) => {

  const Click = () => {
    document.getElementById('sum').innerHTML = props.sum + ' ' +  props.title
  }
 return(
   
  <div onClick={Click}  >
    <div className={css.Card} >
    <span>{props.title} </span>
    <p>{props.sum}</p>
    <img src={props.img} className={css.Pic}/>
   
  </div>
  </div>
)


}


