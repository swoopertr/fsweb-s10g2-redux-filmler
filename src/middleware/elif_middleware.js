export const elif_logger = store => {
    return (next)=> {
     
        return (action)=> {
            console.log('elif action', action);
            action.elifObj='elif is here';
            const result = next(action);
            console.log('elif finish');
            return result;
        }
    }
}