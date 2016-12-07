var utils = require("../AOCUtils.js")
const BASE_PATH = "./Day6/" 

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
        processInput(inputData.trim().split('\n'));
        }
    });
}

function processInput(inputLines)
{
    var columnInputs = [];
    inputLines.forEach(function(line)
    {
        line = line.trim();
        for(var i =0; i< line.length; i++)
        {
            if(columnInputs.length < line.length)
                columnInputs.push({});
            if(line[i] in columnInputs[i])
                columnInputs[i][line[i]]++;
            else
                columnInputs[i][line[i]] =  1;
        }
    });
    var finalCode = "";
    for(var i =0; i< columnInputs.length; i++)
    {
        var sortedValues = Object.keys(columnInputs[i]).sort(function(a, b)
        {
            if(columnInputs[i][a] > columnInputs[i][b])
                return - 1;
            if(columnInputs[i][a] < columnInputs[i][b])
                return 1;
            return 0;
        });
        console.log("Start");
        for(var j=0; j< sortedValues.length; j++)
        {
            console.log(sortedValues[j] + ": "  + columnInputs[i][sortedValues[j]]);
        }
        console.log("Final");
        finalCode += sortedValues[0];
    }
    console.log(finalCode);
}

start();