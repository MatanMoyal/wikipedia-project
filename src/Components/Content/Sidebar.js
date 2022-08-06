import React, { useEffect, useState } from 'react';
import { DataDisasters } from './helperContent';
import { imgArray } from '../../helpers';
export const Sidebar = ({ setNameImage, nameModel }) => {
    const [idChoose, setIdChoose] = useState("0_0");

    const onClickCountry = (id) => {
        setNameImage(imgArray[id]);
        setIdChoose(id);
    }

    useEffect(() => {
        setNameImage("COVID-19 in Europe english");
        setIdChoose("0_0");
    }, [nameModel]);

    return (
        <div className="sidebar">
            {Object.keys(DataDisasters).map((disaster, i) => {
                return (
                    <ul key={i}>
                        <h2>{disaster}</h2>
                        {DataDisasters[disaster]
                            .map((country, j) =>
                                <li
                                    key={j}
                                    className={`${i}_${j}` === idChoose && "liIsClicked"}
                                    onClick={onClickCountry.bind(null, `${i}_${j}`)}>{country}</li>
                            )}
                    </ul>
                )
            })}
        </div>
    )
}
