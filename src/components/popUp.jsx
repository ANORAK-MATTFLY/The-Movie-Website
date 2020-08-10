import React, {useRef, useEffect} from 'react'
import {TweenMax, Power3} from 'gsap';

function Popup({ selected, closePopup }) {
	let animatedCard = useRef(null);
	useEffect(()=>{
	  TweenMax.to(
		animatedCard,
		.4,
		{
		  opacity:1,
		  y:-20,
		  ease: Power3.easeInOut,
		  delay: .2
		}
		)
	}, [])
	return (
		<section className="popup" >
			<div className="content">
				<h2>{ selected.original_title } <span>({ selected.release_date })</span></h2>
				<p className="rating">Rating: {selected.popularity}</p>
				<div className="plot">
					<img ref={el => {animatedCard = el}} src={`https://image.tmdb.org/t/p/w500/${selected.poster_path}`} />
					<p className="overview">{selected.overview}</p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
			</div>
		</section>
	)
}

export default Popup;