import {EventEmitter} from 'events';
const CHANGE_EVENT = 'change';
import localStorage from 'localStorage';
const Auth =  Object.assign(EventEmitter.prototype,{
    emitChange(){
		this.emit(CHANGE_EVENT)
	},
	addChangeListener(callback){
		this.on(CHANGE_EVENT, callback)
	},
	removeChangeListener(callback){
		this.removeListener(CHANGE_EVENT, callback)
	},
    authenticate: (token, userDetails) => {
        localStorage.setItem("token", token);
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        Auth.emitChange();
    },
    isAuthenticated: () => {
        let userToken = localStorage.getItem("token");
        return !!userToken;
    },
    getUserDetails: () => {
        let userDetails = localStorage.getItem('userDetails');
        userDetails ? JSON.parse(userDetails) : null; 
    },
    getUserToken: () => {
        let userToken = localStorage.getItem("token");
        return userToken;
    },
    logout: () => {
        localStorage.clear();
        Auth.emitChange();
    }
});

export default Auth;