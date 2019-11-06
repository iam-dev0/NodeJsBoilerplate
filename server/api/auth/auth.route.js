import express from 'express';
import validate from 'express-validation';
import expressJwt from 'express-jwt';
import paramValidation from '../../globalvalidation/param-validation';
import authCtrl from './auth.controller';
import config from '../../../config/config';

// eslint-disable-next-line no-trailing-spaces
const router = express.Router();

/** POST /api/auth/login - Returns token if correct username and password is provided */
router.post('/login', validate(paramValidation.login), authCtrl.login);

/** GET /api/auth/random-number - Protected route,
 * needs token returned by the above as header. Authorization: Bearer {token} */
router.get(
  '/random-number',
  expressJwt({ secret: config.jwtSecret }),
  authCtrl.getRandomNumber
);

module.exports = router;
