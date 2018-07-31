var umBox = $("#char1");
var osuBox = $("#char2");
var msuBox = $("#char3");
var wiscoBox = $("#char4");
var umEnemyBox = $("#enemy1");
var osuEnemyBox = $("#enemy2");
var msuEnemyBox = $("#enemy3");
var wiscoEnemyBox = $("#enemy4");
var charBox = $("#charSelect");
var narrateBox = $("#narrator");
var enemyBox = $("#opponent");
var attackButton = $("#attackButton");
var chosenTeam, enemyTeam = 0;
var teamChosen, enemyChosen = false;
var attackMultiplier = 1;

function setEnemies(num){
    teamChosen = true;
    if(num !== 0){
        umBox.empty();
        umEnemyBox.append("<img id='char1'src='" + teams[0].image +"'>")
    }
    if(num !== 1){
        osuBox.empty();
        osuEnemyBox.append("<img id='char2'src='" + teams[1].image +"'>")
    }
    if(num !== 2){
        msuBox.empty();
        msuEnemyBox.append("<img id='char3'src='" + teams[2].image +"'>")
    }
    if(num !== 3){
        wiscoBox.empty();
        wiscoEnemyBox.append("<img id='char4'src='" + teams[3].image +"'>")
    }
}

var teams = [
    // University of Michigan
    {
        "name": "Jim Harbaugh",
        "image": "assets/images/umich.jpg",
        "HP": 1000,
        "AP": 100,
        "CAP": 10,
        "reset": function(){
            umBox.empty();
            umBox.append("<img src='" + this.image +"'>");
        },
        "setMyTeam": function(){
            chosenTeam = 0;
            // chosenBox.append("<img src='" + this.image +"'>");
            setEnemies(0);
        },
        "setEnemy": function(){
            enemyTeam = 0;
            enemyChosen = true;
            umEnemyBox.empty();
            enemyBox.append("<img src='" + this.image +"'>");
        }
    },
    // Ohio State booo
    {
        "name": "Brutus the Buckeye",
        "image": "assets/images/osu.jpg",
        "HP": 1000,
        "AP": 100,
        "CAP": 10,
        "reset": function(){
            osuBox.empty();
            osuBox.append("<img src='" + this.image +"'>");
        },
        "setMyTeam": function(){
            chosenTeam = 1;
            //chosenBox.append("<img src='" + this.image +"'>");
            setEnemies(1);
        },
        "setEnemy": function(){
            enemyTeam = 1;
            enemyChosen = true;
            osuEnemyBox.empty();
            enemyBox.append("<img src='" + this.image +"'>");
        }
    },
    // Michigan State
    {
        "name": "Sparty",
        "image": "assets/images/msu.jpg",
        "HP": 1000,
        "AP": 100,
        "CAP": 10,
        "reset": function(){
            msuBox.empty();
            msuBox.append("<img src='" + this.image +"'>");
        },
        "setMyTeam": function(){
            chosenTeam = 2;
            //chosenBox.append("<img src='" + this.image +"'>");
            setEnemies(2);
        },
        "setEnemy": function(){
            enemyTeam = 2;
            enemyChosen = true;
            msuEnemyBox.empty();
            enemyBox.append("<img src='" + this.image +"'>");
        }
    },
    // Wisconsin University
    {
        "name": "Bucky the Badger",
        "image": "assets/images/wisconsin.jpg",
        "HP": 1000,
        "AP": 100,
        "CAP": 10,
        "reset": function(){
            wiscoBox.empty();
            wiscoBox.append("<img src='" + this.image +"'>");
        },
        "setMyTeam": function(){
            chosenTeam = 3;
            //chosenBox.append("<img src='" + this.image +"'>");
            setEnemies(3);
        },
        "setEnemy": function(){
            enemyTeam = 3;
            enemyChosen = true;
            wiscoEnemyBox.empty();
            enemyBox.append("<img src='" + this.image +"'>");
        }
    }
];


function totReset(){
    enemyChosen = false;
    teamChosen = false;
    attackMultiplier = 1;
    for(var i = 0; i < teams.length; i++){
        teams[i].reset();
    }
}

umBox.click(function(){
    if(!teamChosen){
        teams[0].setMyTeam();
    }
});
osuBox.click(function(){
    if(!teamChosen){
        teams[1].setMyTeam();
    }
});
msuBox.click(function(){
    if(!teamChosen){
        teams[2].setMyTeam();
    }
});
wiscoBox.click(function(){
    if(!teamChosen){
        teams[3].setMyTeam();
    }
});

umEnemyBox.click(function(){
    if(!enemyChosen){
        teams[0].setEnemy();
    }
});
osuEnemyBox.click(function(){
    if(!enemyChosen){
        teams[1].setEnemy();
    }
});
msuEnemyBox.click(function(){
    if(!enemyChosen){
        teams[2].setEnemy();
    }
});
wiscoEnemyBox.click(function(){
    if(!enemyChosen){
        teams[3].setEnemy();
    }
});


function attack(){
    console.log("Previous HP: " +  teams[enemyTeam].HP)
    teams[enemyTeam].HP -= teams[chosenTeam].AP * attackMultiplier++;
    console.log("Current HP: " + teams[enemyTeam].HP)
    if(teams[enemyTeam].HP <= 0){
        enemyBox.empty();
        enemyChosen = false;
    }
    else{
        counterAttack();
    }
}

function counterAttack(){
    teams[chosenTeam].HP -= teams[enemyTeam].CAP;
    if(teams[chosenTeam].HP <= 0){
        totReset();
    }
}

attackButton.click(function(){
    if(teamChosen && enemyChosen){
        attack();
    }
});
