
var DIRECTION  = { NORTH: 'NORTH', SOUTH:'SOUTH', EAST: 'EAST', WEST: 'WEST'}
var TURN = {LEFT: 'L', RIGHT: 'R'}
var direction = DIRECTION.NORTH;
var blocksAway = 0;
var input = "L5, R1, R4, L5, L4, R3, R1, L1, R4, R5, L1, L3, R4, L2, L4, R2, L4, L1, R3, R1, R1, L1, R1, L5, R5, R2, L5, R2, R1, L2, L4, L4, R191, R2, R5, R1, L1, L2, R5, L2, L3, R4, L1, L1, R1, R50, L1, R1, R76, R5, R4, R2, L5, L3, L5, R2, R1, L1, R2, L3, R4, R2, L1, L1, R4, L1, L1, R185, R1, L5, L4, L5, L3, R2, R3, R1, L5, R1, L3, L2, L2, R5, L1, L1, L3, R1, R4, L2, L1, L1, L3, L4, R5, L2, R3, R5, R1, L4, R5, L3, R3, R3, R1, R1, R5, R2, L2, R5, L5, L4, R4, R3, R5, R1, L3, R1, L2, L2, R3, R4, L1, R4, L1, R4, R3, L1, L4, L1, L5, L2, R2, L1, R1, L5, L3, R4, L1, R5, L5, L5, L1, L3, R1, R5, L2, L4, L5, L1, L1, L2, R5, R5, L4, R3, L2, L1, L3, L4, L5, L5, L2, R4, R3, L5, R4, R2, R1, L5";

var test1 = "R2, L3";
var test2 = "R2, R2, R2";
var test3 = "R5, L5, R5, R3";
var x = 0; y =0;

var inputArray;
var re = /[0-9]*/;
var start = function()
{
    inputArray = input.split(",");
    inputArray.forEach(function(value)
    {
        var turn = value.trim()[0];
        var numberOfBlocks  = value.match(/\d+/)[0];
        console.log(value + ": " + turn + " - " + numberOfBlocks);;
        
        setDirection(turn, numberOfBlocks); 
    });

    console.log(x + " - " + y);
    if(x < 0)
    {
        x = x * -1;
    }
    if(y < 0)
    {
        y = y*-1;
    }

    console.log(x + y);
};

start();
function setDirection(turn, numberOfBlocks)
{
    // if(turnRight)
    // {
        var turnRight = (turn === TURN.RIGHT);
        console.log("Start: " + direction+ "\t" + x + ":" + y + "\tturnRight:" + turnRight);
        switch(direction)
        {
            case DIRECTION.NORTH: 
                x = x + (numberOfBlocks*(turnRight?(1):(-1)));
                direction = (turnRight)?DIRECTION.EAST:DIRECTION.WEST;
                break;
            case DIRECTION.EAST:
                y = y + (numberOfBlocks*(turnRight?(-1):(1)));
                direction = (turnRight)?DIRECTION.SOUTH:DIRECTION.NORTH;
                break;
            case DIRECTION.SOUTH:
                x = x + (numberOfBlocks*(turnRight?(-1):(1)));
                direction = turnRight?DIRECTION.WEST:DIRECTION.EAST;
                break;
            case DIRECTION.WEST:
                direction = turnRight?DIRECTION.NORTH:DIRECTION.SOUTH;
                // x = x - [NUMBER]
                y = y + (numberOfBlocks*(turnRight?(1):(-1)));
                break;
        }
        console.log("Finish: " + direction + "\t" + x + ":" + y);
    // } else if (turn === TURN.LEFT) {
    //     switch(direction)
    //     {
    //         case DIRECTION.NORTH: 
    //             // direction = DIRECTION.EAST;
    //             break;
    //         case DIRECTION.EAST:
    //             // direction = DIRECTION.SOUTH;
    //             break;
    //         case DIRECTION.SOUTH:
    //             // direction = DIRECTION.WEST;
    //             break;
    //         case DIRECTION.WEST:
    //             // direction = DIRECTION.NORTH;
    //             break;
    //     }
    // }
}