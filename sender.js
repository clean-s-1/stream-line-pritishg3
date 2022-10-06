const { exec } = require('child_process');
const fs = require('fs');
const json = require('./assets/sensorData.json');


function getTemperatureData() {
    return json.temperature;
}

function getSocData() {
    return json.soc;
}

function writeToPipe(logger, data) {
    logger.write(`\n`);
    for(const num of data) {        
        logger.write(`${String(num)}\t`);
    }
}

function updateTemperatureToPipe() {
    var logger = fs.createWriteStream('temperaturelog.txt', {
        flags: 'w'
    })
    writeToPipe(logger, getTemperatureData());
}

function updateSocToPipe() {
    var logger = fs.createWriteStream('soclog.txt', {
        flags: 'w'
    })
    writeToPipe(logger, getSocData());
}

updateTemperatureToPipe();
updateSocToPipe();

module.exports = {
    getTemperatureData,
    getSocData,
    updateTemperatureToPipe,    
    updateSocToPipe, 
}