import axios from "axios";



export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    if(user && user.accessToken) {
        return {Authorization: user.type + user.token}
    }
}

export const handleJoin = (mem_info) => {
    axios({
        method: 'post',
        url: 'http://localhost:8080/api/v1/join', 
        headers: {
            'Content-Type': 'application/json; charset=utf-8'	// 헤더에서 본문 타입 설정
        },
        data: JSON.stringify(mem_info)
    }).then(response => {
        console.log(response.data);
        if(response.data.error !== null) {
            alert(response.data.error);
            return;
        }
        alert("회원가입에 성공하였습니다.")
        window.location.href = "/";
    })
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
    .then(response => {
        console.log(response.data);
        if(response.data.error !== null) {
            alert(response.data.error);
            return;
        }
        
        const {accessToken} = response.data.data.token;
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        localStorage.setItem("user", JSON.stringify(response.data));

        console.log(response);
        alert("로그인에 성공하였습니다.")
        window.location.href = "/";
        
    })
}

export const handleLogout = () => {
    localStorage.removeItem("user");
}