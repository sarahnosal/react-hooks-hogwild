import React, { useState } from 'react'
import HogDetails from './HogDetails'

function HogCard({ hog }) {
    const [isHidden, setIsHidden] = useState(false)
    const [showDetails, setShowDetails] = useState(false)

    function handleDetailsClick() {
        setShowDetails((showDetails) => !showDetails);
    }

    //hide the hog
    if (isHidden) return null;
    //show the hog
    const { name, specialty, image} = hog;

    return (
        <div className='ui card eight wide column'>
            <img src={image} alt='hogPic' />
            <h3 className='header'>{name}</h3>
            <div className='description'>Specialty: {specialty}</div>
            {showDetails ? <HogDetails hog={hog} /> : null}
            <button className='ui button' onClick={handleDetailsClick}>
                {showDetails ? 'Less Info' : 'More Info'}
            </button>
            <button className='ui button' onClick={() => setIsHidden(true)}>Hide Me{''}
                <span role='img' aria-label='snout'>
                🐽
                </span>
            </button>

        </div>
    )
}

export default HogCard