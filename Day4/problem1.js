var utils = require("../AOCUtils.js")
const BASE_PATH = "./Day4/" 
var re = /[0-9]+/;
var re2 = /\[[\w]*\]/
var re3 = /[0-9]+\[[\w]*\]/

var sectorTotal = 0;
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
        var count = 1;
        while(inputData !== "")
        {
            // console.log( count++);
            var line = inputData.slice(0, inputData.indexOf('\n') + 1);        
            if(line === "")
            {
                line = inputData;
            }    
            inputData = inputData = inputData.substring(line.length, inputData.length).trim();
            var roomCodeObject = sectorCodeAndHash(line.match(re3)[0]); 
            line = line.trim().replace(re3, '');
            var unique = line.split('').filter(function(item, i, ar){ if(item == '-') return false; return ar.indexOf(item) === i; }).join('');
            verifyCheckSum(unique, line, roomCodeObject);
        }
    }});
}

function sectorCodeAndHash(lineSegment)
{
    var sectorCode = lineSegment.match(re)[0];
    var checkSum = lineSegment.match(re2)[0].replace('[', '').replace(']', '');

    return {sectorCode: sectorCode, checkSum: checkSum};
}

function verifyCheckSum(uniqueCharacters, inputLine, roomCodeObject)
{
    var letterCounts = {};
    for(var i=0; i < uniqueCharacters.length; i++)
    {
        var character =uniqueCharacters[i] 
        letterCounts[character] = (inputLine.match(new RegExp(character, "g")) || []).length; 
    }
    var keysSorted = Object.keys(letterCounts).sort(function(a,b){return letterCounts[b]-letterCounts[a]})
    var keysToCompare = keysSorted.slice(0, roomCodeObject.checkSum.length).join("");
    console.log(letterCounts + " - "  + keysToCompare + " - " + roomCodeObject.checkSum);
    for(var i=0; i < roomCodeObject.checkSum.length; i++)
    {
        if(keysToCompare.indexOf(roomCodeObject.checkSum[i]) < 0 )
        {
            return;
        }
    }
    console.log(sectorTotal + " -  " + roomCodeObject.sectorCode);
    sectorTotal += parseInt(roomCodeObject.sectorCode);
}


start();
