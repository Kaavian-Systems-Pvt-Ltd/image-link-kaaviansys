import ReactReadMoreReadLess from "react-read-more-read-less";
import React , { useState } from 'react';
import { storiesOf } from '@storybook/react';
import {Card} from '../components/index';
import {CardData} from  './CardData';
const stories = storiesOf('App Test', module);


stories.add('App', () => {
    return (
        <>
            <div className="home-cards">
                <Card details={CardData} />
            </div>
        </>
    )
});