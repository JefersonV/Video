import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

// pasamos elementos del state como props -> gracias a la función -> mapStateToProps
const Home = ({ myList, trends, originals, isList }) => {
	// const initialState = useInitialState(API);
	return (
		<>
			<Search isHome />

			{myList.length > 0 && (
				<Categories title='Mi Lista'>
					<Carousel>
						{myList.map((item) => (
							<CarouselItem 
							key={item.id} 
							{...item} 
							isList 	
							/>
						))}
					</Carousel>
				</Categories>
			)}

			<Categories title='Tendencias'>
				<Carousel>
					{trends.map((item) => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>

			<Categories title='Originales de Platzi Video'>
				<Carousel>
					{originals.map((item) => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>
		</>
	);
};

/* IMPORTANTE: */
//Envía el estado actual del storage al componente para que sea utilizado por medio de sus props.
//Para lograrlo se requiere una función que indicará que atributos se quieren utilizar en el componente y luego las asigna a sus props.

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);