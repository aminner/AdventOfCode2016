var utils = require("../AOCUtils.js")
const BASE_PATH = "./Day2/" 

var DIRECTION  = { LEFT: 'L', RIGHT:'R', UP: 'U', DOWN: 'D'}
var finalPinCode = "";

var numberPad = [[1, 2, 3,], [4, 5, 6], [7, 8, 9]];
function start()
{
    var inputFileName = "input.txt";
    if(process.argv.length >= 3)
    {
      inputFileName = process.argv[2];
    }
    var filePath = BASE_PATH + inputFileName;
    console.log(filePath);
    utils.read(filePath, { error: function(error){
       console.log(error); 
    }, successful: function(inputData){
        processInstructions(0, inputData.trim().split('\n'));
        }
    });
}

function processInstructions(index, inputLines)
{
    if(index >= inputLines.length) {
        return;
    }
    var inputData = inputLines[index];
    processInput(inputData.replace(/\s+/g, ''), function()
    {
        processInstructions(++index, inputLines);
    });


}

var x=1, y=1;
function processInput(inputData, callback) {
    for(var i=0; i<inputData.length; i++)
    {
        switch(inputData[i])
        {
            case DIRECTION.UP:
                if(x-1 >= 0) {
                    x--;
                }
                break;
            case DIRECTION.DOWN:
                if(x+1 <= 2){ 
                    x++;
                }
                break;
            case DIRECTION.LEFT:
                if(y-1 >=0) {
                    y--;
                }    
                break;
            case DIRECTION.RIGHT:
                if(y+1 <= 2) {
                    y++;
                }
                break;
        }
    }
    addNumberToPinCode(x, y);
    callback();
}

function addNumberToPinCode(x, y)
{
    finalPinCode += "" + numberPad[x][y];
    console.log(finalPinCode);
}
start();
