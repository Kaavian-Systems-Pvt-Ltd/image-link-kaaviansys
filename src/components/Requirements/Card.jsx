import React, { useState } from 'react';
import './card.css';
export const Card = (data) => {
    const [noOfElement, setnoOfElement] = useState(3);
    const loadmore = () => {
        setnoOfElement(noOfElement + noOfElement);
    };
    const Slice = data.details?.slice(0, noOfElement);
    let refreshPage = function () {
        window.location.reload(false);
    };
    return (
        <body>
            <div>
                <div><br/><br/><br/>
                    <div className='maindiv'><br/>
                        {Slice?.map((value, index) => (
                            <div className='card' key={index}>
                                <div className='card-image'>
                                    <img className='imagecn' src={value.img} alt='' />
                                </div>
                                <div>
                                    <p className='card-title'>{value.title}</p>
                                    <p className='card-desc'>{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div>           
                <div className='cardbutton'>
                <button type='button' className='cancelbtn' onClick={refreshPage}>Cancel</button>
                <button type='button' className='morebtn' onClick={() => loadmore()}>LoadMore</button><br /><br />
                </div>
            </div>
        </body>

    );
};


