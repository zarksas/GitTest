let man = {
    name: "John",
    surname: "Wick",
    age: 35,
    height: 1.80,
    massa: 80,
    login: "glanas",
    password: 232425,
    checkMoney: 200000,

    getIm() {
        this.massa / this.height **2
    },

    

    imtResult(indexMassa) {
        if (indexMassa <= 18) {
            return 'Недостаточный вес';
        } else if (indexMassa > 18 && indexMassa <=25) {
            return 'Вес в норме';
        } else if (indexMassa > 25 && indexMassa <=29) {
            return 'Избыточный вес'
        }  else 
            return 'Ожирение'
    
        },

}

man.location = {
    city: "Grozny",
    street: "Derbicheva",
    house: 43,
}

const lorem = 232425;

if (lorem === man.password) {
    console.log(`Добро пожаловать ${man.name} ${man.surname}. Ваш логин${man.login}`);
}else 
    console.log(`Указанный пароль ${lorem} не верен`);
