const validateEmail = require("./modules/validateEmail");
const validatePassword = require("./modules/validatePassword");

try {
    console.log(validateEmail("mats@gmail.com"));
    console.log(validateEmail("mateus.moura4@fatec.sp.gov.br"));
    // console.log(validateEmail("xxx@x.xxx"));
    // console.log(validateEmail("mats_80_oitenta@gmail.c"));
    // console.log(validateEmail("x@gmail.com"));
    console.log(validateEmail("xx@xx.com"));
    console.log(validateEmail("mats_80_oitenta@gmail.com"));
} catch (e) {
    console.log(e.message);
} finally {
    console.log("\nvalidations finished\n");
}

try {
    console.log(validatePassword("UIxux#100"));
    console.log(validatePassword("theyDontCare!222"));
    // console.log(validatePassword("ABss2@"));
    // console.log(validatePassword("12345678"));
    console.log(validatePassword("aD9!defsqw"));
} catch (e) {
    console.log(e.message);
} finally {
    console.log("\nvalidations finished\n");
}