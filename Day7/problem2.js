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
        var supportsSSL = false;
        var hyperNetPieces = line.match(regEx);
        
        linePieces.forEach(function(piece)
        {
            for(var i=0; i <= piece.length-3; i++)
            {
                if(hyperNetPieces.indexOf(piece) <= 0 && !supportsSSL)
                {
                    var subPieceToCheck = piece.substring(i, i+3);
                    var isPalindrom = checkPalindrom(subPieceToCheck);
                    var isAllSameLetter = /^(.)\1+$/.test(subPieceToCheck);

                    // console.log(subPieceToCheck + "\t" + isPalindrom);
                    if(isPalindrom&&!isAllSameLetter)
                    {
                        var hyperNetCheckForPiece = subPieceToCheck[1] + subPieceToCheck[0] + subPieceToCheck[1];
                        hyperNetPieces.forEach(function(hypernetChunk)
                        {
                            if(hypernetChunk.indexOf(hyperNetCheckForPiece) >= 0)
                            {
                                supportsSSL = true;
                            }
                        });
                    }
                }
            }
        });
        console.log('Piece: ' + line + '\t\tsupportsSSL: ' + supportsSSL);
        if(supportsSSL)
        {
            palindromCount++;
            console.log(palindromCount);
        }
    });
   
}

function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

start();