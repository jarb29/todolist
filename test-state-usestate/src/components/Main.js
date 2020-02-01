import React from 'react';
import MediaObjectList from './MediaObjectList';
import ListaMaterias from './ListaMaterias';

const Main = () => {

    const info = [
        {img: "http://placehold.it/50x50", title: "Titulo 1", description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."},
        {img: "http://placehold.it/50x50", title: "Titulo 2", description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."},
        {img: "http://placehold.it/50x50", title: "Titulo 3", description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."},
        {img: "http://placehold.it/50x50", title: "Titulo 4", description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."},
    ];

    const materias = [
        'PHP',
        'C#',
        'Perl',
        'Python',
        'C++',
        'Java',
        'JavaScript',
        'Ruby'
    ];

    const materias2 = [
        'Scala',
        'Go',
        'VB.net',
        'F#',
        'Cobol',
        'Switf'
    ]

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ul className="list-unstyled">
                        {
                            info.map((item, i) => {
                                return <MediaObjectList key={i} datos={item}/>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ListaMaterias materias={materias} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <br/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ListaMaterias materias={materias2} />
                </div>
            </div>
        </div>
    )
}

export default Main;