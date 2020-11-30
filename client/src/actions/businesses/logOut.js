export default function logOutBusiness() {
    delete localStorage.jwt
    return {type: "LOGOUT_BUSINESS"}
}