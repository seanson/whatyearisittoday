var d = new Date();

const CURRENT_YEAR = d.getFullYear();
const AWS_TIME = CURRENT_YEAR - 2006;
const DOCKER_TIME = CURRENT_YEAR - 2013;
const JS_TIME = CURRENT_YEAR - 2015;

$(document).ready(function () {
    $('#CURRENT_YEAR').text(CURRENT_YEAR);
    $('#AWS_TIME').text(AWS_TIME);
    $('#DOCKER_TIME').text(DOCKER_TIME);
    $('#JS_TIME').text(JS_TIME);
});