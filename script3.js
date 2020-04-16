const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let userInput = prompt("Give password");

message = userInput

if(userInput == null){
  message = "Oтмененно пользователем!"
} else if(userInput === ADMIN_PASSWORD){
  message = "Добро пожаловать!"
} else {
  message = "Доступ запрещен, неверный пароль!";
};

alert(message);
