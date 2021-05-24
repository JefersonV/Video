import React from 'react';
import playIcon from '../assets/images/play-icon.png';
import plusIcon from '../assets/images/plus-icon.png';

function CarouselItem( { cover, title, year, contentRating,duration }) {
    return (
    <div className="carousel-item">
			<img src={cover} alt={title} />
			<div className="carousel-item__details">
				<div>
					<img className="carousel-item__details--img" src={playIcon} alt="icon-play" />
					<img className="carousel-item__details--img" src={plusIcon} alt="icon-plus" />
						
				</div>
				<p className="carousel-item__details--title">{title}</p>
				<p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
			</div>
		</div>
    )
}

export default CarouselItem;