module.exports = function (app) {
    const functions = require("../functions/functions");
    app.route("/").get(functions.first).post(functions.second);

    app.route("/1").get(functions.third).post(functions.forth);
};
