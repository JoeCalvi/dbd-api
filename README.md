# Introduction

Hello, fellow traverser of the fog! 

I couldn't find a reliable, up-to-date Dead By Daylight API and needed a project to work on, so I bring this offering. My goal was for this API to be a robust wealth of Dead By Daylight data for other developers to utilize in their own endeavors. This API is built with NodeJS and Express, using MongoDB as a database.

This API only supports `GET` requests, as it is meant to be a tool to provide access to Dead By Daylight data in order to build things like random loadout generators, etc. Below, I will do my best to explain in detail how each of the routes work to make this API an easy tool for people to use. I will do my best to update data as it is adjusted per update, but alas, I am human and may miss some things. That being said, some TODOs still include: items, offerings, and add-ons. 

If you don't find the answer to your question below, or if you have any comments, feedback, or just want to share something you built while using this API, please feel free to reach out to me [here](https://joecalvi.dev). All rights to any and all of this information belong to [Behaviour Interactive](https://www.bhvr.com/), and I do not claim to be the author of any of it. Thank you for stopping by and good luck in your next one!

## Survivor Routes

`/survivors`

By calling http://localhost:3000/survivors, you will get ALL survivors with slightly less detail than getting a survivor by their ID or name. 

Example:

```
{
        "_id": "64caecb7da2e1eb56296d922",
        "role": "Focused Competitor",
        "name": "Feng Min",
        "overview": "Feng Min is an objective-focused competitor who can quickly adapt her strategy to meet a vast range of challenging situations. Her personal Perks - Technician, Lithe, and Alert - help her with repairing Generators and locating the Killer. She can silently work on Generators and thus can notice the Killer long before they notice her. She will be long gone before the Killer can do anything.",
        "chapter_id": "64cadfc20faca2101c26d6c8",
        "gender": "Female",
        "voice_actor": "Bianca Lavric (BHVR)",
        "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/ac/S09_charSelect_portrait.png/revision/latest?cb=20230705190922",
        "perk_one_id": "64cc18d0875261f22dea2334",
        "perk_two_id": "64cc1913875261f22dea233a",
        "perk_three_id": "64cc194b875261f22dea2341",
        "createdAt": "2023-08-02T23:54:31.741Z",
        "updatedAt": "2023-08-04T19:37:53.690Z",
        "__v": 0,
        "chapter": {
            "_id": "64cadfc20faca2101c26d6c8",
            "name": "Spark of Madness",
            "number": 4,
            "release_date": "11 May 2017 (Thursday)",
            "associated_killers": [
                {
                    "_id": "64c460a03b6c0963934100d3",
                    "killer_name": "The Doctor",
                    "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/ad/K07_charSelect_portrait.png/revision/latest?cb=20230705190852",
                    "id": "64c460a03b6c0963934100d3"
                }
            ],
            "id": "64cadfc20faca2101c26d6c8"
        },
        "perk_one": {
            "_id": "64cc18d0875261f22dea2334",
            "name": "Technician",
            "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/00/Technician.gif/revision/latest?cb=20200926200248",
            "id": "64cc18d0875261f22dea2334"
        },
        "perk_two": {
            "_id": "64cc1913875261f22dea233a",
            "name": "Lithe",
            "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8d/Lithe.gif/revision/latest?cb=20200501133731",
            "id": "64cc1913875261f22dea233a"
        },
        "perk_three": {
            "_id": "64cc194b875261f22dea2341",
            "name": "Alert",
            "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e7/Alert.gif/revision/latest?cb=20200501133722",
            "id": "64cc194b875261f22dea2341"
        },
        "id": "64caecb7da2e1eb56296d922"
    }
```

`/survivors/survivor_id`

In the above example, we can see that Feng's survivor_id ("_id" or "id", referred to as "survivor_id" on all associated objects) is 64caecb7da2e1eb56296d922. By calling http://localhost:3000/survivors/64caecb7da2e1eb56296d922, the following survivor object will be returned:

