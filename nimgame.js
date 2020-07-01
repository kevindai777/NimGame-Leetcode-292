//Objective is as the following:
//You are playing the following Nim Game with your friend: 
//There is a heap of stones on the table, each time one of you take turns 
//to remove 1 to 3 stones. The one who removes the last stone will 
//be the winner. You will take the first turn to remove the stones.

//Both of you are very clever and have optimal strategies for the game. 
//Write a function to determine whether you can win the game given the 
//number of stones in the heap.

let n = 8


//O(1) solution that checks if n is divisible by 4.
//This is since if the number of rocks is divisible by 4,
//you will always lose.

return (n % 4 !== 0)