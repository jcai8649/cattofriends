import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({cats}) => {
    return (
       <Fragment>
           {
            cats.map((cat, i) => { 
            return (<Card 
                    key={i} 
                    id={cats[i].id} 
                    name={cats[i].name} 
                    email = {cats[i].email}
                    /> 
                );
            })
           }
      </Fragment> 
    )
}

export default CardList;