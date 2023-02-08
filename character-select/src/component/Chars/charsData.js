import { React, useState } from 'react';
import elenaart from '../../img/elenaart.webp';
import ibukiart from '../../img/ibukiart.webp';
import dudleyart from '../../img/dudleyart.webp';
import seanart from '../../img/seanart.webp';
import kenart from '../../img/kenart.webp';

const CharsData = () => {
    const [charsData, setCharsData] = useState([
        { name: 'Elena', img: elenaart },
        { name: 'Ibuki', img: ibukiart },
        { name: 'Dudley', img: dudleyart },
        { name: 'Sean', img: seanart },
        { name: 'Ken', img: kenart },
    ]);

    return (
        <div>

        </div>
    );
};

export default CharsData;