import instance from './ApiController';
import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;

export const mainApi = async() => {

//http://openapi.foodsafetykorea.go.kr/api/apikey/서비스명/json/1/5

  return instance({
    url: `/${API_KEY}/I2810/json/1/5`,
    method: 'GET',
  });
};

  export const seApi = async (setData, edate) => {
    
    const url = `${API_KEY}/I2715/json/1/100/LAST_UPDT_DTM=${edate}`;

  
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      url,
    };
    axios(options).then(
      (r) => {
        console.log('connect');
        console.log(r.data.I2715.row);
        setData(r.data.I2715.row);
      },
      (error) => {
        console.log(error.response.data);
      }
    );
  };

  export const SlickApi = async (setData) => {
    
    const url = `${API_KEY}/I2715/json/1/10`;

  
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      url,
    };
    axios(options).then(
      (r) => {
        console.log('connect');
        console.log(r.data.I2715.row);
        setData(r.data.I2715.row);
      },
      (error) => {
        console.log(error.response.data);
      }
    );
  };
//http://openapi.foodsafetykorea.go.kr/api/keyId/serviceId/dataType/startIdx/endIdx