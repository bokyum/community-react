import axios from "axios";
import { useDispatch } from "react-redux";
import authHandle from "../../modules/auth";
import { login } from "../../modules/auth";

export const handleJoin = async (mem_info) => {
    const {data} = await axios({
        method: 'post',
        url: 'http://localhost:8080/api/v1/join', 
        headers: {
            'Content-Type': 'application/json; charset=utf-8'	// 헤더에서 본문 타입 설정
        },
        data: JSON.stringify(mem_info)
    })
    return data;
}


export const handleLogin = async (mem_info) => {

    const {data} = await axios({
        method: 'post',
        url: 'http://localhost:8080/api/v1/login', 
        headers: {
            'Content-Type': 'application/json; charset=utf-8'	// 헤더에서 본문 타입 설정
        },
        data: JSON.stringify(mem_info)
    })
    return data;
}
