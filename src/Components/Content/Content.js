import React, { useEffect, useState } from 'react';
import "../../Styling/App.css";
import { Chart } from '../Chart';
import { Sidebar } from './Sidebar';

import { getDataCSV } from '../../helpers';

export const Content = ({ nameModel }) => {
    const [nameImage, setNameImage] = useState('COVID-19 in Europe english');
    const flagModel = nameModel === 'editViews';
    const currentImg = !flagModel && require(`../../assets/imgs/${nameModel}/${nameImage}.png`);
    const file = require(`../../assets/files/${nameImage}.csv`);
    const [rowsState, setRowsState] = useState({ labels: [], data: [] });


    useEffect(() => {
        const data = getDataCSV(file);
        data.then(rows => { setRowsState(rows); })
    }, [file])

    return (
        <div className="main-content">
            <Sidebar setNameImage={setNameImage} nameModel={nameModel} />
            {flagModel ?
                <Chart rows={rowsState} />
                :
                <div className="container-img-disasters">
                    <img src={currentImg} alt="graph-image" />
                </div>
            }
        </div>
    )
}

