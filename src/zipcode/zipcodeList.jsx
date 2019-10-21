import React from 'react'

export default props => {

    const buildBody = () => {
        const list = props.list || [];

        return list.map(object => (
            <tr key={object.cep}>
                <td>{ object.cep }</td>
                <td>{ object.logradouro }</td>
                <td>{ object.bairro }</td>
                <td>{ object.localidade }</td>
                <td>{ object.uf }</td>
            </tr>
        ));
    }

    return(
    <div>
        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th scope="col">Zip code</th>
                <th scope="col">Avenue/Street</th>
                <th scope="col">District</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
            </tr>
            </thead>
            <tbody>
                {buildBody()}
            </tbody>
        </table>
    </div>)
}