//Модуль для работы с оперционной системой (ее данными)

const os = require('os');

console.log('Operation system ', os.platform()) // Операционная система

console.log('Processor architecture ', os.arch()) //Архитектура процессора

console.log('Processor cpus', os.cpus()) //Более подробная информация о процессоре

console.log('Free memory', os.freemem()) //Свободная память

console.log('Total memory', os.totalmem()) //Вся память

console.log('Base directory', os.homedir())//Базовая директория

console.log('OS uptime', os.uptime()) //Время в секундах сколько работает операционная система