// Интерфейс
interface ICompany {
    name: string;
    debts: number;
}

// Тип с ключами
type CompanyKeys = keyof ICompany;
const keys: CompanyKeys = "name"; // Берем ключ name из интерфейса компании

// Generic функция
function printDebts<T, K extends keyof T, S extends keyof T>(
    company: T,
    name: K,
    debts: S
) {
    console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const hh: ICompany = {
    name: "HH",
    debts: 500000,
};

// Вызов функции
printDebts(hh, "name", "debts");

const google = {
    name: "Google",
    open: true,
};

// Вызов функции
printDebts(google, "name", "open");

// Делаем запрос типа по ключам
type GoogleKeys = keyof typeof google;
const keys2: GoogleKeys = "name";
