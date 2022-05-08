var radius = 8;
var arrived = 0; //palline atterrate
var cicles = 0; //cicli di palline in movimento
var throw_now = true; //per lanciare le palline un ciclo si e uno no
var pause_button;
var score;      //riferimento al div del punteggio
var game;       //riferimento al div della partita
var sel_diff = 1;         //difficoltà selezionata, media di default
var animation_cr = 0;   //animazione iniziale personaggio
var animation_bl = 0;   //animazione iniziale pallina
var character;          //riferimento al div del personaggio
var timer;      

//tiro        
var x_start;        //posizione iniziale del mouse
var y_start;        //posizione iniziale del mouse
var angle;          //angolo di tiro

var obst_prob = 33; //probabilità di generare un ostacolo

//array dei possibili tipi di ostacolo: 70% box, 25% new_ball, 5% special
var types = [   "box",          
                "box",
                "box",
                "box",
                "box",
                "box",
                "box",
                "box",
                "box",
                "box",
                "new_ball",
                "new_ball",
                "new_ball",
                "special",
            ]

var special = ["split", "up_down", "left_right"];
var anim_LR; //timer animazione speciale Left Right
var anim_UD; //timer animazione speciale Up Down
