import express from 'express'
import { authService } from '../backend/services/auth.service.js';

var routerAuth = express.Router()

routerAuth

    .post ('/signup', authService.signup)
    .post ('/signin', authService.signin)
    .post('logout', authService.logout)

export default routerAuth;
