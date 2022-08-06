import React from 'react';
import { DescriptionDisasters } from './helperContent';
import '../../Styling/App.css';
import formula from '../../assets/formulaRegression.png';
export const Description = ({ nameModel }) => {
    return (
        <div className="description-disaster">
            {DescriptionDisasters[nameModel]}
            {nameModel === "Regression" && <img src={formula} alt="" />}
        </div>
    )
}
