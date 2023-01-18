import React from 'react';
import data from './chars-data';
import {Link} from "react-router-dom";
const CharsCard = () => {

    return (
        <div className={'container-one'}>
            {data && data.map((card, IDX) => (
                <div className={'card-one'}>
                    <div className={'card_header-one'}>
                        <img className={'card-pics'} src={card.img} alt={''}/>
                    </div>
                    <div className={'card_body-one'}>
                        <h4 className={'card-title'}>{card.name}</h4>
                        <Link className="details-link" to={"/character/"+IDX}>Details</Link>
                    </div>
                </div>
            ) )}

        </div>
    );
};
export default CharsCard;