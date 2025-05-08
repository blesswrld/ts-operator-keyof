// Интерфейсы
interface ICompany {
    name: string;
    debts: number;
    departments: Department[];
    managment: {
        owner: string;
    };
}

interface Department {
    // Фиксируем значение ключей
    [key: string]: string;
}

// const debts = "debts";
// Убираем ошибку для глобальной переменной с помощью назначение литерального типа
// let debts = "debts" as "debts";
// Либо с помощью аннотации типа
let debts: "debts" = "debts";
// Делаем запрос через typeof к debts
type CompanyDebtsType = ICompany[typeof debts];

// Indexed access type (доступ по индексному ключу)
// type CompanyDebtsType = ICompany["debts"];
// Получаем тип владельца (вложенный объект)
type CompanyOwnerType = ICompany["managment"]["owner"];
//
type CompanyDepartmentsType = ICompany["departments"][number];
type CompanyDepartmentsTypes = ICompany["departments"];
// Получаем Union-type со всеми свойствами объекта
type Test = ICompany[keyof ICompany];

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

const google: ICompany = {
    name: "Google",
    debts: 500000,
    departments: {
        sales: "sales",
        developer: "dev",
    },

    managment: {
        owner: "John",
    },
};

// Вызов функции
printDebts(google, "name", "debts");

// Делаем запрос типа по ключам
type GoogleKeys = keyof typeof google;
const keys2: GoogleKeys = "name";
