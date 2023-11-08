
var readlineSync = require('readline-sync');
let status
let playerhealth = 100;
let healPotions = 5
let currentEnemy;
let enemyhealth;
let enemylist = ["|\u001b[31mOWEN\u001b[0m__________________________________________________|","|\u001b[31mTROLL\u001b[0m_________________________________________________|","|\u001b[31mBATS\u001b[0m__________________________________________________|"];
let Line1, Line2, Line3, Line4, Line5, Line6, Line7, Line8, Line9, Line10, Line11, Line12
function randomEnemy() {
    return enemylist[Math.floor(Math.random() * enemylist.length)];
}
function starting (){
    start()
    let input = readlineSync.question("DO U WANT TO START PRESS A: ");
    if (input === "a"){
    enemyfunctions();
    gui();
    moves();
    }
}

function displayHealthEnemy(){
    let eHpString = enemyhealth.toString();
    if (enemyhealth < 100 ){
        enemyhealth = eHpString+"   "
    }else if (enemyhealth < 10){
        enemyhealth = eHpString + "     "
    }else {
        enemyhealth = eHpString
    }
    return eHpString
}
function displayHealthPlayer(){
    let pHpString = playerhealth.toString();
    if (playerhealth < 100 ){
        playerhealth = pHpString + "     "
    }else if (playerhealth < 10){
        playerhealth = pHpString + "     "
    }else {
        playerhealth = pHpString
    }
    return pHpString
}

function moves (question, optionA, optionB, optionC, optionD, anwser){
    console.log(question+"\n" +optionA+ "\n" +optionB+ "\n" +optionC+"\n" +optionD)
    let input = readlineSync.question("I wil do: ");
    if(input === anwser){
        console.log ("\u001b[32mDit antwoord is goed.\u001b[0m");
    } else if(input === anwser) {
        console.log("\u001b[31mDit antwoord is fout.\u001b[0m")
    } else {
        console.log("\u001b[31mDit is niet antwoord op de vraag.\u001b[0m")
    }
} 

function enemyfunctions(){
    if(currentEnemy === "|\u001b[31mOWEN\u001b[0m__________________________________________________|"){
        Line1 =  "|                  XxVVXXXxRxRxxASDXx                  |";
        Line2 =  "|                  X  x  VVV x xxX X                   |";
        Line3 =  "|                 |                 |                  |";
        Line4 =  "|                 |                 |                  |";
        Line5 =  "|                (|  (T)       (T)  |)                 |";
        Line6 =  "|                 |        /-       |                  |";
        Line7 =  "|                 |                 |                  |";
        Line8 =  "|                 |       ===       |                  |";
        Line9 =  "|                 '-._____________.-'                  |";
        Line10 = "|                _________| |__________                |";
        Line11 = "|              /                       \\               |";
        Line12 = "|             |                         |              |";
        enemyhealth = 75
    }
    else if(currentEnemy === "|\u001b[31mTROLL\u001b[0m_________________________________________________|"){
        Line1 =  "|                                                      |";
        Line2 =  "|                                                      |";
        Line3 =  "|                    :     :      :                    |";
        Line4 =  "|                   .||-==| |==--||.                   |";
        Line5 =  "|                  (|  ===   ===  |                    |";
        Line6 =  "|                   |   T     T   |                    |";
        Line7 =  "|                  /              |=                   |";
        Line8 =  "|                 |    //-----\\\\    |                  |";
        Line9 =  "|                 ''-.._________..-''                  |";
        Line10 = "|                _..______| |_______.._                |";
        Line11 = "|              /      |           |     \\              |";
        Line12 = "|             |      /            \\     |              |";
        enemyhealth = 150
    }
    else if(currentEnemy === "|\u001b[31mBATS\u001b[0m__________________________________________________|"){
        Line1 =  "|                                                      |";
        Line2 =  "|                                                      |";
        Line3 =  "|                                                      |";
        Line4 =  "|                ^v  v^                                |";
        Line5 =  "|           _.-, |_TT_| ,-._                           |";
        Line6 =  "|          *-.,_x<    >x_,.-*                          |";
        Line7 =  "|                 |  |              ^v  v^             |";
        Line8 =  "|                 *-*          _.-, |_TT_| ,-._        |";
        Line9 =  "|                             *-.,_x<    >x_,.-*       |";
        Line10 = "|                                    |  |              |";
        Line11 = "|                                    *-*               |";
        Line12 = "|                                                      |";
        enemyhealth = 50
    }
    return Line1, Line2, Line3, Line4, Line5, Line6, Line7, Line8, Line9, Line10, Line11, Line12
}
function death(){
    Line1 =  "|                                                      |";
    Line2 =  "|                                                      |";
    Line3 =  "|                                                      |";
    Line4 =  "|                                                      |";
    Line5 =  "|                                                      |";
    Line6 =  "|                      GAME OVER                       |";
    Line7 =  "|                                                      |";
    Line8 =  "|                                                      |";
    Line9 =  "|                DO YOU WANT TO CONTINUE               |";
    Line10 = "|                    A: YES    B: NO                   |";
    Line11 = "|                                                      |";
    Line12 = "|                                                      |";
    playerhealth = 100
    gui()
    let input = readlineSync.question("YES OR NO: ");
    if (input === "a"){
        randomEnemy();
        currentEnemy = randomEnemy();
        enemyfunctions()
        status = "!!!NEW ENEMY!!!"
        gui()
    }else {
        console.log("U CAN CLOSE THIS WINDOW")
    }
}



