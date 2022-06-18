import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FooterBar from './Components/Footer'
import Main from "./pages/Main/index"

/*기능정의
해외위해식품 회수정보
http://openapi.foodsafetykorea.go.kr/api/keyId/serviceId/dataType/startIdx/endIdx


해외직구 차단정보
http://openapi.foodsafetykorea.go.kr/api/keyId/serviceId/dataType/startIdx/endIdx
*/
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <FooterBar />
    </BrowserRouter>
  )
}

export default App
