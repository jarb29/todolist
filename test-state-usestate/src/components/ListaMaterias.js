import React from 'react';
import PropTypes from 'prop-types';

const ListaMaterias = (props) => {
    return (
        <div class="list-group">
            {
                props.materias.map((item, i) => {
                    return (
                        <button type="button" class="list-group-item list-group-item-action" key={i}>
                            {item}
                        </button>
                    )
                })
            }
            
            
        </div>
    )
}

ListaMaterias.propTypes = {
    materias: PropTypes.array.isRequired
}

export default ListaMaterias;