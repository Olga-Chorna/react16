export const getChatJSON = () => {
  return fetch('./chat.json')
    .then(response => response.json())
}