function start(){
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("                                                                             _______________________________________________________");
    console.log("                                                                             |                                                      |")
    console.log("                                                                             |   OP EEN RANDOM ZONDAG ZIT JE MET JE VRIENDEN OP     |")
    console.log("                                                                             |   EEN BANKJE JULLIE HEB DE DEVILS HERB BIJ JULLIE    |")
    console.log("                                                                             |                                                      |")
    console.log("                                                                             |   NA ONGEVEER EEN UUR LATER VOEL JE JE HEEL APART    |")
    console.log("                                                                             |   ER IS IETS MIS MET WAT JE!!                        |")
    console.log("                                                                             |                                                      |")
    console.log("                                                                             |   JE VRIENDEN PROBEREN JE TE HELPEN                  |")
    console.log("                                                                             |   ALLEEN ZE LIJKEN NIET MEER OP HUNZELF              |")
    console.log("                                                                             |                                                      |")
    console.log("                                                                             |   JE WORDT BANG EN VALT HUN AAN OWEN IS EEN          |")
    console.log("                                                                             |   VAN DE EERSTE DIE ER APART BEGINT UIT TE ZIEN      |")
    console.log("                                                                             |                                                      |")
    console.log("                                                                             |   DIT IS HOE JIJ BAD GAAT DENK JE BIJ JEZELF         |")
    console.log("                                                                             |   UITEINDELIJK REN JIJ WEG                           |")
    console.log("                                                                             |                                                      |")
    console.log("                                                                             |   NU ZIT JE HELEMAAL ALLEEN IN HET CENTRUM           |")
    console.log("                                                                             |                                                      |")
    console.log("                                                                             |                                                      |")
    console.log("                                                                             |                                                      |")
    console.log("                                                                             |                                                      |")
    console.log("                                                                             |                                                      |")
    console.log("                                                                             |                                                      |")
    console.log("                                                                             |                                                      |")
    console.log("                                                                             |                                                      |")
    console.log("                                                                             |                                                      |")
    console.log("                                                                             |                                                      |")
    console.log("                                                                             |                                                      |")
    console.log("                                                                             |                                                      |")
    console.log("                                                                             |######################################################|")
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
}

function gui(){
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("                                                                             _______________________________________________________");
    console.log("                                                                             "+currentEnemy+"");
    console.log("                                                                             "+Line1+"");
    console.log("                                                                             "+Line2+"");
    console.log("                                                                             "+Line3+"");
    console.log("                                                                             "+Line4+"");
    console.log("                                                                             "+Line5+"");
    console.log("                                                                             "+Line6+"");
    console.log("                                                                             "+Line7+"");
    console.log("                                                                             "+Line8+"");
    console.log("                                                                             "+Line9+"");
    console.log("                                                                             "+Line10+"");
    console.log("                                                                             "+Line11+"");
    console.log("                                                                             "+Line12+"");
    console.log("                                                                             |######################################################|")
    console.log("                                                                                                    "+status+"");
    console.log("");
    console.log("");
    console.log("                                           ______________________________________________________________________________________________________________________");
    console.log("                                          |YOUR HP: "+playerhealth+"                                                                ENEMY HP: "+enemyhealth+"                             |");
    console.log("                                          |HEAL POTIONS:"+healPotions+"                                                                                                        |");
    console.log("                                          |######################################################################################################################|")
    console.log("");
    console.log("");
    console.log("                                           ______________________________________________________________________________________________________________________");
    console.log("                                          |                                                                                                                      |");
    console.log("                                          |                    A: ATTACK                         B: HEAL POTIONS                     C: BLOCK                    |");
    console.log("                                          |                                                                                                                      |");
    console.log("                                          |                                                                                                                      |");
    console.log("                                          |                                                      WHAT WILL U DO?                                                 |");
    console.log("                                          |                                                                                                                      |");
    console.log("                                          |######################################################################################################################|");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
    console.log("");
}
status = "STARTED"
function moves (){
    let input = readlineSync.question("UR MOVE: ");
    if(input === "a"){
        enemyhealth = enemyhealth - 20
        playerhealth = playerhealth - 10
        status = "ATTACKED"
        if (enemyhealth <= 0){
            randomEnemy();
            currentEnemy = randomEnemy();
            enemyfunctions()
            status = "!!!NEW ENEMY!!!"
            gui()
            moves();
        }if (playerhealth <= 0){
            death()
            currentEnemy = "|                                                      |"
            status = "DEAD"
        }else{
            gui()
            moves();
        }
        return
    } else if(input === "b") {
        healPotions = healPotions - 1
        status = "HEALED"
        if (enemyhealth <= 0){
            randomEnemy();
            currentEnemy = randomEnemy();
            enemyfunctions()
            status = "!!!NEW ENEMY!!!"
            gui()
            moves();
        }
        else if (healPotions <=0){
            playerhealth = playerhealth + 0
            healPotions = 0
            status = "!!!CANT HEAL!!!"
            gui()
            moves();
        }if (playerhealth <= 0){
            death()
            currentEnemy = "|                                                      |"
            status = "DEAD"
        }else{
            playerhealth = playerhealth + 15 
            gui()
            moves();
        }
        return
    } else if(input === "c"){
        playerhealth = playerhealth - 5
        status = "BLOCKED"
        if (enemyhealth <= 0){
            randomEnemy();
            currentEnemy = randomEnemy();
            enemyfunctions()
            status = "!!!NEW ENEMY!!!"
            gui()
            moves();
        }else if (playerhealth <= 0){
            death()
            currentEnemy = "|                                                      |"
            status = "DEAD"
        }else{
            gui()
            moves();
        }
        return
    }else{
        console.log("THAT IS NOT A OPTION!!")
        gui();
        moves();
    }
} 

currentEnemy = randomEnemy();
starting()