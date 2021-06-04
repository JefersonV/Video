import React from 'react';
import '../assets/styles/components/Carousel.scss'
// import PropTypes from 'prop-types';
import playIcon from '../assets/images/play-icon.png';
import plusIcon from '../assets/images/plus-icon.png';
import removeIcon from '../assets/images/delete-icon.png';
//Data validation
import PropTypes from 'prop-types';
//Redux
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions';
//Router
import { Link } from 'react-router-dom';

const CarouselItem = (props) => {
	const { id, cover, title, year, duration, contentRating, isList } = props;
	// Función que va a manejar el guardado hacia nuestros favoritos.
	const handleSetFavorite = () => {
		console.log('clickeado plus')
		/* IMPORTANTE: */
		// Gracias a connect y las importaciones de las actions.
		// Podemos usar la función como un prop
		props.setFavorite({
			id,
			cover,
			title,
			year,
			duration,
			contentRating,
		});
	};

	const handleDeleteFavorite = (itemId) => {
		props.deleteFavorite(itemId) 
	}

	return (
    <div className="carousel-item">
			<img src={cover} alt={title} />
			<div className="carousel-item__details">
				<div>
					<Link to={`/player/${id}`}>

						<img 
						className="carousel-item__details--img" 
						src={playIcon} 
						alt="icon-play" 
						
						/>
					</Link>

					{isList ?
					<img 
						className="carousel-item__details--img" 
						src={removeIcon} 
						alt="icon remove"
						onClick={() => handleDeleteFavorite(id)} />: 
					<img 
						className="carousel-item__details--img"
						src={plusIcon}
						alt="plus icon" 
						onClick={handleSetFavorite}
					/>
					}

			
				
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

/* IMPORTANTE */
//Segundo parámetro: Envía al Reduce la acción que hemos encapsulado.
//al ser llamada por el import en el componente se le atribuye su props.
const mapDispatchToProps = {
	setFavorite,
	deleteFavorite,
}

export default connect(null, mapDispatchToProps)(CarouselItem);