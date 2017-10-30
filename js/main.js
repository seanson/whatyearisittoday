var d = new Date();

const CURRENT_YEAR = d.getFullYear();
const AWS_TIME = CURRENT_YEAR - 2006;
const DOCKER_TIME = CURRENT_YEAR - 2013;

$(document).ready(function () {
    console.log(`Ready! ${AWS_TIME} ${DOCKER_TIME}`);
    $('#CURRENT_YEAR').text(CURRENT_YEAR);
    $('#AWS_TIME').text(AWS_TIME);
    $('#DOCKER_TIME').text(DOCKER_TIME);
});