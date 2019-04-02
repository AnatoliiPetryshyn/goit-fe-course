const credits = 23580;
const pricePerDroid = 3000;

const amountDroidToBuy = prompt('Сколько дроидов Вы хотите приобрести?', '');

let totalPrice;

if (amountDroidToBuy === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = Number(amountDroidToBuy) * pricePerDroid;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    const differenceCredits = credits - totalPrice;
    console.log(
      `Вы купили ${amountDroidToBuy} дроидов, на счету осталось ${differenceCredits} кредитов.`,
    );
  }
}
