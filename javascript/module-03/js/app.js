'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  const passed = login.length >= 4 && login.length <= 16;
  if (passed) {
    return true;
  } else {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    return false;
  }
};

const isLoginUnique = function(allLogins, login) {
  const isInclude = allLogins.includes(login);
  if (!isInclude) {
    return true;
  } else {
    console.log('Такой логин уже используется!');
    return false;
  }
};

const addLogin = function(allLogins, login) {
  const passed = isLoginValid(login) && isLoginUnique(allLogins, login);
  if (passed) {
    allLogins.push(login);
    console.log('Логин успешно добавлен!');
  }
};

// Вызовы функции для проверки
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(logins);
