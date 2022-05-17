import instance from './ApiController';

const API_KEY = process.env.REACT_APP_API_KEY;

export const mainApi = async() => {

//http://openapi.foodsafetykorea.go.kr/api/cf6f5c54e1ec4c2b8e8f/서비스명/json/1/5

  return instance({
    url: `/${API_KEY}/I2810/json/1/5`,
    method: 'GET',
  });
};
