
//NESTED FOR LOOPS
/* 

1
12
123
1234
12345

*/
//note: use of type coersion below from string to
for(let i = 1; i <= 3; i++){
    let str = ''
    for(let j = 1; j<=i; j++){
        str += j  //type coersion
    }
    console.log(str)
}

/*

    1: initialize i to 1
    2: check for condition if 1 <= 3 (true)
    3: initializes str as empty string
    4: enters for loop, initializing variable j to 1
    5: checks for condition if j <=1 (true)
    6: initializes str to j which is 1 so concatenates str as "1"
    7: increments j by 1 so now j = 2
    8: checks for condition j<=i, (2 <= 1)(false)
    9: exits for loop and console logs str which is "1"
    10: increment i by 1, now i = 2
    11: check for condition i<=3 (2<=3) (true)
    12: (repeat step 3) str set to to empty string and enter inner for loop
    13: initialize j as 1
    14: checks if j<=i, 1 <=2 (true)
    15: enters inner for loop and concatenates j to empty string str so str now is "j"
    16: increment j by 1 so j is now 2
    17: checks if j<=i (2<=2) (true)
    18: concatenates j to str which is currently empty str = "str" + "j" ("12")
    19: increments j by 1 (from 2 to 3) j = 3
    20: check condition j<= i (3<=2) (false)
    21: kick out of inner for loop and print str "12"
    22: increment i by 1 so it becomes 3
    23: check the condition if i<=3 3<=3 (true)
    24: reinitialize string to be empty
    25: enter inner for loop initializing j to 1
    26: check the condition if j<=i (1<=3)(true)
    27: concatenate j (1) to str variable
    28: increment j by 1 so now j=2
    29: check condition j<i (2<3) (true)
    30: concatenate 2 to str so str = "12"
    31: increment j by 1 so j= 3
    32: checks condition (true)
    33: enter loop and concatenate 3 as a string to variable
    34: increment j to 4
    35: check condition if j<=i 4<=3 (false)
    36: print str variable which is now "123"
    37: increment i by 1 from 3 to 4
    38: check condition if 4<=3 (false)
    39: exits outer for loop for first time
