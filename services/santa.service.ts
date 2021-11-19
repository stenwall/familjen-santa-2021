const apiBaseURL = 'http://localhost:3000';

export const FETCH = (query: string) => {
  return fetch(`${apiBaseURL}/${query}`)
    .then((response) => {
      if (response.ok) {
      return response.json();
      }
      throw response;
    });
}