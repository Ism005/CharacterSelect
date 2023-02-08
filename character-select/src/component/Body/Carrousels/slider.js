import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../Chars/chars-data';

const Slider = () => {
    return (
        <div>
            <div className={'container-two'}>
                {data && data.map((card, IDX) => (
                    <div className={'card-two'}>
                        <div className={'card_header-one'}>
                            <img className={'card-pics'} src={card.img} alt={''} />
                        </div>
                        <div className={'card_body-two'}>
                            <h4 className={'card-title'}>{card.name}</h4>
                            <Link className='details-link' to={'/character/' + IDX}>Details</Link>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Slider;