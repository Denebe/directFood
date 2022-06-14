import instance from './ApiController';

const API_KEY = process.env.REACT_APP_API_KEY;

export const mainApi = async() => {

//http://openapi.foodsafetykorea.go.kr/api/apikey/서비스명/json/1/5

  return instance({
    url: `/${API_KEY}/I2810/json/1/5`,
    method: 'GET',
  });
};

export const seApi = async() => {

    //http://openapi.foodsafetykorea.go.kr/api/apikey/서비스명/json/1/5
    
      return instance({
        url: `/${API_KEY}/I2715/json/1/5`,
        method: 'GET',
      });
    };


//http://openapi.foodsafetykorea.go.kr/api/keyId/serviceId/dataType/startIdx/endIdx