import React, { useState, useEffect } from 'react';
import playIcon from '../assets/images/play-icon.png';
import plusIcon from '../assets/images/plus-icon.png';
import PropTypes from 'prop-types';

function CarouselItem( { cover, title, year, contentRating,duration }) {
  
	const [peliculas, setPeliculas] = useState([])
	function registra (e) {
		// e.preventDefault();
		console.log(e.target)
	}

	return (
    <div className="carousel-item">
			<img src={cover} alt={title} />
			<div className="carousel-item__details">
				<div>
					<img className="carousel-item__details--img" src={playIcon} alt="icon-play" />
					<img onClick={registra} className="carousel-item__details--img" src={plusIcon} alt="icon-plus" />
						
				</div>
				<p className="carousel-item__details--title">{title}</p>
				<p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
			</div>
		</div>
    )
}

CarouselItem.PropTypes = { 
	cover: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	contentRating: PropTypes.string,
	duration: PropTypes.number

}

export default CarouselItem;