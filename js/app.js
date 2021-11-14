'use strict';
function insert(num) {
    document.form.viewresult.value = document.form.viewresult.value + num;
}
function clean() {
    document.form.viewresult.value = "";
}
function back() {
    let data = document.form.viewresult.value;
    document.form.viewresult.value = data.substring(0, data.length - 1);
}
function equal() {
    let data = document.form.viewresult.value;
    if (data) {
        document.form.viewresult.value = eval(data);
    }
}