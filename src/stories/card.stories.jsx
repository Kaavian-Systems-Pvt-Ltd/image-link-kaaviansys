import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from '../../dist/bundle';
// import { Card } from '../components/Requirements/Card';
import { CardData } from './CardData';
const stories = storiesOf ('Gallery Modal' , module);


stories.add ('Default Gallery' , ()=> {
    // const [ CardData , setCardData ] =useState();

    return (
        <div className='home-cards'>
            <Card details={CardData} />
        </div>

    );
});

stories.add('Medium Gallery',()=>{
    return(
        <div className='medium'>
            <Card details={CardData}/>
        </div>
    )
})