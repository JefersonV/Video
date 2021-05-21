import React from 'react';

function CarouselItem() {
    return (
    <div className="carousel-item">
			<img width="250px" src="https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?cs=srgb&dl=pexels-alex-andrews-816608.jpg&fm=jpg" alt="imagen carousel" />
			<div className="carousel-item__details">
				<div>
					<img className="carousel-item__details--img" width="250px" src="https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?cs=srgb&dl=pexels-alex-andrews-816608.jpg&fm=jpg"alt="" />
					<img className="carousel-item__details--img" width="250px" src="https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?cs=srgb&dl=pexels-alex-andrews-816608.jpg&fm=jpg"alt="" />
						
				</div>
				<p className="carousel-item__details--title">Título descriptivo</p>
				<p className="carousel-item__details--subtitle">2020 16+ 114 minutos</p>
			</div>
		</div>
    )
}

export default CarouselItem;