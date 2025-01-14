import React from 'react';
import { Link } from 'react-router-dom';
const CardProjects = ({image, title, content, path}) => {
    return (
        <div>
            <div>
                <img src={image.path} alt={image.alt} title={image.title} />
            </div>
            <div>
                <div>
                    <span>{title}</span>
                    <p>{content}</p>
                </div>

                <div>
                    <Link to={path} >icone</Link>
                </div>
            </div>
        </div>
    );
}

export default CardProjects;