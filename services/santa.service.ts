const apiBaseURL = 'https://familjen-santa-2021.vercel.app';

export const FETCH = (query: string) => {
  return fetch(`${apiBaseURL}/${query}`)
    .then((response) => {
      if (response.ok) {
      return response.json();
      }
      throw response;
    });
}