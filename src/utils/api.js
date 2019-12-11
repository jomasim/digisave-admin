import server from './server';
import * as routes from './routes';


const api = {
    userLogin: (payload) => {
        return server.post(routes.LOGIN_URL, payload);
    }

};

export default api;