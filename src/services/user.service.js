import { get, save } from "./context.service";


//creating varaible for user api
const url = "http://localhost:3000/user";

//function for get registered user 
export function getUser(){
    return get(url);
}

//function for save user data
export function saveuser(data){
    return save(url,data);
}