"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var PORT = process.env.PORT || 5000;
new app_1.App().server.listen(PORT, function () {
    console.log("listen on port " + PORT);
});
