import config from "constants/config";
import axios from 'axios';

const Singleton = (function () {
    var instance;

    function createInstance() {
        var object = axios.create({
            baseURL: config.BASE_URL,
            timeout: 30000,
        });
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

export default Singleton;