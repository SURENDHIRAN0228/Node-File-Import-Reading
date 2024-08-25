var User = require('../models/User');

var csv = require('csvtojson');

const importUser = async(req,res) => {
    try {

        var userData = [];
        csv()
        .fromFile(req.file.path)
        .then(async(response) => {
            
            for(var x = 0; x < response.length; x++) {
                userData.push({
                    name: response[x].Name,
                    address: response[x].Address,
                    phone: response[x].Phone
                });
            }

            await User.insertMany(userData);
        });

        res.send({ status: 200, success: true, msg: 'CSV imported'});
    }
    catch(error) {
        res.send({ status: 400, success: false, msg: error.message});
    }
}

module.exports = {
    importUser
}