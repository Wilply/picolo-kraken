const listequestion = [ "@#@J1@#@ bois autant de gorgées que le nombre de personnes que t’as chopé depuis que t’es à l’INT.",
                        "Action/vérité, @#@J1@#@ choisit une action ou une verité pour @#@J2@#@.",
                        "@#@J1@#@ masse @#@J2@#@ sans se plaindre. (La tasse de thé) #consentement. Celui qui refuse bois",
                        "@#@J1@#@ et @#@J2@#@ racontent une anecdote vraie ou fausse, le reste de la salle vote et les perdants boivent 3 gorgées. (si tout le monde a juste, celui qui a raconté boit 5 gorgées)",
                        "Tous ceux qui veulent coucher avec qq1 qui est dans la pièce boivent 2 gorgées (bonus, ceux qui disent avec qui distribuent 4 gorgées)",
                        "Ceux qui on déjà insulté leur partenaire au lit boivent 3, ils les distribuent si c’était demandé",
                        "@#@J1@#@ pendant 5 min, tu dois chopper quiconque dit ton nom, bois 2 à chaque refus.",
                        "@#@J1@#@ suce le doigt sensuellement de @#@J2@#@  ou boit 5",
                        "Donnez les raisons de coucher avec un inconnu, le premier qui ne trouve plus d’argument boit 4. @#@J1@#@ commence",
                        "@#@J1@#@ et @#@J2@#@ félicitations, vous jouez maintenant aussi au je bois tu bois",
                        "Un vote pour oui ou non vendre des dildos à l’épicerie solidaire, les perdants boivent 3",
                        "@#@J1@#@ distribue autant de gorgées qu’il/elle a reçu de suçons à l’INT",
                        "D’après vous, qui choppe le plus, les 1A, les 2A ou 3A ? Les perdants boivent 2",
                        "A tour de rôle citer le nom d’un Eclipse, le perdant boit 4. @#@J1@#@ commence",
                        "@#@J1@#@ lèche l’oreille de @#@J2@#@ ou bois 5 gorgées", 
                        "@#@J1@#@ et @#@J2@#@ celui qui a couché avec le plus de personnes à l’INT distribue 4 gorgées.",
                        "@#@J1@#@ et @#@J2@#@ faites des pronostics sur le nombre de personnes que Julien a baisé, le plus proche distribué 3 gorgées, l’autre les bois.",
                        "@#@J1@#@ et @#@J2@#@ faites des pronostics sur le nombre de personnes que Justine a baisé, le plus proche distribué 3 gorgées, l’autre les bois.",
                        "@#@J1@#@ et @#@J2@#@ faites des pronostics sur le bonnet de soutient gorges de Marion. Le plus proche distribue 4 gorgées, l’autre les bois.",
                        "@#@J1@#@ et @#@J2@#@ faites des pronostics sur le nombre de prez que s’est tape Seji. Le plus proche distribue 4 gorgées, l’autre en bois 4.",
                        "A tour de rôle, distribuez autant de gorgées que vous avez eu de partenaires sexuels à l’INT. @#@J1@#@ commence.",
                        "@#@J1@#@ devient le killer pendant 5 tours, toux ceux qui le regardent dans les yeux boivent 4 gorgées.",
                        "@#@J1@#@ et @#@J2@#@ racontent une anecdote gênante, les autres votent pour la plus gênante, le gagnant distribue 4 gorgées.",
                        "Jeu de l’autoroute: @#@J1@#@ essaye de rejoindre @#@J2@#@ par le biais des personnes que vous avez choppé",
                        "@#@J1@#@ devine la dernière personne que @#@J2@#@ a choppé. 3 essais, 1 gorgée par mauvaises réponses",
                        "@#@J1@#@ et @#@J2@#@, nous dévoilent un secret ou embrouille sur leur liste/club/asso, ou boivent 4.", 
                        "A 3 @#@J1@#@ et @#@J2@#@ boivent un cul sec, le dernier a finir son verre en boit un deuxieme",
                        "Donnez une position du kamasutra, celui qui se répète ou se trompe boit 2 gorgés. @#@J1@#@ commence", 
                        "@#@J1@#@ si tu n'as jamais touché une bite distribue 5 gorgés",
                        "Donnez le nom des listes gagnante BDE. @#@J1@#@ commence",
                        "Donnez le nom des listes gagnante asint. @#@J1@#@ commence",
                        "Pouce en l'air ceux qui ont eu - de 5 expériences sexuelles, pouce en bas ceux qui ont eu + 6 expériences sexuelles. Les minoritaires boivent 3 gorgées",
                        "@#@J1@#@ et @#@J2@#@ faîtes des cris de jouissance. Celui qui est le moins bon boit 2 gorgés",
                        "@#@J1@#@ fait un suçon à @#@J2@#@ ou boit 4 gorgés #consentement",
                        "@#@J1@#@ et @#@J2@#@ doivent récupérer un soutif de leur liste/club/asso respective, le perdant boit 4 gorgés",
                        "@#@J1@#@ montre ton cul sinon boit 1 gorgé",
                        "@#@J1@#@ et @#@J2@#@ racontent une blague, celui où celle qui a la moins bonne boit 2 gorgés",
                        "@#@J1@#@ si tu as déjà pécho quelqu'un de l'autre liste/asso tu distribues 3 gorgés",
                        ];

