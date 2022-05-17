import React, {useEffect, useState} from 'react'
import {mainApi} from './api/Api'
/*기능정의
해외위해식품 회수정보
http://openapi.foodsafetykorea.go.kr/api/keyId/serviceId/dataType/startIdx/endIdx


해외직구 차단정보
http://openapi.foodsafetykorea.go.kr/api/keyId/serviceId/dataType/startIdx/endIdx
*/
const App = () => {
  const [db, setData] = useState([]);
  useEffect(() => {
    mainApi().then((data) => setData(data));
  })

  console.log(db)
  return (
    <div>
      {db.map((data) => (
        data.TITL
      ))}
    </div>
  )
}

export default App