```
  {
    "_id": "64caecb7da2e1eb56296d922",
    "role": "Focused Competitor",
    "name": "Feng Min",
    "overview": "Feng Min is an objective-focused competitor who can quickly adapt her strategy to meet a vast range of challenging situations. Her personal Perks - Technician, Lithe, and Alert - help her with repairing Generators and locating the Killer. She can silently work on Generators and thus can notice the Killer long before they notice her. She will be long gone before the Killer can do anything.",
    "chapter_id": "64cadfc20faca2101c26d6c8",
    "gender": "Female",
    "voice_actor": "Bianca Lavric (BHVR)",
    "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/ac/S09_charSelect_portrait.png/revision/latest?cb=20230705190922",
    "perk_one_id": "64cc18d0875261f22dea2334",
    "perk_two_id": "64cc1913875261f22dea233a",
    "perk_three_id": "64cc194b875261f22dea2341",
    "createdAt": "2023-08-02T23:54:31.741Z",
    "updatedAt": "2023-08-04T19:37:53.690Z",
    "__v": 0,
    "chapter": {
        "_id": "64cadfc20faca2101c26d6c8",
        "realm_id": "64d12e240d0691dad2bd671b",
        "associated_killers": [
            {
                "_id": "64c460a03b6c0963934100d3",
                "killer_name": "The Doctor",
                "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/ad/K07_charSelect_portrait.png/revision/latest?cb=20230705190852",
                "id": "64c460a03b6c0963934100d3"
            }
        ],
        "realm": {
            "_id": "64d12e240d0691dad2bd671b",
            "name": "Lery's Memorial Institute",
            "location": "Illinois, United States",
            "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e8/RealmKeyArt_07.png/revision/latest?cb=20210920232852",
            "id": "64d12e240d0691dad2bd671b"
        },
        "id": "64cadfc20faca2101c26d6c8"
    },
    "perk_one": {
        "_id": "64cc18d0875261f22dea2334",
        "name": "Technician",
        "associated_status_effects": [],
        "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/00/Technician.gif/revision/latest?cb=20200926200248",
        "description": "You are apt at handling machinery with the greatest care and precision. When repairing a Generator, the following effects apply: Reduces the audible range of your Repair noises by 8 metres and suppresses the explosion and accompanying Loud Noise Notification when failing a Skill Check. Failing a Skill Check instantly regresses the Generator by 5/4/3% of its maximum possible Progression in addition to the default Progression penalty.",
        "id": "64cc18d0875261f22dea2334"
    },
    "perk_two": {
        "_id": "64cc1913875261f22dea233a",
        "name": "Lithe",
        "associated_status_effects": [
            {
                "_id": "64cbdfa814056587889cc44c",
                "name": "Exhausted",
                "type": "Debuff",
                "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f2/FulliconStatusEffects_exhaustion.png/revision/latest?cb=20210212000627"
            },
            {
                "_id": "64cbe0d214056587889cc454",
                "name": "Haste",
                "type": "Buff",
                "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/63/FulliconStatusEffects_haste.png/revision/latest?cb=20210212000629"
            }
        ],
        "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/8d/Lithe.gif/revision/latest?cb=20200501133731",
        "description": "After performing a rushed vault, break into a sprint of 150% of your normal Running Movement speed for a maximum of 3 seconds. Lithe causes the Exhausted Status Effect for 60/50/40 seconds. Lithe cannot be used when Exhausted.",
        "id": "64cc1913875261f22dea233a"
    },
    "perk_three": {
        "_id": "64cc194b875261f22dea2341",
        "name": "Alert",
        "associated_status_effects": [],
        "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e7/Alert.gif/revision/latest?cb=20200501133722",
        "description": "Your acute senses are on high alert. Whenever the Killer destroys a Pallet or a Breakable Wall, or damages a Generator, their Aura is revealed to you for 3/4/5 seconds.",
        "id": "64cc194b875261f22dea2341"
    },
    "id": "64caecb7da2e1eb56296d922"
}
```

Notice that by getting a survivor this way, we also have access to their realm, actual perk descriptions, and each perk's associated status effects (as opposed to just names, icons, and IDs).

`/survivors/query?survivor_name=name`

Another option is to use a name query. Using Feng Min as an example once more, a name query would look like this: http://localhost:3000/survivors/query?survivor_name=Feng-Min. The returned survivor object will be exactly the same as the example given above when getting a survivor by their ID.

**IMPORTANT NOTE**: While capitalization doesn't matter in this query, *punctuation* **does**! There are a few survivors with outlier names, such as "Élodie Rakoto" or "Ashley Joanna 'Ash' Williams", so getting by ID might is almost always a better route. With that said, here's what those two examples would look like:

http://localhost:3000/survivors/query?survivor_name=Élodie-Rakoto

http://localhost:3000/survivors/query?survivor_name=Ashley-Joanna-'Ash'-Williams

## Killer Routes

`/killers`

