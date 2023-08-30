import React from 'react';
import { useNavigate } from 'react-router-dom';

const HistoyBackButton = ({ onClickCallback }) => {

    const navigate = useNavigate();

    const goBack = () => {
        onClickCallback();
        navigate(-1);
    };

    return (
        <button className="back-button" onClick={goBack}> &#8592; </button>
    );
}

export default HistoyBackButton;