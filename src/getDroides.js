const {findAllItem} = require("./repository/dynamodbOperations")
const getDroides = async(event) => {

    try{
    const droides = await findAllItem('DroideTable');
    const droidesItems = droides.Items;

    return {
        status: 200,
        // body: JSON.stringify(droides, null, 2)
        body:{
            droidesItems
        }
    };
    
    }catch(err){
        return {error: err}
    }
}

module.exports = {
    getDroides
}