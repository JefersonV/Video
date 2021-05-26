import React, { useState, useEffect } from 'react';
import Main from '../components/Main';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';

import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const url_api = 'https://my-json-server.typicode.com/JefersonV/JSON-server/initialState'
const Home = () => {
	const initialState = useInitialState(url_api)
	console.log('Data de la API:')
	console.log(initialState)
	return(
		<div className="app">
			
			<Main />
			
			{initialState.mylist.length > 0 && (
				<Categories title="Mi Lista">
					<Carousel>
						<CarouselItem />
					</Carousel>
				</Categories>
			)}
			
			<Categories title="Tendencias">
				<Carousel>
					
					{initialState.trends.map(item => 
					<CarouselItem key={item.id} {...item} />
					)}
					
				</Carousel>
			</Categories>
			<Categories title="Originales de Platzi Vídeo">
				<Carousel>
					{initialState.originals.map(item => 
						<CarouselItem key={item.id} {...item}/>
					
					)}
				</Carousel>
			</Categories>
	
		</div>
	);
}

export default Home;