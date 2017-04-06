import { applyMiddleware, createStore }  from 'redux';
import { promiseMiddleware } from './middleware';

const defaulState = { 
	appName: 'CONDUIT App', 
	articles: null
}; 
const reducer = function(state = defaulState, action){
	switch (action.type) {
		case 'HOME_PAGE_LOADED':
			return { ...state, articles: action.payload.articles };
	}
	return state;
};

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

export default store;