const RESPONSE_SUCCESS = 'DATA_ALL_RESPONSE_SUCCESS';
const RESPONSE_ERROR = 'DATA_ALL_RESPONSE_ERROR';
export const reducer = (state, action) => {
  switch (action.type) {
    case RESPONSE_SUCCESS:
      const { data: { users, messages } } = action;
      const usersMap = new Map();
      users.forEach(user => usersMap.set(user.id, user));
      const messagesWithAuthor = messages.map(message => (
        {
          text: message.body,
          author: usersMap.get(message.authorId).name,
          id: message.id
        }
      ))
      return {
        ...state,
        messagesWhithAuthor: messagesWithAuthor
      };

    case RESPONSE_ERROR:
      const { error } = action;
      return {
        ...state,
        error
      }
    default:
      return state;
  }
}