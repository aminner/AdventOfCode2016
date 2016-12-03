var utils = require("../AOCUtils.js")
const BASE_PATH = "./Day3/" 
var readline = require('readline');

var triangleCount = 0;
function start()
{
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
        var triangles = [[], [], []];
        while(inputData.length > 0)
        {
            var index = inputData.trim().search('\n') + 1;
            if(index === 0) {
                index = inputData.length;
            }
            var triangle = inputData.substring(0, index+1).trim();
            inputData = inputData.substring(index+1, inputData.length).trim();
            if(i >= 3)
            {
                checkTriangle(triangles);
                i = 0;
                triangles =  [[], [], []];   
            } 
            var sides = triangle.trim().split(/\s+/);
            console.log(sides);
            for(var x=0; x < sides.length; x++)
            {
                triangles[x].push(parseInt(sides[x]));
            }
            i++;
        }
        if(triangles.length === 3)
            checkTriangle(triangles);
        console.log(triangleCount);
    }});
}

function checkTriangle(triangle)
{
    for(var x =0; x < triangle.length; x++)
    {
        if((triangle[x][0] + triangle[x][1] > triangle[x][2])
        && (triangle[x][0] + triangle[x][2] > triangle[x][1])
        && (triangle[x][2] + triangle[x][1] > triangle[x][0]))
        {
            triangleCount++;
            console.log(triangleCount);
        } 
    }
}

start();
