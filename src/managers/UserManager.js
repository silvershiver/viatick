export default class UserManager {

    static myInstance = null;

    _isLogin = false

    static getInstance() {
        if (UserManager.myInstance == null) {
            UserManager.myInstance = new UserManager();
        }

        return this.myInstance;
    }

    isLogin() {
        return this._isLogin
    }

    setLogin(isLogin) {
        this._isLogin = isLogin
    }
}