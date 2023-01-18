import React from 'react';
import {useParams} from "react-router-dom";
import data from './chars-data'
import Slider from "../Body/Carrousels/slider";
const Detail = () => {
    const {id} = useParams();
    console.log(data[id]);
    return (
        <div className={'detail-all'}>
            <div className={'wrapper'}>
                <div className={'right'}>
                    <div className={'card-one'}>
                        <div className={'detail-title'}>{data[id].name}</div>
                        <img className={'detail-pics'} src={data[id].img} alt={''}/>
                    </div>
                </div>
                <div className={'left'}>
                    <div className={'card-content'}>
                        <p className={'detail-text'}> {data[id].desc}</p>
                    </div>
                </div>
            </div>
            <div className="slide-container">
                <Slider/>
            </div>
        </div>
    );
};

export default Detail;