var utils = require("../AOCUtils.js")
const BASE_PATH = "./Day7/" 

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
    var palindromCount = 0;
    var regEx = /(\[[\w]+\])/;
    inputLines.forEach(function(line)
    {
        var linePieces = line.trim().split(regEx);
        var palindromFound = false;
        var hyperNetPalindromFound = false;
        
        linePieces.forEach(function(piece)
        {
            var isHypernet = piece.match(regEx);
            for(var i=0; i <= piece.length-4; i++)
            {
                var subPieceToCheck = piece.substring(i, i+4);
                var isPalindrom = checkPalindrom(subPieceToCheck);
                var isAllSameLetter = /^(.)\1+$/.test(subPieceToCheck);
                if(isPalindrom&&!isAllSameLetter)
                {
                    if(isHypernet)
                        hyperNetPalindromFound = true;
                    else
                        palindromFound = true;
                }
            }
            console.log("End \t piece: " + piece + "\tpalindromFound: " + palindromFound + "\thyperNetPalindromFound: " + hyperNetPalindromFound);
        });
        if(palindromFound && !hyperNetPalindromFound)
        {
            palindromCount++;
            console.log(line + " - " + palindromFound + " - " + hyperNetPalindromFound + "\n");
            console.log(palindromCount);
        }
    });
   
}

function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

start();