While the killer object looks a bit different than a survivor object, these routes operate pretty much exactly the same way. When calling http://localhost:3000/killers, all killers will be returned with the same level of detail as survivors.

Example:

```
 {
        "_id": "64c460a03b6c0963934100d3",
        "killer_name": "The Doctor",
        "original_name": "Herman Carter",
        "realm_id": "64d12e240d0691dad2bd671b",
        "power_id": "64c2ab0829009060f7108ccd",
        "power_attack_type": "Special Attack (Shock Therapy/Static Blast)",
        "weapon_id": "64b861b35a1f577cae3430bd",
        "movement_speed": "115% | 4.6 m/s",
        "terror_radius": "32 metres",
        "height": "Tall",
        "overview": "The Doctor is a madness-inducing Killer, able to use his Power, Carter's Spark, to incapacitate Survivors and cause them to hallucinate and scream in terror, revealing their position. His personal Perks - Overwhelming Presence, Monitor & Abuse, and Overcharge - encourage chases, impact Survivors' ability to repair effectively and make him harder to detect when not in a Chase. His Perks are about hindering and creating problems for the Survivors. The sheer stature of The Doctor infuses fear and terror in those around him.",
        "difficulty_rating": "Hard (These Killers use mechanics that are specific to them and require more practice to be effective)",
        "chapter_id": "64cadfc20faca2101c26d6c8",
        "gender": "Male",
        "voice_actor": "Alex Lin (BHVR)",
        "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/ad/K07_charSelect_portrait.png/revision/latest?cb=20230705190852",
        "perk_one_id": "64cd3af68290cb86311d675e",
        "perk_two_id": "64cd3b1b8290cb86311d6761",
        "perk_three_id": "64cd3b418290cb86311d6764",
        "createdAt": "2023-07-29T00:43:12.814Z",
        "updatedAt": "2023-08-07T18:13:30.597Z",
        "__v": 0,
        "perk_one": {
            "_id": "64cd3af68290cb86311d675e",
            "name": "Overwhelming Presence",
            "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d0/OverwhelmingPresence.gif/revision/latest?cb=20200926195854",
            "id": "64cd3af68290cb86311d675e"
        },
        "perk_two": {
            "_id": "64cd3b1b8290cb86311d6761",
            "name": "Monitor & Abuse",
            "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a3/MonitorAndAbuse.gif/revision/latest?cb=20200501134305",
            "id": "64cd3b1b8290cb86311d6761"
        },
        "perk_three": {
            "_id": "64cd3b418290cb86311d6764",
            "name": "Overcharge",
            "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3d/Overcharge.gif/revision/latest?cb=20200501134315",
            "id": "64cd3b418290cb86311d6764"
        },
        "weapon": {
            "_id": "64b861b35a1f577cae3430bd",
            "name": "The Stick",
            "description": "An instrument of punishment when all other treatments failed. Upon hitting a Survivor, The Doctor will pat The Stick into his palm twice.",
            "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/fc/DO_Stick01.png/revision/latest?cb=20170511153703",
            "id": "64b861b35a1f577cae3430bd"
        },
        "realm": {
            "_id": "64d12e240d0691dad2bd671b",
            "name": "Lery's Memorial Institute",
            "location": "Illinois, United States",
            "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e8/RealmKeyArt_07.png/revision/latest?cb=20210920232852",
            "id": "64d12e240d0691dad2bd671b"
        },
        "power": {
            "_id": "64c2ab0829009060f7108ccd",
            "name": "Carter's Spark",
            "description": "Successfully striking Survivors with either of The Doctor's electro-convulsive abilities causes them to suffer from the tiered Madness Status Effect.",
            "id": "64c2ab0829009060f7108ccd"
        },
        "chapter": {
            "_id": "64cadfc20faca2101c26d6c8",
            "name": "Spark of Madness",
            "number": 4,
            "release_date": "11 May 2017 (Thursday)",
            "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/39/SparkOfMadness_main_header.jpg/revision/latest?cb=20170512175200",
            "associated_survivors": [
                {
                    "_id": "64caecb7da2e1eb56296d922",
                    "name": "Feng Min",
                    "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/ac/S09_charSelect_portrait.png/revision/latest?cb=20230705190922",
                    "id": "64caecb7da2e1eb56296d922"
                }
            ],
            "id": "64cadfc20faca2101c26d6c8"
        },
        "id": "64c460a03b6c0963934100d3"
    }
```
`/killers/:killerId`

`/killers/query?killer_name=killer_name`

