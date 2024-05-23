export const tunc_logger = store => {
    return (next) => {
        return (action) => {
            
            console.log('tunc action : ', action);
            action.tuncObj = 'tunc was here';
            const result = next(action);
            console.log('tunc finish');
            
            return result;
        }
    }
}