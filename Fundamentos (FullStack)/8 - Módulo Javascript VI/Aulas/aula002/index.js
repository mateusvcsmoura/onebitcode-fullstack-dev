function PhoneNumber(phoneNumberString) {
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "");
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0];
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0];
    this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "");
}

console.log(new PhoneNumber("+aaaaa s55 (11) 9 4567-9199"));
console.log(new PhoneNumber("+1 (999) as999-88ssss      8-000"));