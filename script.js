var count = 0; // Counter
var amount = 1; // Amount to inc/dec by
var sc; // Shiny charm checkbox value
var method; // Method dropdown value
// Pokemon
var pkmnCheck1;
var pkmnCheck2;
var pkmnCheck3;
// Default settings
var odds = "1/8192";
var bdodds = 8191/8192;
var complicated = false;
var complicatedbd = 0;
var until50 = 5678;
var until90 = 18862;
var chain = false;
var customValue = 1365;
var genSubmit = "7";
var methodSubmit = "encounters";
var countSafe = 0;

// Find value of cookies
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Update pokemon sprites
function updateSprites() {
    pkmnCheck1 = document.getElementById("pokemon1").value;
    pkmnCheck2 = document.getElementById("pokemon2").value;
    pkmnCheck3 = document.getElementById("pokemon3").value;
    document.cookie = "pkmn1save="+pkmnCheck1+"; expires=Sat, 20 Apr 2069 12:00:00 GMT;path=/";
    document.cookie = "pkmn2save="+pkmnCheck2+"; expires=Sat, 20 Apr 2069 12:00:00 GMT;path=/";
    document.cookie = "pkmn3save="+pkmnCheck3+"; expires=Sat, 20 Apr 2069 12:00:00 GMT;path=/";
    if (!pkmnCheck1 == "") {
        document.getElementById("sprite1").src = "https://play.pokemonshowdown.com/sprites/ani-shiny/" + pkmnCheck1.toLowerCase() + ".gif";
    } else {
        document.getElementById("sprite1").src = "blank.png";
    }
    if (!pkmnCheck2 == "") {
        document.getElementById("sprite2").src = "https://play.pokemonshowdown.com/sprites/ani-shiny/" + pkmnCheck2.toLowerCase() + ".gif";
    } else {
        document.getElementById("sprite2").src = "blank.png";
    }
    if (!pkmnCheck3 == "") {
        document.getElementById("sprite3").src = "https://play.pokemonshowdown.com/sprites/ani-shiny/" + pkmnCheck3.toLowerCase() + ".gif";
    } else {
        document.getElementById("sprite3").src = "blank.png";
    }
}

// Update share links
function updateLinks() {
    switch (method) {
        case "2re":
            genSubmit = "2";
            methodSubmit = "encounters";
            break;
        case "2sp":
            genSubmit = "2";
            methodSubmit = "eggs";
            break;
        case "2oej":
        case "2oei":
            genSubmit = "2";
            methodSubmit = "odd eggs";
            break;
        case "3re":
            genSubmit = "3";
            methodSubmit = "encounters";
            break;
        case "4re":
            genSubmit = "4";
            methodSubmit = "encounters";
            break;
        case "4de":
            genSubmit = "4";
            methodSubmit = "double encounters";
            break;
        case "4mm":
            genSubmit = "4";
            methodSubmit = "eggs";
            break;
        case "4pr":
            genSubmit = "4";
            methodSubmit = "radar encounters";
            break;
        case "5re":
            genSubmit = "5";
            methodSubmit = "encounters";
            break;
        case "5de":
            genSubmit = "5";
            methodSubmit = "double encounters";
            break;
        case "5mm":
            genSubmit = "5";
            methodSubmit = "eggs";
            break;
        case "6re":
            genSubmit = "6";
            methodSubmit = "encounters";
            break;
        case "6mm":
            genSubmit = "6";
            methodSubmit = "eggs";
            break;
        case "6he":
            genSubmit = "6";
            methodSubmit = "horde encounters";
            break;
        case "6fs":
            genSubmit = "6";
            methodSubmit = "friend safari encounters";
            break;
        case "6cf":
            genSubmit = "6";
            methodSubmit = "fishing encounters";
            break;
        case "6dn":
            genSubmit = "6";
            methodSubmit = "dexnav encounters";
            break;
        case "6pr":
            genSubmit = "6";
            methodSubmit = "radar encounters";
            break;
        case "7re":
            genSubmit = "7";
            methodSubmit = "encounters";
            break;
        case "7mm":
            genSubmit = "7";
            methodSubmit = "eggs";
            break;
        case "7sos":
            genSubmit = "7";
            methodSubmit = "calls";
            break;
        case "8re":
        case "8rebs":
            genSubmit = "8";
            methodSubmit = "encounters";
            break;
        case "8mm":
            genSubmit = "8";
            methodSubmit = "eggs";
            break;
        case "8ko":
            genSubmit = "8";
            methodSubmit = "KOs";
            break;
        case "8da":
            genSubmit = "8";
            methodSubmit = "dynamax adventures";
            break;
        case "8pr":
            genSubmit = "8";
            methodSubmit = "radar encounters";
            break;
        case "8de":
            genSubmit = "8";
            methodSubmit = "double encounters";
            break;
        case "cstm":
            genSubmit = "Gen %23";
            methodSubmit = "INSERTMETHOD";
            break;
        default:
            genSubmit = "ERROR";
            methodSubmit = "ERROR";
    }
    document.getElementById("reddit").href = "https://www.reddit.com/r/ShinyPokemon/submit?title=[" + genSubmit + "]%20Shiny%20" + pkmnCheck1 + "%20after%20" + count + "%20" + methodSubmit;
    return false;
}

// Extremely long function for dynamic odds

