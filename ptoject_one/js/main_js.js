//window.addEventListener ( 'elements_container' , function() {
class Elments {
    constructor (selector) {
        this.$element = document.getElementById(selector)        
    }
};
class Styles extends Elments {
    constructor (styles) {
        super(styles.selector)
        this.$element.style.width = this.$element.style.height = styles.size + 'px'
        this.$element.style.background = styles.color
    };
}
const ELEMENT_ONE = new Styles({
    selector: 'element1',
    size: 100,
    color: 'red'
}) ;
const ELEMENT_TWO = new Styles({
    selector: 'element2',
    size: 100,
    color: 'green'
}) ;
const ELEMENT_THREE = new Styles({
    selector: 'element3',
    size: 100,
    color: 'blue'
}) ;

//})