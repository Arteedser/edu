let space = '\n\n';

/**
 * Функция фильтрует массив email-адресов, исключая те, которые находятся в чёрном списке.
 * @param {string[]} emails - Массив строк с исходными email адресами.
 * @param {string[]} blacklist - Массив строк с email адресами в чёрном списке.
 * @returns {string[]} - Массив email адресов, не попавших в чёрный список.
 */
function filterEmails(emails, blacklist) {
    let filteredEmails = [];
    for (let email of emails) {
        if (!blacklist.includes(email)) filteredEmails.push(email);
    }
    return filteredEmails;
}

let emails = [
    'superPOchta@gmail.com',
    'proverochka@yandex.ru',
    'plohoyCHELOVEK@gmail.com',
    'OCHENplohoyCHELOVEK@gmail.com'
];
let blacklist = [
    'plohoyCHELOVEK@gmail.com',
    'OCHENplohoyCHELOVEK@gmail.com'
];
console.log(filterEmails(emails, blacklist));


////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Функция вычисляет и возвращает стоимость корзины товаров после применения всех скидок.
 * @param {number} totalAmount - Общая сумма корзины.
 * @param {number} itemCount - Количество товаров в корзине.
 * @param {string} promoCode - Промокод (по умолчанию null).
 * @returns {number} - Стоимость корзины после применения всех скидок.
 */
function calculate(totalAmount, itemCount, promoCode = null) {
    let discountedAmount = totalAmount.toFixed(2);
    
    console.log(`Стоимость корзины без скидок ${totalAmount}, состоящая из ${itemCount} товарами`);

    if (promoCode === 'ДАРИМ300') {
        console.log(`Применена скидка по промокоду \'ДАРИМ300\'`);
        discountedAmount -= 300;
        if (discountedAmount < 0) {        
            return 0;
        }
    }

    if (itemCount >= 10) {
        console.log(`Применена скидка 5% к общей сумме из-за покупки 10 и более товаров`);
        discountedAmount *= 0.95;
    }
    if (totalAmount > 50000) {
        console.log(`Применена скидка 20% к сумме превышения из-за превышения общей суммой 50 000`);
        let excessAmount = totalAmount - 50000;
        discountedAmount -= 0.2 * excessAmount;
    }

    if (promoCode === 'СКИДКА15' && totalAmount >= 20000) {
        console.log(`Применена скидка к общей стоимости по промокоду \'СКИДКА15\'`);
        discountedAmount *= 0.85;
    }

    console.log(`Стоимость корзины на ${itemCount} позиций после применения всех скидок имеет стоимость ${discountedAmount.toFixed(2)}`);
    return discountedAmount.toFixed(2);
}

console.log(calculate(608020, 15, 'СКИДКА1000'), space);
calculate(600400, 200, 'ДАРИМ300');
console.log(space);
console.log(calculate(1999998, 1, 'СКИДКА15'), space);
