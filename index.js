require('datejs');
/**
 * @param  {...Array<string>} arrays 
 * @returns {{users: string[], merge_date: string}}
 */
function combineUsers(...arrays) {
    const combinedObject = {
        users: []
    };

    combinedObject.users = arrays.reduce((merged, currentArray) => [...merged, ...currentArray], []);

    const today = new Date();
    combinedObject.merge_date = today.toString("M/d/yyyy");

    return combinedObject;
}

module.exports = { combineUsers };