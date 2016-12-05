var utils = require("../AOCUtils.js")
const BASE_PATH = "./Day4/" 

var regexNumber = /[0-9]+/
var regexCheckSum =  /\[[\w]+\]/
var regex
function start()
{
    var inputFileName = "input.txt";
    if(process.argv.length >= 3)
    {
      inputFileName = process.argv[2];
    }
    var filePath = BASE_PATH + inputFileName;
    var totalSectorCount = 0;
    console.log(filePath);
    utils.read(filePath, { error: function(error){
       console.log(error); 
    }, successful: function(inputData){
        var hashes = inputData.trim().split('\n')
        hashes.forEach(function(hash)
        {
            var checkSum =  hash.match(regexCheckSum)[0].replace('[', '').replace(']', '');
            var sectorCode = hash.match(regexNumber)[0];
            hash = hash.replace(regexCheckSum, '');
            hash = hash.replace(regexNumber, '');
        
            var hashChars = {};
            var unique = hash.split('').filter(function(item, i, ar){ if(item === '-') return false; return ar.indexOf(item) === i; }).join('');

            for(var i=0; i <unique.length; i++)
            {
                hashChars[unique[i]] = { letter:unique[i], count: hash.match(new RegExp(unique[i], 'g')||[]).length};
            }
            var valuesSorted = Object.keys(hashChars).sort(function(a,b){
                if(hashChars[b].count === hashChars[a].count)
                {
                    if(a < b ) return -1;
                    if(a > b) return 1;
                    return 0;
                }
                return hashChars[b].count-hashChars[a].count;
            }
                ).join('');
        
            if(valuesSorted.substring(0, checkSum.length) === checkSum)
            {
                decryptHash(sectorCode, hash);
            }
        });
        console.log("Done!");
    }
    });
}

function decryptHash(sectorCode, hash)
{
    var cipher = createCipher(sectorCode);
    var decryptedHash = "";
    for(var i=0; i < hash.length; i++)
    {
        if(hash[i] === '-')
            decryptedHash += " ";
        else
            decryptedHash += cipher[hash[i]];
    }
    
    console.log(sectorCode + " -  " + decryptedHash);
}

function createCipher(sectorCode)
{
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var letterChange = parseInt(sectorCode%26);
    var cipher = {};
    for(var i=0; i < alphabet.length; i++)
    {
        cipher[alphabet[i]] = alphabet[(i + letterChange)%26];
    }
    return cipher;
}

start();