import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => (
	<footer>
		<div className="container text-center">
			<ul>
				<li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
				{/* <li><Link to="/privacy">Privacy Policy</Link></li> */}
				{/*<li><Link to="/refund-cancellation">Refund and Cancellation Policy</Link></li>*/}
				{/* <li> 
				<div class="btn fb-share-button" data-href="http://exchange.bitnoww.com" data-layout="button" data-size="large" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fexchange.bitnoww.com%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share to Facebook</a></div>
				</li> */}
			</ul>

			<p className="text-muted">All rights reserved, 2018 Predya</p>
		</div>
	</footer>
);

export default Footer;
