"use strict";
var login_component_1 = require('./login/login.component');
exports.MODULE_ROUTES = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    login_component_1.LoginComponent
];
//# sourceMappingURL=authorization.routes.js.map