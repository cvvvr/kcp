


const initialState = {
  user: {
    username: "",
    useremail: "",
    rankImage: "",
  }
}

export default function reducer(state = initialState,action){
  switch(action.type){
    case "updateUser":
      return {user: action.user}
    default:
      return state;
  }
}
