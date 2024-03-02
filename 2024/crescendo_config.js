var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Name + last initial - ex: Ryan D",
      "code": "s",
      "type": "scouter",
      "size": 12,
      "maxSize": 12,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "RegalEagle",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
		"p": "Practice<br>",
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "code": "al",
      "type": "bool"
    },
    { "name": "Amp Scores",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "ass",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Amp Scores",
      "code": "tas",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "code": "tss",
      "type": "counter"
    }
  ],
  "endgame": [
    { "name": "Endgame Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "o": "Onstage<br>",
        "s": "Onstage (Spotlit)<br>",
        "h": "Harmony<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
	},
    { "name": "Is note in trap?",
      "code": "nit",
      "type": "bool"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "1": "Bad Defense<br>",
        "2": "Below Average<br>",
        "3": "Above average<br>",
        "4": "Excellent<br>",
        "0": "Did not play defense<br>"
      },
      "required": "true",
      "defaultValue": "0"
    },
    { "name": "Died/Immobilized for significant amt of time<br>(ex: about 15 seconds)",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Dropped Notes (>2)",
      "code": "dn",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "radio",
	"choices": {
          "0": "Bad/worst<br>",
       	  "1": "Below Average<br>",
       	  "2": "Above average<br>",
          "3": "Excellent/ideal<br>"
      },
	"required": "true"
    },
    { "name": "Comments(be concise)",
      "code": "co",
      "type": "text",
      "size": 30,
      "maxSize": 89
    }
  ]
}`;
