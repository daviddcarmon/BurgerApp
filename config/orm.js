const connection = require("./connecion.js");


const orm = {
    selectAll: (cb) => {
        connection.query("select * from burgers", function (err,data) {
            if (err) {
                console.log(`Select all function not working. Contact programmer.`)
            }
            cb(data)
        })
    }
}