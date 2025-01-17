import React from 'react';
import { Link } from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";
import CardStyle from './style';

const CardProjects = ({ image, title, content, path }) => {
    return (

        <CardStyle>
            <div>
                <img src={image.path} alt={image.alt} title={image.title} />
            </div>

            <div className='body'>
                <div>
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>

                <div className='icon'>
                    <Link to={path} ><GoArrowUpRight /></Link>
                </div>
            </div>
        </CardStyle>
    );
}

export default CardProjects;