function complicatedOdds() {
    switch (method) {
        // Gen 4, Gen 6 Poke Radar
        case "4pr":
        case "6pr":
            chain = true;
            until50 = 175;
            until90 = 496;
            if (count >= 40) {
                odds = "1/200";
                complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2730/2731) * (2520/2521) * (2340/2341) * (2184/2185) * (1985/1986) * (1770/1771) * (1597/1598) * (1393/1394) * (1191/1192) * (992/993) * (798/799) * (595/596) * (399/400) * Math.pow(199/200, count-40))*100;
            } else {
                switch (count) {
                    case 0:
                        odds = "1/8192";
                        complicatedbd = 0;
                        break;
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        odds = "1/7282";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, count - 1))*100;
                        break;
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        odds = "1/6554";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, count - 5))*100;
                        break;
                    case 9:
                    case 10:
                    case 11:
                        odds = "1/5958";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, count - 9))*100;
                        break;
                    case 12:
                    case 13:
                        odds = "1/5461";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, count - 12))*100;
                        break;
                    case 14:
                    case 15:
                        odds = "1/5041";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, count - 14))*100;
                        break;
                    case 16:
                    case 17:
                        odds = "1/4681";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, count - 16))*100;
                        break;
                    case 18:
                    case 19:
                        odds = "1/4369";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, count - 18))*100;
                        break;
                    case 20:
                        odds = "1/4096";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096))*100;
                        break;
                    case 21:
                        odds = "1/3855";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855))*100;
                        break;
                    case 22:
                        odds = "1/3641";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641))*100;
                        break;
                    case 23:
                        odds = "1/3449";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641) * (3448/3449))*100;
                        break;
                    case 24:
                        odds = "1/3277";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641) * (3448/3449) * (3276/3277))*100;
                        break;
                    case 25:
                        odds = "1/3121";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641) * (3448/3449) * (3276/3277) * (3120/3121))*100;
                        break;
                    case 26:
                        odds = "1/2979";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979))*100;
                        break;
                    case 27:
                        odds = "1/2731";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2730/2731))*100;
                        break;
                    case 28:
                        odds = "1/2521";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2730/2731) * (2520/2521))*100;
                        break;
                    case 29:
                        odds = "1/2341";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2730/2731) * (2520/2521) * (2340/2341))*100;
                        break;
                    case 30:
                        odds = "1/2185";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2730/2731) * (2520/2521) * (2340/2341) * (2184/2185))*100;
                        break;
                    case 31:
                        odds = "1/1986";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2730/2731) * (2520/2521) * (2340/2341) * (2184/2185) * (1985/1986))*100;
                        break;
                    case 32:
                        odds = "1/1771";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2730/2731) * (2520/2521) * (2340/2341) * (2184/2185) * (1985/1986) * (1770/1771))*100;
                        break;
                    case 33:
                        odds = "1/1598";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2730/2731) * (2520/2521) * (2340/2341) * (2184/2185) * (1985/1986) * (1770/1771) * (1597/1598))*100;
                        break;
                    case 34:
                        odds = "1/1394";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2730/2731) * (2520/2521) * (2340/2341) * (2184/2185) * (1985/1986) * (1770/1771) * (1597/1598) * (1393/1394))*100;
                        break;
                    case 35:
                        odds = "1/1192";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2730/2731) * (2520/2521) * (2340/2341) * (2184/2185) * (1985/1986) * (1770/1771) * (1597/1598) * (1393/1394) * (1191/1192))*100;
                        break;
                    case 36:
                        odds = "1/993";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2730/2731) * (2520/2521) * (2340/2341) * (2184/2185) * (1985/1986) * (1770/1771) * (1597/1598) * (1393/1394) * (1191/1192) * (992/993))*100;
                        break;
                    case 37:
                        odds = "1/799";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2730/2731) * (2520/2521) * (2340/2341) * (2184/2185) * (1985/1986) * (1770/1771) * (1597/1598) * (1393/1394) * (1191/1192) * (992/993) * (798/799))*100;
                        break;
                    case 38:
                        odds = "1/596";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2730/2731) * (2520/2521) * (2340/2341) * (2184/2185) * (1985/1986) * (1770/1771) * (1597/1598) * (1393/1394) * (1191/1192) * (992/993) * (798/799) * (595/596))*100;
                        break;
                    case 39:
                        odds = "1/400";
                        complicatedbd = 100-((8191/8192) * Math.pow(7281/7282, 4) * Math.pow(6553/6554, 4) * Math.pow(5957/5958, 3) * Math.pow(5460/5461, 2) * Math.pow(5040/5041, 2) * Math.pow(4680/4681, 2) * Math.pow(4368/4369, 2) * (4095/4096) * (3854/3855) * (3640/3641) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2730/2731) * (2520/2521) * (2340/2341) * (2184/2185) * (1985/1986) * (1770/1771) * (1597/1598) * (1393/1394) * (1191/1192) * (992/993) * (798/799) * (595/596) * (399/400))*100;
                }
            }
            break;
        // Gen 6 Chain Fishing
        case "6cf":
            chain = true;
            if (sc) {
                until50 = 76;
                until90 = 230;
                if (count > 20) {
                    odds = "1/96";
                    complicatedbd = 100-((1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164) * (151/152) * (141/142) * (132/133) * (124/125) * (117/118) * (110/111) * (105/106) * (99/100) * Math.pow(95/96, count - 20))*100;
                } else {
                    switch (count) {
                        case 0:
                            odds = "1/1365";
                            complicatedbd = 0;
                            break;
                        case 1:
                            odds = "1/820";
                            complicatedbd = 100-((1364/1365))*100;
                            break;
                        case 2:
                            odds = "1/586";
                            complicatedbd = 100-((1364/1365) * (819/820))*100;
                            break;
                        case 3:
                            odds = "1/456";
                            complicatedbd = 100-((1364/1365) * (819/820) * (585/586))*100;
                            break;
                        case 4:
                            odds = "1/373";
                            complicatedbd = 100-((1364/1365) * (819/820) * (585/586) * (455/456))*100;
                            break;
                        case 5:
                            odds = "1/316";
                            complicatedbd = 100-((1364/1365) * (819/820) * (585/586) * (455/456) * (372/373))*100;
                            break;
                        case 6:
                            odds = "1/274";
                            complicatedbd = 100-((1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316))*100;
                            break;
                        case 7:
                            odds = "1/241";
                            complicatedbd = 100-((1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274))*100;
                            break;
                        case 8:
                            odds = "1/216";
                            complicatedbd = 100-((1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241))*100;
                            break;
                        case 9:
                            odds = "1/196";
                            complicatedbd = 100-((1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216))*100;
                            break;
                        case 10:
                            odds = "1/179";
                            complicatedbd = 100-((1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196))*100;
                            break;
                        case 11:
                            odds = "1/164";
                            complicatedbd = 100-((1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179))*100;
                            break;
                        case 12:
                            odds = "1/152";
                            complicatedbd = 100-((1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164))*100;
                            break;
                        case 13:
                            odds = "1/142";
                            complicatedbd = 100-((1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164) * (151/152))*100;
                            break;
                        case 14:
                            odds = "1/133";
                            complicatedbd = 100-((1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164) * (151/152) * (141/142))*100;
                            break;
                        case 15:
                            odds = "1/125";
                            complicatedbd = 100-((1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164) * (151/152) * (141/142) * (132/133))*100;
                            break;
                        case 16:
                            odds = "1/118";
                            complicatedbd = 100-((1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164) * (151/152) * (141/142) * (132/133) * (124/125))*100;
                            break;
                        case 17:
                            odds = "1/111";
                            complicatedbd = 100-((1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164) * (151/152) * (141/142) * (132/133) * (124/125) * (117/118))*100;
                            break;
                        case 18:
                            odds = "1/106";
                            complicatedbd = 100-((1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164) * (151/152) * (141/142) * (132/133) * (124/125) * (117/118) * (110/111))*100;
                            break;
                        case 19:
                            odds = "1/100";
                            complicatedbd = 100-((1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164) * (151/152) * (141/142) * (132/133) * (124/125) * (117/118) * (110/111) * (105/106))*100;
                            break;
                        case 20:
                            odds = "1/96";
                            complicatedbd = 100-((1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164) * (151/152) * (141/142) * (132/133) * (124/125) * (117/118) * (110/111) * (105/106) * (99/100))*100;
                    }
                }
            } else {
                until50 = 80;
                until90 = 240;
                if (count > 20) {
                    odds = "1/100";
                    complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164) * (151/152) * (141/142) * (132/133) * (124/125) * (117/118) * (110/111) * (105/106) * Math.pow(99/100, count - 20))*100;
                } else {
                    switch (count) {
                        case 0:
                            odds = "1/4096";
                            complicatedbd = 0;
                            break;
                        case 1:
                            odds = "1/1365";
                            complicatedbd = 100-(((4095/4096)))*100;
                            break;
                        case 2:
                            odds = "1/820";
                            complicatedbd = 100-((4095/4096) * (1364/1365))*100;
                            break;
                        case 3:
                            odds = "1/586";
                            complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820))*100;
                            break;
                        case 4:
                            odds = "1/456";
                            complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820) * (585/586))*100;
                            break;
                        case 5:
                            odds = "1/373";
                            complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820) * (585/586) * (455/456))*100;
                            break;
                        case 6:
                            odds = "1/316";
                            complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820) * (585/586) * (455/456) * (372/373))*100;
                            break;
                        case 7:
                            odds = "1/274";
                            complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316))*100;
                            break;
                        case 8:
                            odds = "1/241";
                            complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274))*100;
                            break;
                        case 9:
                            odds = "1/216";
                            complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241))*100;
                            break;
                        case 10:
                            odds = "1/196";
                            complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216))*100;
                            break;
                        case 11:
                            odds = "1/179";
                            complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196))*100;
                            break;
                        case 12:
                            odds = "1/164";
                            complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179))*100;
                            break;
                        case 13:
                            odds = "1/152";
                            complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164))*100;
                            break;
                        case 14:
                            odds = "1/142";
                            complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164) * (151/152))*100;
                            break;
                        case 15:
                            odds = "1/133";
                            complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164) * (151/152) * (141/142))*100;
                            break;
                        case 16:
                            odds = "1/125";
                            complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164) * (151/152) * (141/142) * (132/133))*100;
                            break;
                        case 17:
                            odds = "1/118";
                            complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164) * (151/152) * (141/142) * (132/133) * (124/125))*100;
                            break;
                        case 18:
                            odds = "1/111";
                            complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164) * (151/152) * (141/142) * (132/133) * (124/125) * (117/118))*100;
                            break;
                        case 19:
                            odds = "1/106";
                            complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164) * (151/152) * (141/142) * (132/133) * (124/125) * (117/118) * (110/111))*100;
                            break;
                        case 20:
                            odds = "1/100";
                            complicatedbd = 100-((4095/4096) * (1364/1365) * (819/820) * (585/586) * (455/456) * (372/373) * (315/316) * (273/274) * (240/241) * (215/216) * (195/196) * (178/179) * (163/164) * (151/152) * (141/142) * (132/133) * (124/125) * (117/118) * (110/111) * (105/106))*100;
                    }
                }
            }
            break;
        // Gen 6 Dex Nav
        case "6dn":
            if (sc) {
                until50 = 256;
                until90 = 639;
                if (count == 0) {
                    odds = "1/1365";
                    complicatedbd = 0;
                } else if (count < 17) {
                    odds = "1/954";
                    complicatedbd = 100-((1364/1365) * Math.pow(953/954, count))*100;
                } else if (count >= 17 && count < 34) {
                    odds = "1/733";
                    complicatedbd = 100-((1364/1365) * Math.pow(953/954, 17) * Math.pow(732/733, count - 17))*100;
                } else if (count >= 34 && count < 51) {
                    odds = "1/596";
                    complicatedbd = 100-((1364/1365) * Math.pow(953/954, 17) * Math.pow(732/733, 17) * Math.pow(595/596, count - 34))*100;
                } else if (count >= 51 && count < 67) {
                    odds = "1/501";
                    complicatedbd = 100-((1364/1365) * Math.pow(953/954, 17) * Math.pow(732/733, 17) * Math.pow(595/596, 17) * Math.pow(500/501, count - 51))*100;
                } else if (count >= 67 && count < 84) {
                    odds = "1/433";
                    complicatedbd = 100-((1364/1365) * Math.pow(953/954, 17) * Math.pow(732/733, 17) * Math.pow(595/596, 17) * Math.pow(500/501, 16) * Math.pow(432/433, count - 67))*100;
                } else if (count >= 84 && count < 101) {
                    odds = "1/381";
                    complicatedbd = 100-((1364/1365) * Math.pow(953/954, 17) * Math.pow(732/733, 17) * Math.pow(595/596, 17) * Math.pow(500/501, 16) * Math.pow(432/433, 17) * Math.pow(380/381, count - 84))*100;
                } else if (count >= 101 && count < 151) {
                    odds = "1/340";
                    complicatedbd = 100-((1364/1365) * Math.pow(953/954, 17) * Math.pow(732/733, 17) * Math.pow(595/596, 17) * Math.pow(500/501, 16) * Math.pow(432/433, 17) * Math.pow(380/381, 17) * Math.pow(339/340, count - 101))*100;
                } else if (count >= 151 && count < 201) {
                    odds = "1/307";
                    complicatedbd = 100-((1364/1365) * Math.pow(953/954, 17) * Math.pow(732/733, 17) * Math.pow(595/596, 17) * Math.pow(500/501, 16) * Math.pow(432/433, 17) * Math.pow(380/381, 17) * Math.pow(339/340, 50) * Math.pow(306/307, count - 151))*100;
                } else if (count >= 201 && count < 301) {
                    odds = "1/280";
                    complicatedbd = 100-((1364/1365) * Math.pow(953/954, 17) * Math.pow(732/733, 17) * Math.pow(595/596, 17) * Math.pow(500/501, 16) * Math.pow(432/433, 17) * Math.pow(380/381, 17) * Math.pow(339/340, 50) * Math.pow(306/307, 50) * Math.pow(279/280, count - 201))*100;
                } else if (count >= 301 && count < 401) {
                    odds = "1/257";
                    complicatedbd = 100-((1364/1365) * Math.pow(953/954, 17) * Math.pow(732/733, 17) * Math.pow(595/596, 17) * Math.pow(500/501, 16) * Math.pow(432/433, 17) * Math.pow(380/381, 17) * Math.pow(339/340, 50) * Math.pow(306/307, 50) * Math.pow(279/280, 100) * Math.pow(256/257, count - 301))*100;
                } else if (count >= 401 && count < 501) {
                    odds = "1/238";
                    complicatedbd = 100-((1364/1365) * Math.pow(953/954, 17) * Math.pow(732/733, 17) * Math.pow(595/596, 17) * Math.pow(500/501, 16) * Math.pow(432/433, 17) * Math.pow(380/381, 17) * Math.pow(339/340, 50) * Math.pow(306/307, 50) * Math.pow(279/280, 100) * Math.pow(256/257, 100) * Math.pow(237/238, count - 401))*100;
                } else if (count >= 501 && count < 601) {
                    odds = "1/221";
                    complicatedbd = 100-((1364/1365) * Math.pow(953/954, 17) * Math.pow(732/733, 17) * Math.pow(595/596, 17) * Math.pow(500/501, 16) * Math.pow(432/433, 17) * Math.pow(380/381, 17) * Math.pow(339/340, 50) * Math.pow(306/307, 50) * Math.pow(279/280, 100) * Math.pow(256/257, 100) * Math.pow(237/238, 100) * Math.pow(220/221, count - 501))*100;
                } else if (count >= 601 && count < 701) {
                    odds = "1/207";
                    complicatedbd = 100-((1364/1365) * Math.pow(953/954, 17) * Math.pow(732/733, 17) * Math.pow(595/596, 17) * Math.pow(500/501, 16) * Math.pow(432/433, 17) * Math.pow(380/381, 17) * Math.pow(339/340, 50) * Math.pow(306/307, 50) * Math.pow(279/280, 100) * Math.pow(256/257, 100) * Math.pow(237/238, 100) * Math.pow(220/221, 100) * Math.pow(206/207, count - 601))*100;
                } else if (count >= 701 && count < 801) {
                    odds = "1/194";
                    complicatedbd = 100-((1364/1365) * Math.pow(953/954, 17) * Math.pow(732/733, 17) * Math.pow(595/596, 17) * Math.pow(500/501, 16) * Math.pow(432/433, 17) * Math.pow(380/381, 17) * Math.pow(339/340, 50) * Math.pow(306/307, 50) * Math.pow(279/280, 100) * Math.pow(256/257, 100) * Math.pow(237/238, 100) * Math.pow(220/221, 100) * Math.pow(206/207, 100) * Math.pow(193/194, count - 701))*100;
                } else if (count >= 801 && count < 901) {
                    odds = "1/183";
                    complicatedbd = 100-((1364/1365) * Math.pow(953/954, 17) * Math.pow(732/733, 17) * Math.pow(595/596, 17) * Math.pow(500/501, 16) * Math.pow(432/433, 17) * Math.pow(380/381, 17) * Math.pow(339/340, 50) * Math.pow(306/307, 50) * Math.pow(279/280, 100) * Math.pow(256/257, 100) * Math.pow(237/238, 100) * Math.pow(220/221, 100) * Math.pow(206/207, 100) * Math.pow(193/194, 100) * Math.pow(182/183, count - 801))*100;
                } else {
                    odds = "1/173";
                    complicatedbd = 100-((1364/1365) * Math.pow(953/954, 17) * Math.pow(732/733, 17) * Math.pow(595/596, 17) * Math.pow(500/501, 16) * Math.pow(432/433, 17) * Math.pow(380/381, 17) * Math.pow(339/340, 50) * Math.pow(306/307, 50) * Math.pow(279/280, 100) * Math.pow(256/257, 100) * Math.pow(237/238, 100) * Math.pow(220/221, 100) * Math.pow(206/207, 100) * Math.pow(193/194, 100) * Math.pow(182/183, 100) * Math.pow(172/173, count - 801))*100;
                }
            } else {
                until50 = 559;
                until90 = 1255;
                if (count == 0) {
                    odds = "1/4096";
                    complicatedbd = 0;
                } else if (count < 17) {
                    odds = "1/2777";
                    complicatedbd = 100-((4095/4096) * Math.pow(2776/2777, count))*100;
                } else if (count >= 17 && count < 34) {
                    odds = "1/2101";
                    complicatedbd = 100-((4095/4096) * Math.pow(2776/2777, 17) * Math.pow(2100/2101, count - 17))*100;
                } else if (count >= 34 && count < 51) {
                    odds = "1/1689";
                    complicatedbd = 100-((4095/4096) * Math.pow(2776/2777, 17) * Math.pow(2100/2101, 17) * Math.pow(1688/1689, count - 34))*100;
                } else if (count >= 51 && count < 67) {
                    odds = "1/1413";
                    complicatedbd = 100-((4095/4096) * Math.pow(2776/2777, 17) * Math.pow(2100/2101, 17) * Math.pow(1688/1689, 17) * Math.pow(1412/1413, count - 51))*100;
                } else if (count >= 67 && count < 84) {
                    odds = "1/1214";
                    complicatedbd = 100-((4095/4096) * Math.pow(2776/2777, 17) * Math.pow(2100/2101, 17) * Math.pow(1688/1689, 17) * Math.pow(1412/1413, 16) * Math.pow(1213/1214, count - 67))*100;
                } else if (count >= 84 && count < 101) {
                    odds = "1/1064";
                    complicatedbd = 100-((4095/4096) * Math.pow(2776/2777, 17) * Math.pow(2100/2101, 17) * Math.pow(1688/1689, 17) * Math.pow(1412/1413, 16) * Math.pow(1213/1214, 17) * Math.pow(1063/1064, count - 84))*100;
                } else if (count >= 101 && count < 151) {
                    odds = "1/947";
                    complicatedbd = 100-((4095/4096) * Math.pow(2776/2777, 17) * Math.pow(2100/2101, 17) * Math.pow(1688/1689, 17) * Math.pow(1412/1413, 16) * Math.pow(1213/1214, 17) * Math.pow(1063/1064, 17) * Math.pow(946/947, count - 101))*100;
                } else if (count >= 151 && count < 201) {
                    odds = "1/853";
                    complicatedbd = 100-((4095/4096) * Math.pow(2776/2777, 17) * Math.pow(2100/2101, 17) * Math.pow(1688/1689, 17) * Math.pow(1412/1413, 16) * Math.pow(1213/1214, 17) * Math.pow(1063/1064, 17) * Math.pow(946/947, 50) * Math.pow(852/853, count - 151))*100;
                } else if (count >= 201 && count < 301) {
                    odds = "1/777";
                    complicatedbd = 100-((4095/4096) * Math.pow(2776/2777, 17) * Math.pow(2100/2101, 17) * Math.pow(1688/1689, 17) * Math.pow(1412/1413, 16) * Math.pow(1213/1214, 17) * Math.pow(1063/1064, 17) * Math.pow(946/947, 50) * Math.pow(852/853, 50) * Math.pow(776/777, count - 201))*100;
                } else if (count >= 301 && count < 401) {
                    odds = "1/713";
                    complicatedbd = 100-((4095/4096) * Math.pow(2776/2777, 17) * Math.pow(2100/2101, 17) * Math.pow(1688/1689, 17) * Math.pow(1412/1413, 16) * Math.pow(1213/1214, 17) * Math.pow(1063/1064, 17) * Math.pow(946/947, 50) * Math.pow(852/853, 50) * Math.pow(776/777, 100) * Math.pow(712/713, count - 301))*100;
                } else if (count >= 401 && count < 501) {
                    odds = "1/658";
                    complicatedbd = 100-((4095/4096) * Math.pow(2776/2777, 17) * Math.pow(2100/2101, 17) * Math.pow(1688/1689, 17) * Math.pow(1412/1413, 16) * Math.pow(1213/1214, 17) * Math.pow(1063/1064, 17) * Math.pow(946/947, 50) * Math.pow(852/853, 50) * Math.pow(776/777, 100) * Math.pow(712/713, 100) * Math.pow(657/658, count - 401))*100;
                } else if (count >= 501 && count < 601) {
                    odds = "1/612";
                    complicatedbd = 100-((4095/4096) * Math.pow(2776/2777, 17) * Math.pow(2100/2101, 17) * Math.pow(1688/1689, 17) * Math.pow(1412/1413, 16) * Math.pow(1213/1214, 17) * Math.pow(1063/1064, 17) * Math.pow(946/947, 50) * Math.pow(852/853, 50) * Math.pow(776/777, 100) * Math.pow(712/713, 100) * Math.pow(657/658, 100) * Math.pow(611/612, count - 501))*100;
                } else if (count >= 601 && count < 701) {
                    odds = "1/571";
                    complicatedbd = 100-((4095/4096) * Math.pow(2776/2777, 17) * Math.pow(2100/2101, 17) * Math.pow(1688/1689, 17) * Math.pow(1412/1413, 16) * Math.pow(1213/1214, 17) * Math.pow(1063/1064, 17) * Math.pow(946/947, 50) * Math.pow(852/853, 50) * Math.pow(776/777, 100) * Math.pow(712/713, 100) * Math.pow(657/658, 100) * Math.pow(611/612, 100) * Math.pow(570/571, count - 601))*100;
                } else if (count >= 701 && count < 801) {
                    odds = "1/536";
                    complicatedbd = 100-((4095/4096) * Math.pow(2776/2777, 17) * Math.pow(2100/2101, 17) * Math.pow(1688/1689, 17) * Math.pow(1412/1413, 16) * Math.pow(1213/1214, 17) * Math.pow(1063/1064, 17) * Math.pow(946/947, 50) * Math.pow(852/853, 50) * Math.pow(776/777, 100) * Math.pow(712/713, 100) * Math.pow(657/658, 100) * Math.pow(611/612, 100) * Math.pow(570/571, 100) * Math.pow(535/536, count - 701))*100;
                } else if (count >= 801 && count < 901) {
                    odds = "1/504";
                    complicatedbd = 100-((4095/4096) * Math.pow(2776/2777, 17) * Math.pow(2100/2101, 17) * Math.pow(1688/1689, 17) * Math.pow(1412/1413, 16) * Math.pow(1213/1214, 17) * Math.pow(1063/1064, 17) * Math.pow(946/947, 50) * Math.pow(852/853, 50) * Math.pow(776/777, 100) * Math.pow(712/713, 100) * Math.pow(657/658, 100) * Math.pow(611/612, 100) * Math.pow(570/571, 100) * Math.pow(535/536, 100) * Math.pow(503/504, count - 801))*100;
                } else {
                    odds = "1/476";
                    complicatedbd = 100-((4095/4096) * Math.pow(2776/2777, 17) * Math.pow(2100/2101, 17) * Math.pow(1688/1689, 17) * Math.pow(1412/1413, 16) * Math.pow(432/433, 17) * Math.pow(1063/1064, 17) * Math.pow(946/947, 50) * Math.pow(852/853, 50) * Math.pow(776/777, 100) * Math.pow(712/713, 100) * Math.pow(657/658, 100) * Math.pow(611/612, 100) * Math.pow(570/571, 100) * Math.pow(535/536, 100) * Math.pow(503/504, 100) * Math.pow(475/476, count - 801))*100;
                }
            }
            break;
        // Gen 7 SOS
        case "7sos":
            chain = true;
            if (sc) {
                until50 = 205;
                until90 = 644;
                if (count == 0) {
                    odds = "1/1365";
                    complicatedbd = 0;
                } else if (count < 10) {
                    odds = "1/1365";
                    complicatedbd = 100-(Math.pow(1364/1365, count))*100;
                } else if (count >= 10 && count < 20) {
                    odds = "1/585";
                    complicatedbd = 100-(Math.pow(1364/1365, 10) * Math.pow(584/585, count - 10))*100;
                } else if (count >= 20 && count < 30) {
                    odds = "1/373";
                    complicatedbd = 100-(Math.pow(1364/1365, 10) * Math.pow(584/585, 10) * Math.pow(372/373, count - 20))*100;
                } else {
                    odds = "1/273";
                    complicatedbd = 100-(Math.pow(1364/1365, 10) * Math.pow(584/585, 10) * Math.pow(372/373, 10) * Math.pow(272/273, count - 30))*100;
                }
            } else {
                until50 = 237;
                until90 = 743;
                if (count == 0) {
                    odds = "1/1365";
                    complicatedbd = 0;
                } else if (count < 10) {
                    odds = "1/4096";
                    complicatedbd = 100-(Math.pow(4095/4096, count))*100;
                } else if (count >= 10 && count < 20) {
                    odds = "1/820";
                    complicatedbd = 100-(Math.pow(4095/4096, 10) * Math.pow(819/820, count - 10))*100;
                } else if (count >= 20 && count < 30) {
                    odds = "1/455";
                    complicatedbd = 100-(Math.pow(4095/4096, 10) * Math.pow(819/820, 10) * Math.pow(454/455, count - 20))*100;
                } else {
                    odds = "1/315";
                    complicatedbd = 100-(Math.pow(4095/4096, 10) * Math.pow(819/820, 10) * Math.pow(454/455, 10) * Math.pow(314/315, count - 30))*100;
                }
            }
            break;
        // Gen 8 KO combo
        case "8ko":
            chain = true;
            if (sc) {
                until50 = 499;
                until90 = 1322;
                if (count >= 500) {
                    odds = "1/512";
                    complicatedbd = 100-(Math.pow(1364/1365, 50) * Math.pow(1023/1024, 50) * Math.pow(818/819, 100) * Math.pow(682/683, 100) * Math.pow(584/585, 200) * Math.pow(511/512, count - 500))*100;
                } else if (count >= 300) {
                    odds = "1/585";
                    complicatedbd = 100-(Math.pow(1364/1365, 50) * Math.pow(1023/1024, 50) * Math.pow(818/819, 100) * Math.pow(682/683, 100) * Math.pow(584/585, count - 300))*100;
                } else if (count >= 200) {
                    odds = "1/683";
                    complicatedbd = 100-(Math.pow(1364/1365, 50) * Math.pow(1023/1024, 50) * Math.pow(818/819, 100) * Math.pow(682/683, count - 200))*100;
                } else if (count >= 100) {
                    odds = "1/819";
                    complicatedbd = 100-(Math.pow(1364/1365, 50) * Math.pow(1023/1024, 50) * Math.pow(818/819, count - 100))*100;
                } else if (count >= 50) {
                    odds = "1/1024";
                    complicatedbd = 100-(Math.pow(1364/1365, 50) * Math.pow(1023/1024, count - 50))*100;
                } else {
                    odds = "1/1365";
                    complicatedbd = 100-(Math.pow(1364/1365, count))*100;
                }
            } else {
                until50 = 665;
                until90 = 1764;
                if (count >= 500) {
                    odds = "1/683";
                    complicatedbd = 100-(Math.pow(4095/4096, 50) * Math.pow(2047/2048, 50) * Math.pow(1364/1365, 100) * Math.pow(1023/1024, 100) * Math.pow(818/819, 200) * Math.pow(682/683, count - 500))*100;
                } else if (count >= 300) {
                    odds = "1/819";
                    complicatedbd = 100-(Math.pow(4095/4096, 50) * Math.pow(2047/2048, 50) * Math.pow(1364/1365, 100) * Math.pow(1023/1024, 100) * Math.pow(818/819, count - 300))*100;
                } else if (count >= 200) {
                    odds = "1/1024";
                    complicatedbd = 100-(Math.pow(4095/4096, 50) * Math.pow(2047/2048, 50) * Math.pow(1364/1365, 100) * Math.pow(1023/1024, count - 200))*100;
                } else if (count >= 100) {
                    odds = "1/1365";
                    complicatedbd = 100-(Math.pow(4095/4096, 50) * Math.pow(2047/2048, 50) * Math.pow(1364/1365, count - 100))*100;
                } else if (count >= 50) {
                    odds = "1/2048";
                    complicatedbd = 100-(Math.pow(4095/4096, 50) * Math.pow(2047/2048, count - 50))*100;
                } else {
                    odds = "1/4096";
                    complicatedbd = 100-(Math.pow(4095/4096, count))*100;
                }
            }
            break;
        // Gen 8 Poke Radar
        case "8pr":
            chain = true;
            until50 = 106;
            until90 = 264;
            if (count >= 40) {
                odds = "1/99";
                complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771) * (1723/1724) * (1679/1680) * (1637/1638) * (1597/1598) * (1559/1560) * (1523/1524) * (1488/1489) * (1455/1456) * (1309/1310) * (1284/1285) * (1259/1260) * (1235/1236) * (1212/1213) * (1191/1192) * (992/993) * (798/799) * (399/400) * (199/200) * Math.pow(98/99, count - 40))*100;
            } else {
                switch (count) {
                    case 0:
                        odds = "1/4096";
                        complicatedbd = 0;
                        break;
                    case 1:
                        odds = "1/3855";
                        complicatedbd = 100-((4095/4096))*100;
                        break;
                    case 2:
                        odds = "1/3640";
                        complicatedbd = 100-((4095/4096) * (3854/3855))*100;
                        break;
                    case 3:
                        odds = "1/3449";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640))*100;
                        break;
                    case 4:
                        odds = "1/3277";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449))*100;
                        break;
                    case 5:
                        odds = "1/3121";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277))*100;
                        break;
                    case 6:
                        odds = "1/2979";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121))*100;
                        break;
                    case 7:
                        odds = "1/2849";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979))*100;
                        break;
                    case 8:
                        odds = "1/2731";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849))*100;
                        break;
                    case 9:
                        odds = "1/2621";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731))*100;
                        break;
                    case 10:
                        odds = "1/2521";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621))*100;
                        break;
                    case 11:
                        odds = "1/2427";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521))*100;
                        break;
                    case 12:
                        odds = "1/2341";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427))*100;
                        break;
                    case 13:
                        odds = "1/2259";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341))*100;
                        break;
                    case 14:
                        odds = "1/2185";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259))*100;
                        break;
                    case 15:
                        odds = "1/2114";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185))*100;
                        break;
                    case 16:
                        odds = "1/2048";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114))*100;
                        break;
                    case 17:
                        odds = "1/1986";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048))*100;
                        break;
                    case 18:
                        odds = "1/1927";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986))*100;
                        break;
                    case 19:
                        odds = "1/1872";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927))*100;
                        break;
                    case 20:
                        odds = "1/1820";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872))*100;
                        break;
                    case 21:
                        odds = "1/1771";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820))*100;
                        break;
                    case 22:
                        odds = "1/1724";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771))*100;
                        break;
                    case 23:
                        odds = "1/1680";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771) * (1723/1724))*100;
                        break;
                    case 24:
                        odds = "1/1638";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771) * (1723/1724) * (1679/1680))*100;
                        break;
                    case 25:
                        odds = "1/1598";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771) * (1723/1724) * (1679/1680) * (1637/1638))*100;
                        break;
                    case 26:
                        odds = "1/1560";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771) * (1723/1724) * (1679/1680) * (1637/1638) * (1597/1598))*100;
                        break;
                    case 27:
                        odds = "1/1524";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771) * (1723/1724) * (1679/1680) * (1637/1638) * (1597/1598) * (1559/1560))*100;
                        break;
                    case 28:
                        odds = "1/1489";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771) * (1723/1724) * (1679/1680) * (1637/1638) * (1597/1598) * (1559/1560) * (1523/1524))*100;
                        break;
                    case 29:
                        odds = "1/1456";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771) * (1723/1724) * (1679/1680) * (1637/1638) * (1597/1598) * (1559/1560) * (1523/1524) * (1488/1489))*100;
                        break;
                    case 30:
                        odds = "1/1310";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771) * (1723/1724) * (1679/1680) * (1637/1638) * (1597/1598) * (1559/1560) * (1523/1524) * (1488/1489) * (1455/1456))*100;
                        break;
                    case 31:
                        odds = "1/1285";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771) * (1723/1724) * (1679/1680) * (1637/1638) * (1597/1598) * (1559/1560) * (1523/1524) * (1488/1489) * (1455/1456) * (1309/1310))*100;
                        break;
                    case 32:
                        odds = "1/1260";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771) * (1723/1724) * (1679/1680) * (1637/1638) * (1597/1598) * (1559/1560) * (1523/1524) * (1488/1489) * (1455/1456) * (1309/1310) * (1284/1285))*100;
                        break;
                    case 33:
                        odds = "1/1236";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771) * (1723/1724) * (1679/1680) * (1637/1638) * (1597/1598) * (1559/1560) * (1523/1524) * (1488/1489) * (1455/1456) * (1309/1310) * (1284/1285) * (1259/1260))*100;
                        break;
                    case 34:
                        odds = "1/1213";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771) * (1723/1724) * (1679/1680) * (1637/1638) * (1597/1598) * (1559/1560) * (1523/1524) * (1488/1489) * (1455/1456) * (1309/1310) * (1284/1285) * (1259/1260) * (1235/1236))*100;
                        break;
                    case 35:
                        odds = "1/1192";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771) * (1723/1724) * (1679/1680) * (1637/1638) * (1597/1598) * (1559/1560) * (1523/1524) * (1488/1489) * (1455/1456) * (1309/1310) * (1284/1285) * (1259/1260) * (1235/1236) * (1212/1213))*100;
                        break;
                    case 36:
                        odds = "1/993";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771) * (1723/1724) * (1679/1680) * (1637/1638) * (1597/1598) * (1559/1560) * (1523/1524) * (1488/1489) * (1455/1456) * (1309/1310) * (1284/1285) * (1259/1260) * (1235/1236) * (1212/1213) * (1191/1192))*100;
                        break;
                    case 37:
                        odds = "1/799";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771) * (1723/1724) * (1679/1680) * (1637/1638) * (1597/1598) * (1559/1560) * (1523/1524) * (1488/1489) * (1455/1456) * (1309/1310) * (1284/1285) * (1259/1260) * (1235/1236) * (1212/1213) * (1191/1192) * (992/993))*100;
                        break;
                    case 38:
                        odds = "1/400";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771) * (1723/1724) * (1679/1680) * (1637/1638) * (1597/1598) * (1559/1560) * (1523/1524) * (1488/1489) * (1455/1456) * (1309/1310) * (1284/1285) * (1259/1260) * (1235/1236) * (1212/1213) * (1191/1192) * (992/993) * (798/799))*100;
                        break;
                    case 39:
                        odds = "1/200";
                        complicatedbd = 100-((4095/4096) * (3854/3855) * (3639 / 3640) * (3448/3449) * (3276/3277) * (3120/3121) * (2978/2979) * (2848/2849) * (2730/2731) * (2620/2621) * (2520/2521) * (2426/2427) * (2340/2341) * (2258/2259) * (2184/2185) * (2113/2114) * (2047/2048) * (1985/1986) * (1926/1927) * (1871/1872) * (1819/1820) * (1770/1771) * (1723/1724) * (1679/1680) * (1637/1638) * (1597/1598) * (1559/1560) * (1523/1524) * (1488/1489) * (1455/1456) * (1309/1310) * (1284/1285) * (1259/1260) * (1235/1236) * (1212/1213) * (1191/1192) * (992/993) * (798/799) * (399/400))*100;
                        break;
                }
            }
            break;
        default:
            odds = "ERROR";
            bdodds = 0;
            until50 = 0;
            until90 = 0;
    }
}

