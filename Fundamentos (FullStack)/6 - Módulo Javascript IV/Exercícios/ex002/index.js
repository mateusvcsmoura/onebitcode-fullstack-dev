const dayjs = require("dayjs");

function calculateBirthday (userdate) {
    const today = dayjs();
    userdate = dayjs(userdate);

    const userAge = today.diff(userdate, 'year');
    const nextBirthday = userdate.add(userAge + 1, 'year');
    const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1;

    console.log(`Calcular Datas\n\nIdade: ${userAge}\nPróximo Aniversário: ${nextBirthday.format('DD/MM/YYYY')}\nDias para o próximo aniversário: ${daysToNextBirthday}\n`);

}

calculateBirthday("2006-08-10");
calculateBirthday("2012-01-25");
calculateBirthday("1980-07-16");
calculateBirthday("1976-08-26");
calculateBirthday("2006-04-08");
calculateBirthday("2006-04-07");