function play() {
    const regexJ1 = /@#@J1@#@/
    const regexJ2 = /@#@J2@#@/
    var krakens = getTable('tablekrakens')
    var autres = getTable('tableautres')
    //on random les joueurs
    var pkraken = Math.floor(Math.random() * krakens.length);
    var pautre = Math.floor(Math.random() * autres.length);
    var players = [krakens[pkraken], autres[pautre]]
    //on random la place des joueurs dans la question
    var rdplace = Math.floor(Math.random() * 2);
    var p1 = players[rdplace]
    var p2 = players[1 - rdplace]
    //on random la question
    var qno = Math.floor(Math.random() * listequestion.length);
    var q = listequestion[qno].replace(regexJ1, p1).replace(regexJ2, p2)
    document.getElementById("display").innerHTML = q
    //console.log(q)
}

function checkbeforeplay() {
    if (getTable('tablekrakens').length == 0 || getTable('tableautres').length == 0) {
        location.href = './index.html'
    }
}
// ICI C EST POUR AJOUTER DES JOUEURS //
function displayTable() {
    var table = getTable('tablekrakens')
    var table2 = getTable('tableautres')
    //table.push('titi')
    var t = document.getElementById('table')
    t.innerHTML = "<tr><th>EQUIPE KRAKEN</th><th>EQUIPE APERO</th></tr>"
    //console.log(table)
    var taille
    if (table.length > table2.length) {
        taille = table.length
    } else {
        taille = table2.length
    }
    for (var index = 0; index < taille; index++) {
        r = t.insertRow(-1)
        c1 = r.insertCell(0)
        c2 = r.insertCell(1)
        if (table[index]) {
            c1.innerHTML = table[index]
        }
        if (table2[index]) {
            c2.innerHTML = table2[index]
        }
    }
}

function addKraken() {
    var name = document.getElementById('krakeninput').value
    if (name == "") {
        return
    }
    var tablename = 'tablekrakens'
    var t = getTable(tablename)
    t.push(name)
    sessionStorage.setItem(tablename, JSON.stringify(t))
    document.getElementById('krakeninput').value = ""
    displayTable()
}

function addAutre() {
    var name = document.getElementById('autreinput').value
    if (name == "") {
        return
    }
    var tablename = 'tableautres'
    var t = getTable(tablename)
    t.push(name)
    sessionStorage.setItem(tablename, JSON.stringify(t))
    document.getElementById('autreinput').value = ""
    displayTable()
}

function reset() {
    sessionStorage.clear()
    console.log("allo??")
    displayTable()
}

function start() {
    if (getTable('tableautres').length > 0 && getTable('tablekrakens').length > 0) {
        location.href = './game.html'
        return
    }
    alert("IL FAUT AU MOINS 2 JOUEURS")
}

function getTable(name) {
    if (sessionStorage.getItem(name) == null) {
        sessionStorage.setItem(name, JSON.stringify([]))
    }
    return JSON.parse(sessionStorage.getItem(name))
}

function pressEnter(addFunction) {
    addFunction()
    return false
}