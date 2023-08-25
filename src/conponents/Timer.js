async function createTimer(seconds){
    return new Promise(resolve => {
        setTimeout(() => resolve(), seconds);
    });
}
export default createTimer;