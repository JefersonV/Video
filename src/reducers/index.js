const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_FAVORITE':
			return {
				//state: Es el estado que el Stage envía al Reduce. Por lo tanto, es el estado que se va a actualizar.
				...state,
				
				//action: Es la acción encapsulada que fue enviada por el componente al Reduce para que se actualice el estado del Stage.
				myList: [...state.myList, action.payload],
			};

			case 'DELETE_FAVORITE':
				return {
					 ...state,
					 myList: state.myList.filter(items => items.id ==! action.payload)
				}

			case 'LOGIN_REQUEST':
				return {
					...state,
					//le transmitimos el objeto que creamos en el action (login)
					user: action.payload,
				}	
			
			case 'LOGOUT_REQUEST':
				return {
					...state,
					user: action.payload,

				}

			case 'REGISTER_REQUEST':
				return {
					...state,
					user: action.payload,
				}	
			
		default:
			return state;
	}
};

export default reducer;