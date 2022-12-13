import React from 'react';
import { storiesOf } from '@storybook/react';
import { Card } from '../components/index.js';
import { CardData } from './CardData';
// import '../components/Requirements/card.css';

// export default {
//     title: ''
// }
const stories = storiesOf ('Gallery Modal' , module);


stories.add ('Default Gallery' , ()=> {
    return (
        <div className='home-cards'>
            <Card details={CardData} />
        </div>

    );
});