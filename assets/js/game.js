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
var narrateBox = $("#narrator");
var chosenTeam, enemyTeam = 0;
var teamChosen, enemyChosen = false;
var attackMultiplier = 1;
var enemiesBeaten = 0;

function setEnemies(num){
    teamChosen = true;
    if(num !== 0){
        umBox.empty();
        umEnemyBox.append("<span id='char1'><h3 class='name'>Jim Harbaugh</h3><img src='" + teams[0].image +"'><h4 class='hp' id='umHP'>" + teams[0].HP + " HP</h4></span>")
    }
    if(num !== 1){
        osuBox.empty();
        osuEnemyBox.append("<span id='char2'><h3 class='name'>Brutus the Buckeye</h3><img src='" + teams[1].image +"'><h4 class='hp' id='osuHP'>" + teams[1].HP + " HP</h4></span>")
    }
    if(num !== 2){
        msuBox.empty();
        msuEnemyBox.append("<span id='char3'><h3 class='name'>Sparty</h3><img src='" + teams[2].image +"'><h4 class='hp' id='msuHP'>" + teams[2].HP + " HP</h4></span>")
    }
    if(num !== 3){
        wiscoBox.empty();
        wiscoEnemyBox.append("<span id='char4'><h3 class='name'>Bucky the Badger</h3><img src='" + teams[3].image +"'><h4 class='hp' id='wiscoHP'>" + teams[3].HP + " HP</h4></span>")
    }
}

var teams = [
    // University of Michigan
    {
        "name": "Jim Harbaugh",
        "image": "assets/images/umich.jpg",
        "HP": 2000,
        "AP": 30,
        "CAP": 100,
        "reset": function(){
            umBox.empty();
            umBox.append("<span id='char1'><h3 class='name'>Jim Harbaugh</h3><img src='" + this.image +"'><h4 class='hp' id='umHP'>" + this.HP + " HP</h4></span>");
        },
        "setMyTeam": function(){
            chosenTeam = 0;
            setEnemies(0);
            attackButton.removeClass("defaultButton");
            attackButton.addClass("umButton");
        },
        "setEnemy": function(){
            enemyTeam = 0;
            enemyChosen = true;
            umEnemyBox.empty();
            enemyBox.append("<span id='char1'><h3 class='name'>Jim Harbaugh</h3><img src='" + this.image +"'><h4 class='hp' id='umHP'>" + this.HP + " HP</h4></span>");
        },
        "updateHP": function(){
            $("#umHP").text(this.HP + " HP")
        }
    },
    // Ohio State booo
    {
        "name": "Brutus the Buckeye",
        "image": "assets/images/osu.jpg",
        "HP": 2500,
        "AP": 50,
        "CAP": 100,
        "reset": function(){
            osuBox.empty();
            osuBox.append("<span id='char2'><h3 class='name'>Brutus the Buckeye</h3><img src='" + this.image +"'><h4 class='hp' id='osuHP'>" + this.HP + " HP</h4></span>");
        },
        "setMyTeam": function(){
            chosenTeam = 1;
            setEnemies(1);
            attackButton.removeClass("defaultButton");
            attackButton.addClass("osuButton");
        },
        "setEnemy": function(){
            enemyTeam = 1;
            enemyChosen = true;
            osuEnemyBox.empty();
            enemyBox.append("<span id='char2'><h3 class='name'>Brutus the Buckeye</h3><img src='" + this.image +"'><h4 class='hp' id='osuHP'>" + this.HP + " HP</h4></span>");
        },
        "updateHP": function(){
            $("#osuHP").text(this.HP + " HP")
        }
    },
    // Michigan State
    {
        "name": "Sparty",
        "image": "assets/images/msu.jpg",
        "HP": 1700,
        "AP": 20,
        "CAP": 100,
        "reset": function(){
            msuBox.empty();
            msuBox.append("<span id='char3'><h3 class='name'>Sparty</h3><img src='" + this.image +"'><h4 class='hp' id='msuHP'>" + this.HP + " HP</h4></span>");
        },
        "setMyTeam": function(){
            chosenTeam = 2;
            setEnemies(2);
            attackButton.removeClass("defaultButton");
            attackButton.addClass("msuButton");
        },
        "setEnemy": function(){
            enemyTeam = 2;
            enemyChosen = true;
            msuEnemyBox.empty();
            enemyBox.append("<span id='char3'><h3 class='name'>Sparty</h3><img src='" + this.image +"'><h4 class='hp' id='msuHP'>" + this.HP + " HP</h4></span>");
        },
        "updateHP": function(){
            $("#msuHP").text(this.HP + " HP")
        }
    },
    // Wisconsin University
    {
        "name": "Bucky the Badger",
        "image": "assets/images/wisconsin.jpg",
        "HP": 2200,
        "AP": 30,
        "CAP": 80,
        "reset": function(){
            wiscoBox.empty();
            wiscoBox.append("<span id='char4'><h3 class='name'>Bucky the Badger</h3><img src='" + this.image +"'><h4 class='hp' id='wiscoHP'>" + this.HP + " HP</h4></span>");
        },
        "setMyTeam": function(){
            chosenTeam = 3;
            setEnemies(3);
            attackButton.removeClass("defaultButton");
            attackButton.addClass("wiscoButton");
        },
        "setEnemy": function(){
            enemyTeam = 3;
            enemyChosen = true;
            wiscoEnemyBox.empty();
            enemyBox.append("<span id='char4'><h3 class='name'>Bucky the Badger</h3><img src='" + this.image +"'><h4 class='hp' id='wiscoHP'>" + this.HP + " HP</h4></span>");
        },
        "updateHP": function(){
            $("#wiscoHP").text(this.HP + " HP")
        }
    }
];

// Restart the game
function totReset(){
    enemyChosen = false;
    teamChosen = false;
    attackMultiplier = 1;
    for(var i = 0; i < teams.length; i++){
        teams[i].reset();
    }
}

// Function to pick your team
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

// Function to choose enemy team
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
    narrateBox.html("<p>You have attacked " + teams[enemyTeam].name + " for " + teams[chosenTeam].AP * attackMultiplier + " damage.</p>")
    teams[enemyTeam].HP -= teams[chosenTeam].AP * attackMultiplier++;
    if(teams[enemyTeam].HP <= 0){
        enemiesBeaten++;
        if(enemiesBeaten === 3){
            narrateBox.empty();
            narrateBox.html("<h1>You are the Big Ten Champion!</h1>");
            enemyChosen = false;
            enemyBox.empty();
            var audioElement = document.createElement("audio");
            audioElement.setAttribute("src", "assets/sounds/weAreTheChampions.mp3");
            audioElement.play();
        }
        else{
            narrateBox.empty();
            narrateBox.html("<p>You have defeated " + teams[enemyTeam].name + ".</p>");
            narrateBox.append("<p>Choose another enemy!</p>")
            enemyBox.empty();
            enemyChosen = false;
        }
    }
    else{
        teams[enemyTeam].updateHP();
        counterAttack();
    }
}

function counterAttack(){
    teams[chosenTeam].HP -= teams[enemyTeam].CAP;
    narrateBox.append("<p>" + teams[enemyTeam].name + " has attacked you back for " + teams[enemyTeam].CAP + " damage.</p>")
    if(teams[chosenTeam].HP <= 0){
        narrateBox.empty();
        narrateBox.html("<p>You have been defeated. Maybe you'll win the Big Ten Championship next year!</p>")
        totReset();
    }
    else{
        teams[chosenTeam].updateHP();
    }
}

attackButton.click(function(){
    if(teamChosen && enemyChosen){
        attack();
    }
});
