import React from 'react';

export default props => (
    <div>
        <label className="label-error" for="lblErro">{ props.errorMenssager || "" }</label>
    </div>    
)