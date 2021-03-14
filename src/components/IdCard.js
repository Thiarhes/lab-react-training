import React from 'react';


function IdCard({ firstName, lastName, gender, birth, height, picture }) {
    return (
        <div className="idCard">
            <div className="pic">
                <img src={picture} alt="imagem" />
            </div>
            <div className="personalInformation">
                <h6>First name: {firstName}</h6>
                <h6>Last name: {lastName}</h6>
                <h6>Gender: {gender}</h6>
                <h6>Height: {height}</h6>
                <h6>Birth: {birth}</h6>
            </div>
        </div>
    )
}


export default IdCard;
















