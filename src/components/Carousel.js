import React from 'react';
import CarouselItem from './CarouselItem';
import Categories from './Categories';
import '../assets/styles/components/Carousel.scss';

class Carousel extends React.Component {
    render() {
        return (
				
					<section className="carousel">
					<Categories />
					<div className="carousel__container">
						<CarouselItem />
						<CarouselItem />
						<CarouselItem />
						<CarouselItem />
						<CarouselItem />
						
					</div>
        </section>
        )
    }
}

export default Carousel;