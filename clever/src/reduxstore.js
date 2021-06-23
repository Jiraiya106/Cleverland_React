import { createStore } from 'redux';

const INITIAL_STATE = {
    name: 'Evgen',
    age: '30',
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      	case 'CHANGE_NAME': {
					return {
						...state,
						name: action.name,
					}
				}

				default: 
					return state;	
    }
    return state
};

const store = createStore(reducer);
console.log('store:', store.getState());

const changeName = {
    type: 'CHANGE_NAME',
    name: 'Ivan',
};

store.dispatch(changeName);


