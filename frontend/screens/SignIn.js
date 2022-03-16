import React, { useState, useEffect} from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Button,
  Platform
} from "react-native";
import { NaverLogin, getProfile } from "@react-native-seoul/naver-login";
import { NativeBaseProvider, Select, Center, Box, CheckIcon } from "native-base";
import styled from "styled-components";
import axios from 'axios'


const iosKeys = {
  kConsumerKey: "naver client id",
  kConsumerSecret: "naver secret id",
  kServiceSignInName: "테스트앱(iOS)",
  kServiceSignInUrlScheme: "testSignIn" // only for iOS
};

const androidKeys = {
  kConsumerKey: "WfLiuAOSqT_2PxhawHwp",
  kConsumerSecret: "RZ8elOQK8h",
  kServiceSignInName: "RIKEY"
};


const naverLogin = props => {
  return new Promise((resolve, reject) => {
    NaverLogin.login(props, (err, token) => {
      console.log(`\n\n  Token is fetched  :: ${token} \n\n`);

      if (err) {
        reject(err);
        return;
      }

      resolve(token);
    });
  });
};


const getUserProfile = async (token) => {
  const profileResult = await getProfile(token);
  if (profileResult.resultcode === "024") {
    Alert.alert("로그인 실패", profileResult.message);
    throw Error();
  } else {
    console.log("profileResult", profileResult);
    return profileResult.response.id;
  }
}; 


const initials = Platform.OS === "ios" ? iosKeys : androidKeys;
// Promise: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

// naverLogin: token => getUserProfile(token): naverId
const SignIn = ({ navigation }) => {
  const [naverToken, setNaverToken] = useState('');
  const [userNaverId, setUserNaverId] = useState('');

  const naverLogout = () => {
    NaverLogin.logout();
    setNaverToken("");
    setUserNaverId('');
    console.log('로그아웃 완료')
  };

  const naverLoginProcess = async () => {
    try {
      const token = await naverLogin(initials)
      const id = await getUserProfile(token.accessToken);
      
      console.log(id)
      setNaverToken(token);
      setUserNaverId(id)
      
      if (id != '') {
        // 아이디가 유효하다면   
        navigation.navigate('SignUp')
      } else {
        console.log('invalid')
      }
    }
    catch(e)  {
    }
  }

  return (

    <SafeAreaView style={styles.container}>
      <NativeBaseProvider>

				<Button
					title="네이버 아이디로 로그인하기"
					onPress={() => naverLoginProcess()}
					/>

        {/* <Button
          title="로그아웃"
          onPress={() => naverLogout()}
        /> */}

				{/* 화원정보 가져오기 */}
				{/* {!!naverToken && (
						<Button title="회원정보 가져오기" onPress={getUserProfile} />
					)} */}

        {!!naverToken && <Button title="로그아웃하기" onPress={naverLogout} />}

      
    </NativeBaseProvider>
	</SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});

export default SignIn;

// callback hell
// promise hell
// promise change
// Promise
// - 상태: pending / fulfilled / rejected
// - .then(thenable), .catch
// - async, await

// setTimeout, https://sculove.github.io/post/javascriptflow/
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
// https://ko.javascript.info/async

// 티스토리, 네이버 블로그, 스택 오버플로 => 실력이 안늠

// MDN, 자바스크립트 튜토리얼, 
// ECMASCRIPT(TC39) 
// 웹표준 W3C, WHATWG





