var utils = require("../AOCUtils.js")
const BASE_PATH = "./Day3/" 
var readline = require('readline');

function start()
{
    var triangleCount = 0;
    var noTriangleCount = 0;
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
        var i = 0;
        while(inputData.search('\n') >= 0)
        {
            // console.log(i++);
            var index = inputData.trim().search('\n') + 1;
            var triangle = inputData.substring(0, index + 1).trim();
            // console.log(triangle);
            if(index+1 < inputData.length)
            {
                inputData = inputData.substring(index + 1, inputData.length).trim();
            }
            if(checkTriangle(triangle.trim().split(/\s+/)))
                triangleCount++;
            else
                noTriangleCount++;
        }
        console.log(triangleCount);
        console.log(noTriangleCount);
    }});
}

function checkTriangle(sides)
{
    console.log(sides);
    if((parseInt(sides[0]) + parseInt(sides[1]) > parseInt(sides[2]))
    && (parseInt(sides[0]) + parseInt(sides[2]) > parseInt(sides[1]))
    && (parseInt(sides[2]) + parseInt(sides[1]) > parseInt(sides[0])))
        return true;
    
    return false;
}

start();
