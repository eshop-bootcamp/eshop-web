import {EventEmitter} from 'events';
const CHANGE_EVENT = 'change';
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
        this.emitChange();
    },
    isAuthenticated: () => {
        // let userToken = localStorage.getItem("token");
        // return !!userToken;
        return false;
    },
    getUserDetails: () => {
        let userDetails = localStorage.getItem('userDetails');
        userDetails ? JSON.parse(userDetails) : null; 
    },
    logout: () => {
        localStorage.clear();
        this.emitChange();
    }
});

export default Auth;