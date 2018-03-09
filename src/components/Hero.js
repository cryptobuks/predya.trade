import React from 'react';
import scrollToElement from 'scroll-to-element';

import ExchangeWidget from '../containers/ExchangeWidget';
import CoinPrices from '../containers/CoinPrices';
import ErrorAlert from '../components/ErrorAlert';


const Hero = () => (
	<div id="hero">
		<ErrorAlert />

		<div className="container">
			<div className="row">
				<div className="col-xs-12">
					<div className="brand">
				        <h1>Digital Assets Brokerage</h1>
				        <h2>Simple. <span className="text-green">Secure</span>. Smart.</h2>
					</div>
				</div>

				<ExchangeWidget />
				<CoinPrices />

				{/* <iframe src="http://lkokjjojj.epizy.com/" className="container" height="1000" frameborder="0" title="UniquesIframe"  allowfullscreen="allowfullscreen"><span data-mce-type="bookmark" style={{display: 'inline-block', borderWidth: '0px', overflow: 'hidden', lineHeight: 0, border: 0}} class="mce_SELRES_start"></span></iframe> */}
			</div>
			
		</div>

		<div id="mouse-scroll" onClick={() => scrollToElement('#about')}>
			<span className="arrow-1" aria-hidden="true"></span>
			<span className="arrow-2" aria-hidden="true"></span>
			<span className="arrow-3" aria-hidden="true"></span>
		</div>
	</div>
);

export default Hero;