// Update cookies, variables and text
function update() {
    document.cookie = "countsave="+count+"; expires=Sat, 20 Apr 2069 12:00:00 GMT;path=/";
    document.cookie = "amountsave="+amount+"; expires=Sat, 20 Apr 2069 12:00:00 GMT;path=/";
    document.cookie = "methodsave="+document.getElementById("method").value+"; expires=Sat, 20 Apr 2069 12:00:00 GMT;path=/";
    document.cookie = "shinycharmsave="+document.getElementById("shinycharm").value+"; expires=Sat, 20 Apr 2069 12:00:00 GMT;path=/";
    document.getElementById("count").textContent = count;
    method = document.getElementById("method").value;
    sc = document.getElementById("shinycharm").checked;
    customValue = parseInt(document.getElementById("custom").value);
    document.cookie = "customsave="+customValue+"; expires=Sat, 20 Apr 2069 12:00:00 GMT;path=/";
    complicated = false;
    chain = false;
    document.getElementById("customtext").style.visibility = "hidden";
    document.getElementById("custom").style.visibility = "hidden";
    updateLinks();

    switch (method) {
        // Gen 2, Gen 3, Gen 4 Random Encounter
        case "2re":
        case "3re":
        case "4re":
            odds = "1/8192";
            bdodds = 8191/8192;
            until50 = 5678;
            until90 = 18862;
            break;
        // Gen 2 Breeding from Shiny Parent
        case "2sp":
            odds = "1/64";
            bdodds = 63/64;
            until50 = 45;
            until90 = 147;
            break;
        // Gen 2 JPN Odd Egg
        case "2oej":
            odds = "1/2";
            bdodds = 1/2;
            until50 = 1;
            until90 = 4;
            break;
        // Gen 2 INT Odd Egg
        case "2oei":
            odds = "7/50";
            bdodds = 43/50;
            until50 = 5;
            until90 = 16;
            break;
        // Gen 4 Double Encounter
        case "4de":
            odds = "1/4096";
            bdodds = 4095/4096;
            until50 = 2839;
            until90 = 9431;
            break;
        // Gen 4 Masuda Method
        case "4mm":
            odds = "1/1638";
            bdodds = 1637/1638;
            until50 = 1136;
            until90 = 3771;
            break;
        // Gen 5 Random Encounter
        case "5re":
            if (sc) {
                odds = "1/2731";
                bdodds = 2730/2731;
                until50 = 1893;
                until90 = 6188;
            } else {
                odds = "1/8192";
                bdodds = 8191/8192;
                until50 = 5678;
                until90 = 18862;
            }
            break;
        // Gen 5 Double Encounter : Gen 6, Gen 7, Gen 8 Random Encounter
        case "5de":
        case "6re":
        case "7re":
        case "8re":
            if (sc) {
                odds = "1/1365";
                bdodds = 1364/1365;
                until50 = 946;
                until90 = 3142;
            } else {
                odds = "1/4096";
                bdodds = 4095/4096;
                until50 = 2839;
                until90 = 9431;
            }
            break;
        // Gen 5 Masuda Method
        case "5mm":
            if (sc) {
                odds = "1/1024";
                bdodds = 1023/1024;
                until50 = 710;
                until90 = 2357;
            } else {
                odds = "1/1365";
                bdodds = 1364/1365;
                until50 = 946;
                until90 = 3142;
            }
            break;
        // Gen 6, Gen 7, Gen 8 Masuda Method
        case "6mm":
        case "7mm":
        case "8mm":
            if (sc) {
                odds = "1/512";
                bdodds = 511/512;
                until50 = 355;
                until90 = 1178;
            } else {
                odds = "1/683";
                bdodds = 682/683;
                until50 = 474;
                until90 = 1572;
            }
            break;
        // Gen 6 Horde Encounter
        case "6he":
            if (sc) {
                odds = "1/273";
                bdodds = 272/273;
                until50 = 189;
                until90 = 628;
            } else {
                odds = "1/819";
                bdodds = 818/819;
                until50 = 568;
                until90 = 1885;
            }
            break;
        // Gen 6 Friend Safari
        case "6fs":
            if (sc) {
                odds = "1/585";
                bdodds = 584/585;
                until50 = 406;
                until90 = 1346;
            } else {
                odds = "1/819";
                bdodds = 818/819;
                until50 = 568;
                until90 = 1885;
            }
            break;
        // Gen 8 Dynamax Adventure
        case "8da":
            if (sc) {
                odds = "1/100";
                bdodds = 99/100;
                until50 = 69;
                until90 = 230;
            } else {
                odds = "1/300";
                bdodds = 299/300;
                until50 = 208;
                until90 = 690;
            }
            break;
        // Gen 8 BDSP Random Encounter
        case "8rebs":
            odds = "1/4096";
            bdodds = 4095/4096;
            until50 = 2839;
            until90 = 9431;
            break;
        case "8de":
            odds = "1/2048";
            bdodds = 2047/2048;
            until50 = 1420;
            until90 = 4715;
            break;
        // Complicated Odds
        case "4pr":
        case "6cf":
        case "6dn":
        case "6pr":
        case "7sos":
        case "8ko":
        case "8pr":
            complicated = true;
            break;
        case "cstm":
                document.getElementById("customtext").style.visibility = "visible";
                document.getElementById("custom").style.visibility = "visible";
                odds = '1/' + customValue;
                bdodds = (customValue - 1) / customValue;
                until50 = Math.ceil(Math.log(2) / Math.log(customValue / (customValue - 1)));
                until90 = Math.ceil(Math.log(10) / Math.log(customValue / (customValue - 1)));
                break;
        default:
            odds = "ERROR";
            bdodds = 0;
            until50 = 0;
            until90 = 0;
    }
    if (complicated) {
        complicatedOdds();
        document.getElementById("bd").textContent = complicatedbd.toFixed(2);
    } else {
        document.getElementById("bd").textContent = (100-(Math.pow(bdodds, count))*100).toFixed(2);
    }
    if (chain) {
        document.getElementById("chaininfo").textContent = "The statistics assume you have not broken a chain.";
    } else {
        document.getElementById("chaininfo").textContent = "";
    }
    document.getElementById("probability").textContent = odds;
    document.getElementById("50").textContent = until50 - count;
    document.getElementById("90").textContent = until90 - count;
}

