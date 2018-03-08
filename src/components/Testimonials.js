import React from 'react';
import Testimonial from './Testimonial.js';


const Testimonials = props => (
	<div id="testimonials">
		<div className="container">
			<div className="row">
				<div className="col-xs-12">
					<h2>Testimonials</h2>
				</div>
			</div>

			<div className="row">
				<Testimonial
					img="/img/testimonials/john.jpg"
					name="John Michael"
					network="facebook"
					link="https://www.facebook.com/rockztar.jm/posts/1475653122471191:0"
					text="Predya is the next big exchange… clean ui, mobile friendly, smooth transaction and transparent platform. I have tried different types exchanges but this platform delivers what I want…"
					date="September 11, 2017, 01:49 PM" />
				<Testimonial
					img="/img/testimonials/tomo.jpg"
					name="Henry Ohanga"
					network="twitter"
					link="https://twitter.com/HenryOhanga/status/968945093389545472"
					text="Best new instant exchange service! Fast, easy, low fees..."
					date="February 28, 2018, 11:24 PM" />
				{/* <Testimonial
					img="/img/testimonials/hunterk.png"
					name="Hunterk13"
					network="bitcointalk"
					link="https://bitcointalk.org/index.php?topic=2165808.msg21736006#msg21736006"
					text="I traded $24,000 worth of BTC to LTC yesterday, great trustworthy exchange. Had a few hiccups but  everything was sorted out. Would use again. 😊"
					date="September 11, 2017, 07:51 PM" /> */}
			</div>
			
		</div>
	</div>
)

export default Testimonials;