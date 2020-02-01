import React from 'react';
import PropType from 'prop-types';

const MediaObjectList = (props) => {
    return (
        <li className="media">
            <img src={props.datos.img} className="mr-3" alt="..." />
            <div className="media-body">
                <h5 className="mt-0 mb-1">{props.datos.title}</h5>
                {props.datos.description}
            </div>
        </li>
    )
}

MediaObjectList.propTypes = {
    datos: PropType.object.isRequired
}

export default MediaObjectList;