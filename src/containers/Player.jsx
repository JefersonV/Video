import React, { useLayoutEffect } from 'react';
import '../assets/styles/Player.scss';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import NotFound from '../containers/NotFound';
const Player = (props) => {
  const { id } = props.match.params;
	const hasPlaying = Object.keys(props.playing).length > 0;

	useLayoutEffect(() => {
		props.getVideoSource(id)

	}, []);

  return hasPlaying ?(
		<div className='Player'>
			<video controls autoPlay>
				<source
					src='https://arepa.s3.amazonaws.com/baby-bg.mp4'
					type='video/mp4'
				/>
			</video>
			<div className='Player-back'>
				{/* <Link to='/'>  */}
					<button type='button' onClick={() => props.history.goBack()}>Regresar</button>
				{/* </Link> */} 
			</div>
		</div>
	): <NotFound />
};

const mapStateToProps = state => {
	return {
		playing:state.playing,
	}
};

const mapDispatchToProps = {
	getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player)