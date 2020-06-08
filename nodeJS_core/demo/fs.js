const fs = require('fs'); //File System
const path = require('path');
//Метод ниже создает папку первым параметром принимая абсолютный путь с названием папки а вторым колбек функцию
// fs.mkdir(path.join(__dirname,'test_folder'), (err) => { //в nodeJS принято первым параметром в колбек функцию передават ошибку
//     if(err){ //если ошибка есть 
//         throw err //мы ее выбрасываем
//     }
//     //если err === null то срабатвывает код вне ветвления
//     console.log('Folder is created')
// })

//закоментируем создание папки так как если она есть при повторном вызове метода mkdir
//он выдаст ошибку

const filePath = path.join(__dirname,'test_folder','text_file_for_test.txt') //заранее готовим путь для нового файла
//с расширением
const content = 'This is content to test file. \n this conten exists inside nodeJS file inside contsnt called "content"'
fs.writeFile(filePath, content, err => {
    if(err){
        throw err
    };

    console.log('File created')
})

//Данный метод принимает в себя три параметра = путь,контент будущего файла,колбекфункцию

//При повторном вызове метот перетирает полностью предыдущий файл с контентом

//если необходимо добавить контент то необходимо вызвать метод описанный ниже
//который принмает те же параметры
const appendContent = '\nThis is append content to add'
fs.appendFile(filePath,appendContent,err => {
    if(err){
        throw err
    };

    console.log('File updated')
});

//для чтения файлов есть отдельный метод

fs.readFile(filePath, (err,content) => { //первый параметр путь, второй функция (первым параметром принмает ошику а вторым контент)
    if(err){
        throw err
    };

    console.log(content) // => <Buffer 54 68 69 73 20 69 73 20 63 6f 6e 74 65 6e 74 20 74 6f 20 74 65 73 74 20 66 69 6c 65 2e 20 0a 20 74 68 69 73 20 63 6f 6e 74 65 6e 20 65 78 69 73 74 73 ... 81 more bytes>
                         // контент попадает в буфер(по умолчанию)
    //чтоб раскодировать используем такой способ
    const data = Buffer.from(content)
    console.log('Uncoded ', data.toString()) // но есть более удобный способ опишем его ниже
});

fs.readFile(filePath, 'utf-8', (err,content) => { //Второй способ подразумевает внос третего параметра после пути
    //это ютф кодировка
    if(err){
        throw err
    };

    console.log('utf-8 => ', content ) //Получаем строку контента
});