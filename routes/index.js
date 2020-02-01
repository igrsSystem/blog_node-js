const express = require('express');
const controllerHome = require('../controllers/homeController');
const controllerUser = require('../controllers/userController');
const postController = require('../controllers/postController');
const imageMiddleware = require('../middlewares/imageMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();
router.get('/',controllerHome.index);
router.get('/users/login', controllerUser.login);
router.post('/users/login',controllerUser.loginAction);
router.get('/users/logout',controllerUser.logout);

router.get('/users/register',controllerUser.register );
router.post('/users/register',controllerUser.registerAction);

router.get('/post/add',authMiddleware.isLogged ,postController.add);
router.post('/post/add', 
   authMiddleware.isLogged,
    imageMiddleware.upload,
    imageMiddleware.resize,
    postController.addAction
);

router.get('/post/:slug/edit',authMiddleware.isLogged,postController.edit);
router.post('/post/:slug/edit',
    imageMiddleware.upload,
    imageMiddleware.resize,
    postController.editAction
);

router.get('/post/:slug',postController.view);




module.exports = router;

