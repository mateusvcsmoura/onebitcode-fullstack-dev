"use strict";
var Planets;
(function (Planets) {
    Planets["MERCURY"] = "Merc\u00FArio";
    Planets["VENUS"] = "V\u00EAnus";
    Planets["EARTH"] = "Terra";
    Planets["MARS"] = "Marte";
})(Planets || (Planets = {}));
Planets.EARTH; // Terra
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["USER"] = 1] = "USER";
})(Roles || (Roles = {}));
Roles.ADMIN; // 0
