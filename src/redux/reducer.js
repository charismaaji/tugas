const initialState = {
  title: 'Redux',
  description: 'Learning State Management with Redux',
  dataUsers: [],
  userData: [
    {username: 'charis', password: '123'},
    {username: 'aji', password: '321'},
  ],
  isLogin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE-DATA':
      return {
        ...state,
        students: state.students.filter(item => item.id != action.payload),
      };
    case 'CHANGE-TITLE':
      return {
        ...state,
        title: action.payload,
      };
    case 'FIREBASE':
      return {
        ...state,
        dataUsers: action.payload,
      };
    case 'USER-DATA':
      return {
        ...state,
        userData: action.payload,
      };
    case 'ADD-DATA':
      return {
        ...state,
        userData: [...state.userData, action.payload],
      };
    case 'USER-LOGIN':
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
