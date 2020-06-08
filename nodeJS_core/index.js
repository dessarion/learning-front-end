//(function(exports,require,module, __dirname, __filename){ //Файлы nodeJS обернуты в модуль
//отсюда и лоступные переменные (exports,require,module, __dirname, __filename)
//однако эту обертку можно не писать она интерпретируется по умолчанию

console.log(__dirname) //Убеждаемся что нам доступны ети переменные и что мы находимся в модуле

const chalk = require('chalk') //Абсолютный путь ищет зависимости в папке node_modules
// выше мы подключаем модуль(библиотеку) chalk так как nodeJS потдерживает модульность
const text = require('./data') //Относительный (node_modules) путь файл по умолчанию js можно писать без разрешения
//ВАЖНО!! доступны только переменные переданные експортом
console.log(chalk.redBright(text)) //chalk.redBright вызов метода redBright из библиотеки 
//меняет цвет в консоли

//})