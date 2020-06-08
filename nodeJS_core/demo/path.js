//демонстрация и работа с базовыми модулями nodeJS
//название может быть произвольным однако для наглядности берем название модуля

//https://nodejs.org/en/docs/ документация

const path = require('path')

console.log('File name', path.basename(__filename)) //метод возвращает переданного название файла
console.log('Directory name', path.dirname(__filename))//метод возвращает переданного путь файла
console.log('Extention name', path.extname(__filename)) //метод возвращает переданного разширение файла

//Примечание __filename єто константа ссылается на файл в котором работаем

//есть более универсальный метод возвращает обьект

console.log('Parse: ', path.parse(__filename)) // Parse:  {
// корневая директория                              //     root: 'E:\\',
// абсолютный путь                                  //     dir: 'E:\\Projects\\ws\\vladilen\\node_js\\demo',
// название файла                                   //     base: 'path.js',
// разширение                                       //     ext: '.js',
// название файла без разширения                    //     name: 'path'
                                                    //   }

//Прииер как работать с этим(как в классическом джаваскрипте)  

console.log('Parse.name: ', path.parse(__filename).name) //Обращение по ключу

//генерирование путей
console.log(path.join(__dirname,'server','index.html')) // => E:\Projects\ws\vladilen\node_js\demo\server\index.html

//так как __dirname строка мы можем вызвать метод join для этой библиоеки