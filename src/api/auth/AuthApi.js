import axios from "axios";

export const handleJoin = (mem_info) => {
    axios({
        method: 'post',
        url: 'http://localhost:8080/api/v1/join', 
        headers: {
            'Content-Type': 'application/json; charset=utf-8'	// 헤더에서 본문 타입 설정
        },
        data: JSON.stringify(mem_info)
    })
    .then(function (response) {
        if(response.data.error === null) {
            alert("회원가입이 정상적으로 되었습니다");
           window.location.href='http://localhost:3000/';
        }
        else {
            alert(response.data.error);
        }

    });
}


export const handleLogin = (mem_info) => {
    axios({
        method: 'post',
        url: 'http://localhost:8080/api/v1/login', 
        headers: {
            'Content-Type': 'application/json; charset=utf-8'	// 헤더에서 본문 타입 설정
        },
        data: JSON.stringify(mem_info)
    })
    .then(function (response) {
        console.log(response)
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
        if(response.data.error === null) {
            alert("로그인이 정상적으로 되었습니다");
           window.location.href='http://localhost:3000/';
        }
        else {
            alert(response.data.error);
        }

    })
}
