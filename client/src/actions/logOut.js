export default function logOut() {
    delete localStorage.jwt
    return {type: "LOGOUT"}
}