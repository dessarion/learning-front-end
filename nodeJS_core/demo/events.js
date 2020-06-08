//Модуль событий

const EventEmitter = require('events') //это класс

const emmitter = new EventEmitter()//создадим объект от этого класса

// emmitter.on('anything', data => { //.on метод прослушки событий //Первым параметром название вторым
//     console.log('ON: anything',data)  // калбек функция которая оперирует с данными если такоевые есть
// })
const dataForEmitting = {
    fullName: 'Maxim',
    age: 33,
    isProgrammer: true
}

// const dataForEmittingTimeout = 'Time Out Data'
// emmitter.emit('anything', {name: 'Dessarion', //Емитим событие и передаем в него данные 
//                             a: 1});
// emmitter.emit('anything', dataForEmitting)   //Данный метод можно вызивать сколько необходимо раз 

// setTimeout(() => {
//     emmitter.emit('anything', dataForEmittingTimeout)
// }, 500); //Можем имитировать асинхронность

class Dispatcher extends EventEmitter { //Создаем собственный класс наследуя ИвентИмитер
    //для создания собственных методов
    subscribe(eventName,callbackFunction){
        console.log('[Subscribed...]')
        this.on(eventName,callbackFunction) //метод on доступен из за наследования
    };

    dispatch(eventName,data){
        console.log('[Dispatched...]')
        this.emit(eventName,data)
    }
};

const disp = new Dispatcher() //создаем новый объект на основе нашего класса

disp.subscribe('listener', data => { //Создаем слушателя события
    console.log('ON: listener, ', data)
});

disp.dispatch('listener' , dataForEmitting) //Тут важен порядок слушатель = событие