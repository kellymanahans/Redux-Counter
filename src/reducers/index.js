import { INCREMENT, DECREMENT } from '../actions';

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (count = 0, action) => {
  switch (action.type) {
    case INCREMENT:
    return count + action.payload;
    // Fill in the body of this case
    case DECREMENT:
<<<<<<< HEAD
    return count - action.payload;
=======
    return count + action.payload;
>>>>>>> 8bf52763d32225ef02ce54094dd5e9fe2e1257c1
    // Fill in the body of this case
    default:
      return count;
  }
};