// + Button
function incCount() {
    if (isNaN(parseInt(document.getElementById("multi").value))) {
        amount = 1;
    } else {
        amount = parseInt(document.getElementById("multi").value);
    }
    if (amount < 0) {
        document.getElementById("multi").value = 0;
        amount = 0;
    }
    count += amount;
    if (count > 2147483637) count = 2147483637;
    update();
}

// - Button
function decCount() {
    if (isNaN(parseInt(document.getElementById("multi").value))) {
        amount = 1;
    } else {
        amount = parseInt(document.getElementById("multi").value);
    }
    if (amount < 0) {
        document.getElementById("multi").value = 0;
        amount = 0;
    }
    count -= amount;
    if (count < 0) count = 0;
    update();
}

// Clicking on number
function customCount() {
    countSafe = parseInt(prompt("Enter the count to set."));
    if (isNaN(countSafe)) return;
    if (countSafe < 0) countSafe = 0;
    if (countSafe > 2147483637) countSafe = 2147483637;
    count = countSafe;
    document.getElementById("count").textContent = count;
    update();
}

document.addEventListener("keyup", function(event) {
    if (event.key == "=") {
        incCount();
    } else if (event.key == "-") {
        decCount();
    }
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classname += " active";
}

// Create new cookies, load cookies
window.onload = function() {
    document.getElementById("defaultOpen").click();
    method = document.getElementById("method").value;
    sc = document.getElementById("shinycharm").checked;
    if (getCookie("countsave") == "" || getCookie("countsave") == "NaN") {
        document.cookie = "countsave=0; expires=Sat, 20 Apr 2069 12:00:00 GMT;path=/";
    }
    if (getCookie("amountsave") == "" || getCookie("amountsave") == "NaN") {
        document.cookie = "amountsave=1; expires=Sat, 20 Apr 2069 12:00:00 GMT;path=/";
    }
    if (getCookie("methodsave") == "") {
        document.cookie = "methodsave=2re; expires=Sat, 20 Apr 2069 12:00:00 GMT;path=/";
    }
    if (getCookie("shinycharmsave") == "") {
        document.cookie = "shinycharmsave=false; expires=Sat, 20 Apr 2069 12:00:00 GMT;path=/";
    }
    if (getCookie("customsave") == "" || getCookie("customsave") == "NaN") {
        document.cookie = "customsave=1365; expires=Sat, 20 Apr 2069 12:00:00 GMT;path=/";
    }
    count = parseInt(getCookie("countsave"));
    amount = parseInt(getCookie("amountsave"));
    document.getElementById("count").textContent = parseInt(getCookie("countsave"));
    document.getElementById("multi").value = parseInt(getCookie("amountsave"));
    document.getElementById("method").value = getCookie("methodsave");
    if (getCookie("shinycharmsave") == "on") document.getElementById("shinycharm").checked = true;
    document.getElementById("custom").value = parseInt(getCookie("customsave"));
    document.getElementById("pokemon1").value = getCookie("pkmn1save");
    document.getElementById("pokemon2").value = getCookie("pkmn2save");
    document.getElementById("pokemon3").value = getCookie("pkmn3save");
    update();
    updateSprites();
    updateLinks();
};
