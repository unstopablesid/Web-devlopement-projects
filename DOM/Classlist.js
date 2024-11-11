let cla = {
    add: function (el, className) {
        el.classList.add(className);
    },              
    remove: function (el, className) {
        el.classList.remove(className);
    },
    toggle: function (el, className) {
        el.classList.toggle(className);
    },
    contains: function (el, className) {
        return el.classList.contains(className);
    }
};
console.log(cla.add(document.body, 'test')); // undefined