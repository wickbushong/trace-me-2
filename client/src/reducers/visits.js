export default (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case "START_VISIT":
            return state;
        default:
            return state;
    }
}