
var DIRECTION  = { NORTH: 'NORTH', SOUTH:'SOUTH', EAST: 'EAST', WEST: 'WEST'}
var TURN = {LEFT: 'L', RIGHT: 'R'}
var direction = DIRECTION.NORTH;
var blocksAway = 0;
var input = "L5, R1, R4, L5, L4, R3, R1, L1, R4, R5, L1, L3, R4, L2, L4, R2, L4, L1, R3, R1, R1, L1, R1, L5, R5, R2, L5, R2, R1, L2, L4, L4, R191, R2, R5, R1, L1, L2, R5, L2, L3, R4, L1, L1, R1, R50, L1, R1, R76, R5, R4, R2, L5, L3, L5, R2, R1, L1, R2, L3, R4, R2, L1, L1, R4, L1, L1, R185, R1, L5, L4, L5, L3, R2, R3, R1, L5, R1, L3, L2, L2, R5, L1, L1, L3, R1, R4, L2, L1, L1, L3, L4, R5, L2, R3, R5, R1, L4, R5, L3, R3, R3, R1, R1, R5, R2, L2, R5, L5, L4, R4, R3, R5, R1, L3, R1, L2, L2, R3, R4, L1, R4, L1, R4, R3, L1, L4, L1, L5, L2, R2, L1, R1, L5, L3, R4, L1, R5, L5, L5, L1, L3, R1, R5, L2, L4, L5, L1, L1, L2, R5, R5, L4, R3, L2, L1, L3, L4, L5, L5, L2, R4, R3, L5, R4, R2, R1, L5";

var test1 = "R8, R4, R4, R8";
var x = 0; y =0;
var coordinates = "(0,0)";

var inputArray;
var re = /[0-9]*/;


var start = function()
{
    inputArray = input.split(",");
    setDirection(0);
};

start();
function outputBlocksAway()
{
    if(x < 0){
        x = x * -1;
    }
    if(y < 0){
        y = y*-1;
    }
    console.log("result: " + (x+y));
}
function setDirection(index)
{
        if(index===inputArray.length)
            return;
        var value = inputArray[index];
        var turn = value.trim()[0];
        var numberOfBlocks  = value.match(/\d+/)[0];
        var turnRight = (turn === TURN.RIGHT);

        switch(direction)
        {
            case DIRECTION.NORTH: 
                direction = (turnRight)?DIRECTION.EAST:DIRECTION.WEST;
                for(var i=0;i< numberOfBlocks; i++)
                {
                    turnRight?(x++):(x--)
                    var currentCoordinate = "(" + x + "," + y + ")";
                    if(coordinates.indexOf(currentCoordinate)>= 0)
                    {
                        outputBlocksAway();
                        setDirection(inputArray.length);
                    } else{
                        coordinates += currentCoordinate;
                    }
                }
                break;                
            case DIRECTION.EAST:
              for(var i=0;i< numberOfBlocks; i++)
                {
                    turnRight?(y--):(y++);
                    // checkCoordinatesForCross(x , y);
                    var currentCoordinate = "(" + x + "," + y + ")";
                    if(coordinates.indexOf(currentCoordinate)>= 0)
                    {
                        outputBlocksAway();
                        setDirection(inputArray.length);
                    } else{
                        coordinates += currentCoordinate;
                    }
                }
                direction = (turnRight)?DIRECTION.SOUTH:DIRECTION.NORTH;
                break;
            case DIRECTION.SOUTH:
                 for(var i=0;i< numberOfBlocks; i++)
                {
                    turnRight?(x--):(x++);
                    // checkCoordinatesForCross(x , y);
                    var currentCoordinate = "(" + x + "," + y + ")";
                    if(coordinates.indexOf(currentCoordinate)>= 0)
                    {
                        outputBlocksAway();
                        setDirection(inputArray.length);
                    } else{
                        coordinates += currentCoordinate;
                    }
                }
                direction = turnRight?DIRECTION.WEST:DIRECTION.EAST;
                break;
            case DIRECTION.WEST:
                for(var i=0;i< numberOfBlocks; i++)
                {
                    turnRight?(y++):(y--);
                    // checkCoordinatesForCross(x , y);
                    var currentCoordinate = "(" + x + "," + y + ")";
                    if(coordinates.indexOf(currentCoordinate)>= 0)
                    {
                        outputBlocksAway();
                        setDirection(inputArray.length);
                    } else{
                        coordinates += currentCoordinate;
                    }
                }
                direction = turnRight?DIRECTION.NORTH:DIRECTION.SOUTH;
                break;
        }
        setDirection(++index);
}