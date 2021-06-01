const reducer = (state, action) => {
	//primer reducer
	// reduce usará switch para separar la lógica por cada tipo de acción que tendremos en Redux.
	switch (action.type) {
		case 'SET_FAVORITE':
			return {
        ...state,
        myList: state.myList.some(items => items.id === action.payload.id)
          ? [...state.myList]
          : [...state.myList, action.payload],
      };
      break;

			//default mandamos el state como lo encontramos
		default:
			return state;
	}
}

export default reducer;