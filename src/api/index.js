import { version } from '../../package.json';
import { Router } from 'express';
import passwords from './passwords';
import displayReview from './display-review';

export default ({ config, db }) => {
	let api = Router();

	// mount the customer-reviews resource
	//api.use('/v1/customer-reviews', passwords({ config, db }));

  // mount the customer-reviews resource
  api.use('/v1/display-review', displayReview({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
