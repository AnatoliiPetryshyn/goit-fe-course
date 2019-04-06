const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;

let userPassword;
let isPassed;

do {
  userPassword = prompt('Введите пароль', '');

  for (el of passwords) {
    if (el === userPassword) {
      isPassed = true;
      break;
    } else {
      isPassed = false;
    }
  }

  if (userPassword === null) {
    console.log('Отменено пользователем!');
  } else {
    if (isPassed) {
      alert('Добро пожаловать!');
    } else {
      attemptsLeft -= 1;
      alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
    }
  }

  if (attemptsLeft === 0) {
    isPassed = true;
    alert('У вас закончились попытки, аккаунт заблокирован!');
  }
} while (!isPassed);
