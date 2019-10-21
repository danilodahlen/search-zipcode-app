import React from 'react';
import LabelError from '../template/labelError';

export default props => (
    <div>
        <form className="form">
            <div className="form-group">
                <label for="txtZIP">Search for zip code:</label>
                <input type="text" className="form-control" id="txtZIP" placeholder="06458-620"
                    onChange={ props.changeValue }
                    value={ props.code }
                    onKeyPress={ props.keyPress }
                >
                </input>
                <LabelError errorMenssager={ props.errorMenssager }/>
            </div>
            <button className="btn btn-primary" id="btnSearch"
                onClick={ props.searchValue }
            >Search</button>
            <button className="btn btn-default" id="btnClear"
                onClick={ props.clearValue }
            >Clear</button>
        </form>
    </div> 
)   