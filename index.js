//!Завдання 1

//*Напиши функцію delay(ms), яка повертає проміс, що переходить в стан "resolved" через ms мілісекунд. Значенням промісу, яке виповнилося має бути та кількість мілісекунд, яку передали під час виклику функції delay.

const delay = ms => {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(ms);
        }, ms);
  })
  ​}
  const logger = time => console.log(`Resolved after ${time}ms`);
  ​
  // Виклич функції для перевірки
  delay(2000).then(logger); // Resolved after 2000ms
  delay(1000).then(logger); // Resolved after 1000ms
  delay(1500).then(logger); // Resolved after 1500ms

//Перепиши функцію toggleUserState() так, щоб вона не використовувала callback-функцію callback, а приймала всього два параметри allUsers і userName і повертала проміс.



const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];
​
const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve, reject) => {
    const updatedUsers = [...allUsers];
    const userIndex = updatedUsers.findIndex(user => user.name === userName);
​
  callback(updatedUsers);
  const logger1 = updatedUsers => console.table(updatedUsers);

  })}

​
/*
 * Зараз працює так
 */
toggleUserState(users, 'Mango', logger1);
toggleUserState(users, 'Lux', logger1);
​
/*
 * Повинно працювати так
 */
toggleUserState(users, 'Mango').then(logger1);
toggleUserState(users, 'Lux').then(logger1)


//Перепиши функцію makeTransaction() так, щоб вона не використовувала callback-функції onSuccess і onError, а приймала всього один параметр transaction і повертала проміс.



const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
​
const makeTransaction = ( onSuccess, onError) => {
  const transaction = {
    id: randomIntegerFromInterval(1, 1000),
    amount: randomIntegerFromInterval(10, 1000),
  };
​
  setTimeout(() => {
    const canProcess = Math.random() > 0.3;
​
    if (canProcess) {
      onSuccess(transaction.id, delay);
    } else {
      onError(transaction.id);
    }
  }, delay);
};
​
const logSuccess = (id, time) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};
​
const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};
​
/*
 * Працює так
 */
makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Повинно працювати так
 */
makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);
​
makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);
​
makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);
​
makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);