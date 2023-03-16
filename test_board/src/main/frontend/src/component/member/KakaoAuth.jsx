import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const KakaoAuth = ({aToken}) => {
    //const code = new URL(window.location.href).searchParams.get("code");
    const navigate = useNavigate();

    const params = new URL(window.location.href).searchParams;
    const code = params.get("code");
    const grant_type = "authorization_code";
    const client_id = `${process.env.REACT_APP_KAKAO_API_KEY}`
    const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';

    const [accessToken, setAccessToken] = useState();  

    const test = (params) => {
      aToken(params)
    }

    useEffect(() => {
      axios.post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {},
        {
          headers: {
            "Content-type":
              "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.access_token)
        test(res.data.access_token)
        setAccessToken(res.data.access_token)
        
        if(accessToken) {
          console.log(accessToken)
          navigate("/board/list")
        } else {
          console.log("로그인 실패")
          console.log(accessToken)
          navigate("/")
        }   
      })  

    }, []);



    return (
        <></>
    );
};
export default KakaoAuth;