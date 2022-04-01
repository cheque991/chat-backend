import express from 'express';
import { userController } from '../controllers/user.controller.js';

export class Routes {
    routes(app = express.application){
        //Aqui se declaro todas las rutas del proyecto.

        app.get('/say-hello', userController.sayHello);
        app.get('/get-users', userController.getUsers);
        app.post('/api/create-user',userController.userRegister)
        app.post('/api/login',userController.userLogin)
        app.post('/api/load-conversation',userController.loadConversation);
        app.post('/api/save-message',userController.saveConversation);

    }
}