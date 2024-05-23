export const egemen_logger = store => {
    return next => {
        return action => {
            console.log(' received ego action', action);
            action.egoObj = "ege added"
            const result = next(action);
            console.log("egenin verdiği  action", action )
            return result;
        };
    };
};
