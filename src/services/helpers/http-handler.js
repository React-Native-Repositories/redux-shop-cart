import {authHeader} from './auth-header';
import {Alert} from 'react-native';
// import Toast from 'react-native-simple-toast';
import {getAccessToken, removeAccessToken} from './token-helpers';

export const post = (url, payload) => {
  const requestOptions = {
    method: 'POST',
    headers: authHeader(url),
    body: JSON.stringify(payload),
  };

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
};

export const postFileUpload = async(url, payload) => {
  const requestOptions = {
    method: 'POST',
    headers: {Authorization: 'Bearer ' + await getAccessToken()},
    body: payload,
  };

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
};

export const patchFileUpload = async(url, payload) => {
  const requestOptions = {
    method: 'PATCH',
    headers: {Authorization: 'Bearer ' + await getAccessToken()},
    body: payload,
  };

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
};

export const patch = (url, payload) => {
  const requestOptions = {
    method: 'PATCH',
    headers: authHeader(url),
    body: JSON.stringify(payload),
  };

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
};

export const put = (url, payload) => {
  const requestOptions = {
    method: 'PUT',
    headers: authHeader(url),
    body: JSON.stringify(payload),
  };
  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
};

export const Delete = url => {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(url),
  };
  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
};

export const get = url => {
  try {
    const requestOptions = {
      method: 'GET',
      headers: authHeader(url),
    };
    return fetch(`${url}`, requestOptions)
      .then(handleResponse)
      .then(data => {
        return data;
      });
  } catch (error) {
    //console.log(error)
  }
};

export const getPayload = (url, payload) => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(url),
    body: JSON.stringify(payload),
  };
  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
};

function logout() {
  localStorage.clear();
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        removeAccessToken('access_token')
          }
      const error = (data && data.message) || response.statusText;
      Alert.alert(error);
      // Toast.show(error);
      return Promise.reject(error);
    }

    return data;
  });
}
