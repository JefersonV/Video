import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFavorite } from '../actions/index';
import playIcon from '../assets/images/play-icon.png';
import plusIcon from '../assets/images/plus-icon.png';

const CarouselItem = (props) => {
	const { cover, title, year, contentRating,duration } = props;
	// Función que va a manejar el guardado hacia nuestros favoritos.
	const handleSetFavorite = () => {
		props.setFavorite(
			{
				cover, title, year, contentRating, duration
			})
	}

	return (
    <div className="carousel-item">
			<img src={cover} alt={title} />
			<div className="carousel-item__details">
				<div>
					<img className="carousel-item__details--img" src={playIcon} alt="icon-play" />
					<img 
					className="carousel-item__details--img"
					src={plusIcon}
					alt="icon-plus" 
					onClick={handleSetFavorite}
					/>
				
				</div>
				<p className="carousel-item__details--title">{title}</p>
				<p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
			</div>
		</div>
    )
}

/* CarouselItem.PropTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	contentRating: PropTypes.string,
	duration: PropTypes.number,
}
 */

const mapDispatchToProps = {
	setFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem)