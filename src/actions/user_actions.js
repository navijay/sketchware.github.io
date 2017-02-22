/**
 * Created by ggoma on 2017. 2. 17..
 */
export const LOGIN = "LOGIN";
export const LOAD_PROJECTS = "LOAD_PROJECTS";
// const SERVER = "http://www.sketchware.io";
const SERVER = "http://175.117.39.158:8080";
import axios from 'axios';
import SHA256 from 'crypto-js/sha256';


export function login(login_id, login_pwd, is_sns_user) {
    console.log("trying to login");

    let config = {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        params: {
            login_id,
            login_pwd: SHA256(login_pwd).toString(),
            is_sns_user
        }
    };

    let request = axios.post(`${SERVER}/reqLogin.do`, {}, config);

    return {type: LOGIN, payload: request};
}

export function loadProjects(user_id, row_start, row_unit) {
    console.log("trying to load projects");

    let config = {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        params: {
            row_start,
            row_unit,
            user_id
        }
    };

    let request = axios.post(`${SERVER}/myscListEnForJs.do`, {}, config);

    return {type: LOAD_PROJECTS, payload: request};

}