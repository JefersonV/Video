import React from 'react';
import '../assets/styles/components/Carousel.scss'
// import PropTypes from 'prop-types';
import playIcon from '../assets/images/play-icon.png';
import plusIcon from '../assets/images/plus-icon.png';

//Data validation
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { setFavorite } from '../actions';


const CarouselItem = (props) => {
	const { id, cover, title, year, duration, contentRating, isList } = props;
	// Función que va a manejar el guardado hacia nuestros favoritos.
	const handleSetFavorite = () => {
		console.log('clickeado plus')
		props.setFavorite({
			id,
			cover,
			title,
			year,
			duration,
			contentRating,
		});
	};

	return (
    <div className="carousel-item">
			<img src={cover} alt={title} />
			<div className="carousel-item__details">
				<div>
					<img className="carousel-item__details--img" src={playIcon} alt="icon-play" />
					<img 
					className="carousel-item__details--img"
					src={plusIcon}
					alt="plus icon" 
					onClick={handleSetFavorite}
					/>
				
				</div>
				<p className="carousel-item__details--title">{title}</p>
				<p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
			</div>
		</div>
    )
}

CarouselItem.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	contentRating: PropTypes.string,
	duration: PropTypes.number,
};


const mapDispatchToProps = {
	setFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem);