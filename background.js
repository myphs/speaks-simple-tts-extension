const synth = window.speechSynthesis;

var dicts = {
	// https://www.gut1.de/grundwortschatz/grundwortschatz-500/
	"de": [
		"ab", "abend", "aber", "acht", "affe", "alle", "allein", "alleine", "als", "also", "alt", "am",
		"an", "andere", "anfangen", "angst", "antworten", "apfel", "arbeit", "arbeiten", "arzt",
		"auch", "auf", "auge", "augen", "aus", "auto", "baden", "bald", "ball", "bauen", "bauer",
		"baum", "beantworten", "bei", "beide", "beim", "bein", "beispiel", "beißen", "bekommen",
		"berg", "besser", "bett", "bild", "bin", "bis", "blau", "bleiben", "blume", "boden",
		"brauchen", "braun", "brief", "bringen", "brot", "bruder", "buch", "böse", "da", "dabei",
		"dafür", "damit", "danach", "dann", "daran", "darauf", "darin", "das", "dauern", "davon",
		"dazu", "dein", "dem", "den", "denken", "denn", "der", "deshalb", "dich", "dick", "die", "ding",
		"dir", "doch", "dorf", "dort", "draußen", "drehen", "drei", "dumm", "dunkel", "durch",
		"dürfen", "eigentlich", "ein", "eine", "einer", "einfach", "einige", "einigen", "einmal",
		"eis", "eltern", "ende", "endlich", "er", "erde", "erklären", "erschrecken", "erst",
		"erzählen", "es", "essen", "etwas", "fahren", "fahrrad", "fallen", "familie", "fangen",
		"fast", "fehlen", "fenster", "ferien", "fertig", "fest", "feuer", "fiel", "finden",
		"finger", "fisch", "flasche", "fliegen", "frage", "fragen", "frau", "frei", "fressen",
		"freude", "freuen", "freund", "fröhlich", "früh", "früher", "fuß", "fußball", "fährt",
		"führen", "fünf", "für", "gab", "ganz", "gar", "garten", "geben", "geburtstag",
		"gefährlich", "gegen", "gehen", "gehören", "gelb", "geld", "genau", "gerade", "gern",
		"gerne", "geschenk", "geschichte", "gesicht", "gestern", "gesund", "gewinnen", "gibt",
		"ging", "glas", "glauben", "gleich", "glück", "glücklich", "gott", "groß", "große", "grün",
		"gut", "haar", "haare", "haben", "halb", "halbe", "halten", "hand", "hart", "hase", "hat",
		"hatte", "hatten", "haus", "heiß", "heißen", "heißt", "helfen", "her", "heraus", "herr",
		"herz", "heute", "hier", "hilfe", "himmel", "hin", "hinein", "hinter", "hoch", "holen",
		"hund", "hunger", "hängen", "hören", "ich", "ihm", "ihn", "ihr", "im", "immer", "in", "ins",
		"ist", "ja", "jahr", "jeder", "jetzt", "jung", "junge", "kalt", "kam", "kann", "katze",
		"kaufen", "kein", "kennen", "kind", "klasse", "klein", "klettern", "kochen", "kommen",
		"kopf", "krank", "kurz", "können", "küche", "lachen", "land", "lang", "lange", "langsam",
		"las", "lassen", "laufen", "laut", "leben", "legen", "lehrer", "lehrerin", "leicht",
		"leise", "lernen", "lesen", "letzte", "leute", "licht", "lieb", "liegen", "ließ", "ließen",
		"loch", "los", "luft", "lustig", "machen", "mal", "man", "mann", "maus", "meer", "mehr", "mein",
		"mensch", "merken", "mich", "milch", "minute", "minuten", "mir", "mit", "monat", "monate",
		"musik", "mutter", "mutti", "mädchen", "mögen", "möglich", "müde", "müssen", "nach",
		"nacht", "nah", "nahe", "name", "namen", "nase", "nass", "natürlich", "neben", "nehmen",
		"nein", "nennen", "neu", "neun", "nicht", "nichts", "nie", "nimmt", "noch", "nun", "nur",
		"nächste", "nämlich", "ob", "oben", "oder", "offen", "oft", "ohne", "oma", "omi", "onkel",
		"opa", "packen", "pferd", "platz", "plötzlich", "polizei", "rad", "rechnen", "reich",
		"reiten", "rennen", "richtig", "rot", "rufen", "ruhig", "rund", "sache", "sagen",
		"schaffen", "schauen", "scheinen", "schenken", "schicken", "schiff", "schlafen",
		"schlagen", "schlecht", "schlimm", "schluss", "schnee", "schnell", "schon", "schreiben",
		"schreien", "schuh", "schule", "schwarz", "schwer", "schwester", "schwimmen", "schön",
		"schüler", "sechs", "see", "sehen", "sehr", "sein", "seit", "seite", "selbst", "setzen",
		"sich", "sicher", "sie", "sieben", "sieht", "sind", "singen", "sitzen", "so", "sofort",
		"sohn", "sollen", "sommer", "sonne", "sonntag", "sonst", "spaß", "spiel", "spielen",
		"sprechen", "springen", "spät", "später", "stadt", "stark", "stehen", "steigen", "stein",
		"stelle", "stellen", "straße", "stunde", "stück", "suchen", "tag", "tante", "teller",
		"tief", "tier", "tisch", "tot", "tragen", "traurig", "treffen", "trinken", "tun", "turnen",
		"tür", "uhr", "um", "und", "uns", "unser", "unten", "unter", "vater", "vati", "vergessen",
		"verkaufen", "verlieren", "verstecken", "verstehen", "versuchen", "viel", "vielleicht",
		"vier", "vogel", "voll", "vom", "von", "vor", "vorbei", "wagen", "wahr", "wald", "war", "waren",
		"warm", "warten", "warum", "was", "waschen", "wasser", "weg", "weg", "weihnachten", "weil",
		"weinen", "weit", "weiter", "weiß", "welt", "wenig", "wenn", "wer", "werden", "werfen",
		"wetter", "wichtig", "wie", "wieder", "wiese", "will", "winter", "wir", "wird", "wirklich",
		"wissen", "wissen", "wo", "woche", "wohl", "wohnen", "wohnung", "wollen", "wort",
		"wünschen", "zahl", "zehn", "zeigen", "zeit", "zeitung", "ziehen", "zimmer", "zu", "zug",
		"zum", "zur", "zurück", "zusammen", "zwei", "zwischen", "öffnen", "über", "überall"
	],
	// https://world-english.org/english500.htm
	"en": [
		"name", "the", "a", "able", "about", "above", "act", "add", "after",
		"again", "against", "age", "ago", "air", "all", "also", "always", "am",
		"among", "an", "and", "animal", "answer", "any", "appear", "are",
		"area", "as", "ask", "at", "back", "base", "be", "beauty", "bed",
		"been", "before", "began", "begin", "behind", "best", "better",
		"between", "big", "bird", "black", "blue", "boat", "body", "book",
		"both", "box", "boy", "bring", "brought", "build", "busy", "but", "by",
		"call", "came", "can", "car", "care", "carry", "cause", "center",
		"certain", "change", "check", "children", "city", "class", "clear",
		"close", "cold", "color", "come", "common", "complete", "contain",
		"correct", "could", "country", "course", "cover", "cross", "cry", "cut",
		"dark", "day", "decide", "deep", "develop", "did", "differ", "direct",
		"do", "does", "dog", "don't", "done", "door", "down", "draw", "drive",
		"dry", "during", "each", "early", "earth", "ease", "east", "eat", "end",
		"enough", "even", "ever", "every", "example", "eye", "face", "fact",
		"fall", "family", "far", "farm", "fast", "father", "feel", "feet",
		"few", "field", "figure", "fill", "final", "find", "fine", "fire",
		"first", "fish", "five", "fly", "follow", "food", "foot", "for",
		"force", "form", "found", "four", "free", "friend", "from", "front",
		"full", "game", "gave", "get", "girl", "give", "go", "gold", "good",
		"got", "govern", "great", "green", "ground", "group", "grow", "had",
		"half", "hand", "happen", "hard", "has", "have", "he", "head", "hear",
		"heard", "heat", "help", "her", "here", "high", "him", "his", "hold",
		"home", "horse", "hot", "hot", "hour", "house", "how", "hundred", "i",
		"idea", "if", "in", "inch", "interest", "is", "island", "it", "just",
		"keep", "kind", "king", "knew", "know", "land", "language", "large",
		"last", "late", "laugh", "lay", "lead", "learn", "leave", "left",
		"less", "let", "letter", "life", "light", "like", "line", "list",
		"listen", "little", "live", "long", "look", "lot", "love", "low",
		"machine", "made", "main", "make", "man", "many", "map", "mark", "may",
		"me", "mean", "measure", "men", "might", "mile", "mind", "minute",
		"miss", "money", "moon", "more", "morning", "most", "mother",
		"mountain", "move", "much", "music", "must", "my", "near", "need",
		"never", "new", "next", "night", "no", "north", "note", "nothing",
		"notice", "noun", "now", "number", "numeral", "object", "of", "off",
		"often", "oh", "old", "on", "once", "one", "only", "open", "or",
		"order", "other", "our", "out", "over", "own", "page", "paper",
		"part", "pass", "pattern", "people", "perhaps", "person", "picture",
		"piece", "place", "plain", "plan", "plane", "plant", "play", "point",
		"port", "pose", "possible", "pound", "power", "press", "problem",
		"produce", "product", "pull", "put", "question", "quick", "rain",
		"ran", "reach", "read", "ready", "real", "record", "red", "remember",
		"rest", "right", "river", "road", "rock", "room", "round", "rule",
		"run", "said", "same", "saw", "say", "school", "science", "sea",
		"second", "see", "seem", "self", "sentence", "serve", "set", "several",
		"shape", "she", "ship", "short", "should", "show", "side", "simple",
		"since", "sing", "sit", "six", "size", "sleep", "slow", "small", "snow",
		"so", "some", "song", "soon", "sound", "south", "special", "spell",
		"stand", "star", "start", "state", "stay", "step", "still", "stood",
		"stop", "story", "street", "strong", "study", "such", "sun", "sure",
		"surface", "table", "tail", "take", "talk", "teach", "tell", "ten",
		"test", "than", "that", "their", "them", "then", "there", "these",
		"they", "thing", "think", "this", "those", "though", "thought",
		"thousand", "three", "through", "time", "to", "together", "told",
		"too", "took", "top", "toward", "town", "travel", "tree", "true", "try",
		"turn", "two", "under", "unit", "until", "up", "us", "use", "usual",
		"very", "voice", "vowel", "wait", "walk", "want", "war", "warm", "was",
		"watch", "water", "way", "we", "week", "weight", "well", "went", "were",
		"west", "what", "wheel", "when", "where", "which", "while", "white",
		"who", "whole", "why", "will", "wind", "with", "wonder", "wood", "word",
		"work", "world", "would", "write", "year", "yes", "yet", "you", "young",
		"your"
	]
}
const dicts_langs = Object.keys(dicts)

const init_dictionaries = () => {
	for (var key of dicts_langs) {
		var dict = dicts[key]
		var map = {}
		for (var word of dict)
			map[word] = true
		dicts[key] = map
	}
}
init_dictionaries()

browser.contextMenus.create({
  id: "tts-selection",
  title: "Speaks! Text to speech",
  contexts: ["selection"]
}, () => { /*console.log("asd")*/ });

browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "tts-selection":
      do_the_tts(info.selectionText)
      break;
  }
})

const get_best_lang_info = (_point_map) => {
	var diff = 0
	var max_points = -1
	var lang_to_use = ["en"]
	for (var lang of dicts_langs) {
		if (_point_map[lang] > max_points){
			diff = _point_map[lang] - max_points
			lang_to_use.push(lang)
			max_points  = _point_map[lang]
		}
	}
	return {
		"diff": diff,
		"lang_to_use": lang_to_use,
	}
}

var get_lang = (_text) => {
	
	var point_map = {}
	
	for (var lang of dicts_langs)
		point_map[lang] = 0
	
	var tokens = _text.replace(/[^a-zA-Z0-9]/g, " ")
		.split(" ")
	
	for (var token of tokens) {
		token = token.trim().toLowerCase()
		for (var lang of dicts_langs) {
			if (dicts[lang].hasOwnProperty(token)) {
				point_map[lang] += 1
			}
		}
	}
	
	var info = get_best_lang_info(point_map)
	/*console.log(info)
	
	if (info.diff < 10) {
		for (var lang of dicts_langs) {
			for (var token of tokens) {
				for (var word in dicts[lang]) {
					if (word.length < 2)
						continue
					if (token.indexOf(word) != -1)
						point_map[lang] += 1
				}
			}
		}
	}
	
	info = get_best_lang_info(point_map)
	console.log(info)*/
	
	return info.lang_to_use.pop()
}

const filter_slowing_characters = (_text) => {
	return _text
		.replace(/[\!\(\)\,\;\-\/\:\\\n\r\?]/g, " ")
}

const add_space_before_upper_case = (_text) => {
	return _text.split("")
		.map(c => {
			if (!isNaN(parseInt("5")))
				return c
			if (c.toUpperCase() === c)
				return " " + c
			return c
		})
		.join("")
}

var do_the_tts = (_text) => {
	synth.cancel()
	
	_text = add_space_before_upper_case(_text)
	_text = filter_slowing_characters(_text)
	_text = _text.toLowerCase()
	
	const lang = get_lang(_text)
	
	const rs = (_to_replace, _replacement, _anywhere = false) => {
		if (_anywhere) {
			var reg_exp = new RegExp(_to_replace, 'g')
			_text = _text.replace(reg_exp, " " + _replacement + " ")
		} else {
			// TODO: this must go into some [^\\s], but how does this actually work with ^?
			var reg_exp = new RegExp('\\s' + _to_replace + '\\s', 'g')
			_text = _text.replace(reg_exp, " " + _replacement + " ")
			var reg_exp = new RegExp('^' + _to_replace + '\\s', 'g')
			_text = _text.replace(reg_exp, " " + _replacement + " ")
			var reg_exp = new RegExp('\\s' + _to_replace + '$', 'g')
			_text = _text.replace(reg_exp, " " + _replacement + " ")
		}
	}
	
	var rate = 1.6
	
	console.log("TTS pre: " + _text)
	if (lang == "de") {
		rate = 1.9
		// TODO: put this into some map
		rs("0", "null")
		rs("1", "eins")
		rs("2", "zwei")
		rs("3", "drei")
		rs("4", "vier")
		rs("5", "fünf")
		rs("6", "sechs")
		rs("7", "sieben")
		rs("8", "acht")
		rs("9", "neun")
		
		rs("dijkstra", "deikstra")
		rs("“banker’salgorithm”", "bänkers algorit m")
		rs("banker’s algorithm", "bänkers algorit m")
		rs("bankers algorithm", "bänkers algorit m")
		rs("banker s algorithm", "bänkers algorit m")
		rs("sts", "schort törm skedtschjuling", true)
		rs("i\\.d\\.r\\.", "in der regel")
		rs("erst1x", "ersteinmal", true)
		rs("sog\\.", "sogenannte", true)
		rs("zw\\.", "zwischen", true)
		rs("d\\.h\\.", "das heißt", true)
		rs("d\\. h\\.", "das heißt", true)
		rs("ggf\\.", "gegebenenfalls", true)
		rs("z\\.b\\.", "zum beispiel", true)
		rs("z\\. b\\.", "zum beispiel", true)
		rs("k\\.a\\.", "kritischen abschnitt", true)
		rs("prof\\.", "Professor", true)
		rs("0\\.", "nullte")
		rs("1\\.", "erste")
		rs("2\\.", "zweite")
		rs("3\\.", "dritte")
		rs("4\\.", "vierte")
		rs("5\\.", "fünfte")
		rs("6\\.", "sechste")
		rs("7\\.", "siebte")
		rs("8\\.", "achte")
		rs("9\\.", "neute")
		rs("10\\.", "zehnte")
		rs("11\\.", "elfte")
		rs("12\\.", "zwöfte")
		rs("l s problem", "lese-schreib-problem")
		rs("l s problems", "lese-schreib-problems")
		rs("l s probleme", "lese-schreib-probleme")
		
		rs("aum", "Adressumsetzungsmechanismus")
		rs("engl.", "englisch")
	}
	
	_text = _text.replace(/\?/g, "")
	
	var to_speak = []
	
	for (var el of _text.split(".")) {
		if (el.trim().length < 5) {
			if (to_speak.length > 0) {
				to_speak.push(to_speak.pop() + " " + el)
			} else {
				to_speak.push(el)
			}
			continue;
		}
		to_speak.push(el)
	}
	
	console.log("----- TTS post: -----")
	for (var t of to_speak) {
		t = t.replace(/\s+/g, " ")
		     .trim()
		
		console.log(t)
	
		var ut = new SpeechSynthesisUtterance(t);
		ut.rate = rate
		ut.lang = lang
		synth.speak(ut);
	}
}
