import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from '../../dist/bundle';
// import { Card } from '../components/Requirements/Card';
import { CardData } from './CardData';
const stories = storiesOf ('Gallery Modal' , module);


stories.add ('Gallery' , ()=> {

    return (
        <div className='home-cards'>
            <Card details={CardData} />
        </div>  

    );
});