export const BASE_URL= 'https://api.natali.nomoredomains.monster';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(checkResponse)
};


export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })

  .then(checkResponse)

};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },


  })
  .then(checkResponse)
  
};



//const checkResponse = (res) => res.ok ? res.json()  : Promise.reject(`Ошибка: ${res.statusText}`);//res.status?

function  checkResponse(res) {
  if (res.ok) {
    return res.json()
    
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}