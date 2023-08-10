# Introduction

Hello, fellow traverser of the fog! 

I couldn't find a reliable, up-to-date Dead By Daylight API and needed a project to work on, so I bring this offering. My goal was for this API to be a robust wealth of Dead By Daylight data for other developers to utilize in their own endeavors. This API is built with NodeJS and Express, using MongoDB as a database.

This API only supports `GET` requests, as it is meant to be a tool to provide access to Dead By Daylight data in order to build things like random loadout generators, etc. Below, I explain in detail how each of the routes work in order to make this API an easy tool for people to use. I will do my best to update data as it is adjusted per update (last updated with 7.1.0), but alas, I am human and may miss some things. That being said, some TODOs still include: items, offerings, and add-ons. 

If you don't find the answer to your question below, or if you have any comments, feedback, or just want to share something you built while using this API, please feel free to reach out to me [here](https://joecalvi.dev). All rights to any and all of this information belong to [Behaviour Interactive](https://www.bhvr.com/), and I do not claim to be the author of any of it. Thank you for stopping by and good luck in your next one!

## Survivor Routes

`/survivors`

By calling https://deadbydaylight-api.onrender.com/survivors, you will get ALL survivors with slightly less detail than getting a survivor by their ID or name. 

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

In the above example, we can see that Feng's survivor_id ("_id" or "id", referred to as "survivor_id" on all associated objects) is 64caecb7da2e1eb56296d922. By calling https://deadbydaylight-api.onrender.com/survivors/64caecb7da2e1eb56296d922, the following survivor object will be returned:

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

`/survivors/query?survivorName=name`

Another option is to use a name query. Using Feng Min as an example once more, a name query would look like this: https://deadbydaylight-api.onrender.com/survivors/query?survivorName=Feng-Min. The returned survivor object will be exactly the same as the example given above when getting a survivor by their ID.

**IMPORTANT NOTE**: While capitalization doesn't matter in this query, *punctuation* **does**! There are a few survivors with outlier names, such as "Élodie Rakoto" or "Ashley Joanna 'Ash' Williams", so getting by ID might is almost always a better route. With that said, here's what those two examples would look like:

https://deadbydaylight-api.onrender.com/survivors/query?survivorName=Élodie-Rakoto

https://deadbydaylight-api.onrender.com/survivors/query?survivorName=Ashley-Joanna-'Ash'-Williams

## Killer Routes

`/killers`

While the killer object looks a bit different than a survivor object, these routes operate pretty much exactly the same way. When calling https://deadbydaylight-api.onrender.com/killers, all killers will be returned with the same level of detail as survivors.

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
`/killers/killer_id`

In the above example, we can see that The Doctor's killer_id ("_id" or "id", referred to as "killer_id" on all associated objects) is 64c460a03b6c0963934100d3. By calling https://deadbydaylight-api.onrender.com/killers/64c460a03b6c0963934100d3, the following killer object will be returned:

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
        "associated_status_effects": [],
        "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d0/OverwhelmingPresence.gif/revision/latest?cb=20200926195854",
        "description": "Just knowing you are near is enough to disturb your victims. Survivors within your Terror Radius suffer from inefficiency: When using an Item, its Depletion rate is increased by 80/90/100%.",
        "id": "64cd3af68290cb86311d675e"
    },
    "perk_two": {
        "_id": "64cd3b1b8290cb86311d6761",
        "name": "Monitor & Abuse",
        "associated_status_effects": [],
        "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a3/MonitorAndAbuse.gif/revision/latest?cb=20200501134305",
        "description": "Meticulous in your approach, terrifying in your application. Increases the radius of your default Terror Radius by 8 metres for the entire Trial. Whenever you are not in a Chase with a Survivor, the following effects apply: Reduces your Terror Radius by 16 metres and increases your Field of View by 3/5/10°.",
        "id": "64cd3b1b8290cb86311d6761"
    },
    "perk_three": {
        "_id": "64cd3b418290cb86311d6764",
        "name": "Overcharge",
        "associated_status_effects": [],
        "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3d/Overcharge.gif/revision/latest?cb=20200501134315",
        "description": "You are fueled by your hate for progress. Performing the Damage Generator Action on a Generator applies Overcharge: The next Survivor interacting with that Generator is faced with a difficult Skill Check. Failing that Skill Check instantly regresses the Generator by 2/3/4% of its maximum possible Progression in addition to the default Progression penalty. After Overcharge is applied to a Generator, the following effect also applies: Increases the Regression speed from 85% to 130% over the next 30 seconds.",
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
        "special_interaction": null,
        "interaction_description": null,
        "special_ability": "Shock Therapy; Static Blast",
        "ability_description": "Press and hold the Power button to perform a Shock Therapy Attack, unleashing a cone-shaped, ranged shock attack on the ground in front of The Doctor. Survivors struck by Shock Therapy suffer from the following afflictions: Increases their Madness by 0.5 Tiers, and if this coincides with a Tier-up, afflicted Survivors will scream once, revealing their location to The Doctor; Interrupts any interaction they are performing at the moment of impact; Suppresses their ability to perform any interactions for the next 2.5 seconds, including vaulting Windows and dropping Pallets. Shock Therapy negates the Oblivious Status Effect, shocking Survivors suffering from it. If the Power gauge is full, press and hold the Active Ability button to perform a Static Blast, unleashing a shock attack that propagates outwards from The Doctor through the air and covers his entire Terror Radius. Survivors struck by Static Blast suffer from the following afflictions: Increases their Madness by +1 Tier, causing all afflicted Survivors to scream once, revealing their location to The Doctor; Interrupts any interaction they are performing at the moment of impact. Static Blast negates the Oblivious Status Effect, shocking Survivors suffering from it. Static Blast has a cool-down of 60 seconds.",
        "special_object": null,
        "object_description": null,
        "special_affliction": "Madness",
        "affliction_description": "Madness causes increasingly potent afflictions in the affected Survivors depending on its Tier. Once the Madness Status Effect is obtained, Survivors are unable to lose it and may only regress back to Madness I by performing the Snap Out of It interaction after reaching Madness III. Madness I: Causes Survivors to scream once during the tier-up, revealing their location to The Doctor; Causes Skill Checks to have a 33% chance to be Madness Skill Checks. Madness II: Causes Survivors to scream once during the tier-up, revealing their location to The Doctor; Causes Skill Checks to have a 66% chance to be Madness Skill Checks; Causes Survivors to experience occasional hallucinations in the form of Illusionary Doctors. Madness III: Causes Survivors to scream once during the tier-up, revealing their location to The Doctor, then intermittently every few seconds; Causes Skill Checks to have a 100% chance to be Madness Skill Checks; Causes Survivors to experience occasional hallucinations in the form of Illusionary Doctors and allows The Doctor to read the Auras of the Illusionary Doctors; Suppresses the ability of Survivors to use their Items; Suppresses the ability of Survivors to interact both with other Survivors and Props.",
        "mobility_description": null,
        "special_attack": null,
        "attack_description": null,
        "special_state": null,
        "state_description": null,
        "special_enemy": null,
        "enemy_description": null,
        "special_effect": null,
        "effect_description": null,
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
        "associated_maps": [
            {
                "_id": "64b985c6b777f1835e65d41f",
                "name": "Treatment Theatre",
                "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/15/IconMap_Hos_Treatment.png/revision/latest?cb=20200107170105",
                "layout": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/80/TreatmentTheatreOutline.png/revision/latest?cb=20230426222342",
                "id": "64b985c6b777f1835e65d41f"
            }
        ],
        "id": "64cadfc20faca2101c26d6c8"
    },
    "id": "64c460a03b6c0963934100d3"
}
```

When getting a killer by ID, you can see that we gain access to a little bit more information about them. While we have access to their realm in `GET` all killers, here we have access to the *maps* associated with them, as well as a detailed description of their power, plus perk descriptions and their associated status effects.

`/killers/query?killerName=killer_name`

While there aren't really any outlier names with killers (yet?), the same guidelines as the survivor_name query still apply and getting a killer by ID is always the more dependable and easier route. However, you can totally make the following query: https://deadbydaylight-api.onrender.com/killers/query?killerName=The-Doctor and get exactly the same killer object returned as above.

## Perk Routes

`/perks`

Calling https://deadbydaylight-api.onrender.com/perks will return ALL perks in the game, agnostic to their role ("Killer" or "Survivor") or whether they're generic or unique ("Hope" vs. "Made For This").

Example:

```
{
        "_id": "64cc140d875261f22dea22ec",
        "role": "Survivor",
        "name": "Adrenaline",
        "generic": false,
        "killer_id": null,
        "survivor_id": "64caeae5da2e1eb56296d8d9",
        "chapter_id": "64cadd872400b1dd8d1a1fb0",
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
        "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/af/Adrenaline.gif/revision/latest?cb=20200926194941",
        "description": "You are fueled by unexpecting energy when on the verge of escape. Once the Exit Gates are powered, instantly heal one Health State and sprint at 150% of your normal Running Movement speed for 5 seconds. Adrenaline is on hold if you are disabled at the moment it triggers and will instead activate upon being freed. If playing against The Nightmare, Adrenaline will wake you from the Dream World upon activation. Adrenaline ignores an existing Exhaustion timer but causes the Exhausted Status Effect for 60/50/40 seconds.",
        "createdAt": "2023-08-03T20:54:37.791Z",
        "updatedAt": "2023-08-03T20:54:37.791Z",
        "__v": 0,
        "killer": null,
        "survivor": {
            "_id": "64caeae5da2e1eb56296d8d9",
            "name": "Meg Thomas",
            "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/77/S02_charSelect_portrait.png/revision/latest?cb=20230705190636",
            "id": "64caeae5da2e1eb56296d8d9"
        },
        "chapter": {
            "_id": "64cadd872400b1dd8d1a1fb0",
            "name": "Base Game",
            "number": 0,
            "release_date": "14 June 2016 (Tuesday)",
            "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b7/Logo_dbd.svg/revision/latest?cb=20211216202129",
            "id": "64cadd872400b1dd8d1a1fb0"
        },
        "id": "64cc140d875261f22dea22ec"
    }
```

There are a few pieces of data we can use on a perk object to make more specific calls if one is looking to narrow down their search. Firstly, there is the "role" enum, determining whether a perk is a "Killer" or "Survivor" perk. Secondly, there is the "generic" bool, telling us whether or not the perk belongs to a specific survivor or killer. Lastly, there are both a "killer_id" and "survivor_id" attached to each perk. If the "generic" bool is set to **true**, both "killer_id" and "survivor_id" will be **null**, otherwise, one *or* the other will be **null** depending on who the perk belongs to. Because the perk "Adrenaline" belongs to Meg Thomas, a survivor, you can see that the "killer_id" is **null**, while the "survivor_id" belongs to Meg.

`/perks/perk_id`

While getting a perk by its unique perk_id ("_id" or "id", referred to as either "perk_one_id", "perk_two_id", or "perk_three_id" on associated killer or survivor objects) doesn't return a ton more information than getting all perks, it does specify what the other two perks are that belong to that character (if generic is **false**, of course). Calling https://deadbydaylight-api.onrender.com/perks/64cc140d875261f22dea22ec, for example, returns the following:

```
{
    "_id": "64cc140d875261f22dea22ec",
    "role": "Survivor",
    "name": "Adrenaline",
    "generic": false,
    "killer_id": null,
    "survivor_id": "64caeae5da2e1eb56296d8d9",
    "chapter_id": "64cadd872400b1dd8d1a1fb0",
    "associated_status_effects": [
        {
            "_id": "64cbdfa814056587889cc44c",
            "name": "Exhausted",
            "type": "Debuff",
            "description": "Survivors suffering from Exhaustion are unable to use any of the numerous Exhaustion Perks, preventing them from chaining multiple such Perks in quick succession. Exhaustion slowly recovers over time whenever the Survivor is not running. Exhaustion recovers immediately after being unhooked.",
            "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f2/FulliconStatusEffects_exhaustion.png/revision/latest?cb=20210212000627"
        },
        {
            "_id": "64cbe0d214056587889cc454",
            "name": "Haste",
            "type": "Buff",
            "description": "Players benefitting from Haste have their Movement speed increased. The strength of the effect depends on the specific Unlockable that inflicts it.",
            "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/63/FulliconStatusEffects_haste.png/revision/latest?cb=20210212000629"
        }
    ],
    "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/af/Adrenaline.gif/revision/latest?cb=20200926194941",
    "description": "You are fueled by unexpecting energy when on the verge of escape. Once the Exit Gates are powered, instantly heal one Health State and sprint at 150% of your normal Running Movement speed for 5 seconds. Adrenaline is on hold if you are disabled at the moment it triggers and will instead activate upon being freed. If playing against The Nightmare, Adrenaline will wake you from the Dream World upon activation. Adrenaline ignores an existing Exhaustion timer but causes the Exhausted Status Effect for 60/50/40 seconds.",
    "createdAt": "2023-08-03T20:54:37.791Z",
    "updatedAt": "2023-08-03T20:54:37.791Z",
    "__v": 0,
    "survivor": {
        "_id": "64caeae5da2e1eb56296d8d9",
        "name": "Meg Thomas",
        "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/77/S02_charSelect_portrait.png/revision/latest?cb=20230705190636",
        "perk_one_id": "64cc1372875261f22dea22df",
        "perk_two_id": "64cc13c7875261f22dea22e5",
        "perk_one": {
            "_id": "64cc1372875261f22dea22df",
            "name": "Quick & Quiet",
            "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/05/QuickAndQuiet.gif/revision/latest?cb=20200926201002",
            "id": "64cc1372875261f22dea22df"
        },
        "perk_two": {
            "_id": "64cc13c7875261f22dea22e5",
            "name": "Sprint Burst",
            "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/84/SprintBurst.gif/revision/latest?cb=20200926200201",
            "id": "64cc13c7875261f22dea22e5"
        },
        "id": "64caeae5da2e1eb56296d8d9"
    },
    "chapter": {
        "_id": "64cadd872400b1dd8d1a1fb0",
        "name": "Base Game",
        "number": 0,
        "release_date": "14 June 2016 (Tuesday)",
        "id": "64cadd872400b1dd8d1a1fb0"
    },
    "id": "64cc140d875261f22dea22ec"
}
```

`/perks/survivor`

Calling https://deadbydaylight-api.onrender.com/perks/survivor will return all perks where the "role" is set to "Survivor".

`/perks/survivor/generic`

Calling https://deadbydaylight-api.onrender.com/perks/survivor/generic will return all perks where the "role" is set to "Survivor" and "generic" is set to **true**.

`/perks/killer`

Calling https://deadbydaylight-api.onrender.com/perks/killer will return all perks where the "role" is set to "Killer".

`/perks/killer/generic`

Calling https://deadbydaylight-api.onrender.com/perks/killer/generic will return all perks where the "role" is set to "Killer" and "generic" is set to **true**.

`/character_id/perks`

We can also make a call based on a "character_id" (being either a "survivor_id" **or** a "killer_id"), and the three perks that belong to that specific character will be returned. For example, knowing that Meg's "character_id" (again, this is just Meg's "_id") is 64caeae5da2e1eb56296d8d9, if we make a call to https://deadbydaylight-api.onrender.com/64caeae5da2e1eb56296d8d9/perks, the following perks will be returned:
  - "Quick & Quiet"
  - "Sprint Burst"
  - "Adrenaline"

### Querying Perks

`/perks/query?characterName=`

Here, like getting perks based on a "character_id", you can get the three perks that belong to either a survivor or killer based on their "character_name" ("name" for survivor and "killer_name" for killer). The same guidelines from survivor/killer name queries apply here, and the recommended approach is definitely to get perks by a character's unique ID, but if you wish to query perks this way, here are a couple examples:

https://deadbydaylight-api.onrender.com/perks/query?characterName=Ashley-Joanna-'Ash'-Williams

https://deadbydaylight-api.onrender.com/perks/query?characterName=The-Wraith

`/perks/query?perk_name=`

While getting a perk by its ID is the recommended approach, you can also `GET` a specific perk based on its name as well. https://deadbydaylight-api.onrender.com/perks/query?perkName=We're-Gonna-Live-Forever, for example,  will return David King's perk of the same name, also displaying David's other two perks.

`/perks/query?type=`

In Dead By Daylight, there are several different "types" of perks, each type working under its own set of circumstances in-game. With this query, you can `GET` all perks of a certain type. This query currently has four supported types:
  - 'hex'
  - 'boon'
  - 'scourge'
  - 'teamwork'

So calling https://deadbydaylight-api.onrender.com/perks/query?type=hex, for example, will return all "Hex" perks.

`/perks/query?statusEffect=`

We are also able to utilize perks' associated status effects to narrow down our `GET` request. If you wanted to `GET` all perks that are associated with the "Haste" status effect in some capacity, you would just to need to make the call to https://deadbydaylight-api.onrender.com/perks/query?statusEffect=Haste.

`/perks/query?statusEffect=status_effect_name&role=role`

While querying perks by an associated status effect is great, perhaps it's not specific enough. Maybe you're only looking for killer perks that cause the "Exposed" status effect. In order to do this, you can add an additional query key of "role", set either to "Survivor" or "Killer", and instead make a call to https://deadbydaylight-api.onrender.com/perks/query?statusEffect=Exposed&role=Killer, returning that specific set of perks.

## Chapter Routes

`/chapters`

Making a call to https://deadbydaylight-api.onrender.com/chapters will return all chapters.

Example:

```
{
        "_id": "64cae0c90faca2101c26d6ec",
        "name": "Curtain Call",
        "number": 8,
        "release_date": "12 June 2018 (Tuesday)",
        "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/23/CurtainCall_main_header.png/revision/latest?cb=20180703002851",
        "realm_id": "64d12da70d0691dad2bd670f",
        "associated_killers": [
            {
                "_id": "64c462e53b6c09639341012b",
                "killer_name": "The Clown",
                "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e1/K12_charSelect_portrait.png/revision/latest?cb=20230705192149",
                "id": "64c462e53b6c09639341012b"
            }
        ],
        "associated_survivors": [
            {
                "_id": "64caeda4da2e1eb56296d942",
                "name": "Kate Denson",
                "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/19/S13_charSelect_portrait.png/revision/latest?cb=20230705192155",
                "id": "64caeda4da2e1eb56296d942"
            }
        ],
        "createdAt": "2023-08-02T23:03:37.858Z",
        "updatedAt": "2023-08-09T18:36:12.427Z",
        "__v": 1,
        "associated_maps": [
            {
                "_id": "64b98402b777f1835e65d400",
                "name": "Father Campbell's Chapel",
                "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/87/IconMap_Asy_Chapel.png/revision/latest?cb=20210209230825",
                "layout": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/72/FatherCampbellsChapelOutline.png/revision/latest?cb=20220613133812",
                "realm_id": "64d12da70d0691dad2bd670f",
                "realm": {
                    "_id": "64d12da70d0691dad2bd670f",
                    "name": "Crotus Prenn Asylum",
                    "location": "United States",
                    "id": "64d12da70d0691dad2bd670f"
                },
                "id": "64b98402b777f1835e65d400"
            }
        ],
        "id": "64cae0c90faca2101c26d6ec"
    }
```

`/chapters/chapter_id`

You can also use a chapter_id ("_id" or "id" on a chapter object, "chapter_id" everywhere else) to `GET` that specific chapter. This grants the bonus information of the perks that are tied to both the survivor *and* killer associated with that chapter, giving us essentially all of the content that came out with any given chapter. Making a call to https://deadbydaylight-api.onrender.com/chapters/64cae0c90faca2101c26d6ec (using the chapter_id from the chapter object above), for example, returns the following:

```
{
    "_id": "64cae0c90faca2101c26d6ec",
    "name": "Curtain Call",
    "number": 8,
    "release_date": "12 June 2018 (Tuesday)",
    "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/23/CurtainCall_main_header.png/revision/latest?cb=20180703002851",
    "realm_id": "64d12da70d0691dad2bd670f",
    "associated_killers": [
        {
            "_id": "64c462e53b6c09639341012b",
            "killer_name": "The Clown",
            "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e1/K12_charSelect_portrait.png/revision/latest?cb=20230705192149",
            "perk_one_id": "64cd41008290cb86311d67d4",
            "perk_two_id": "64cd41218290cb86311d67d7",
            "perk_three_id": "64cd413e8290cb86311d67da",
            "perk_one": {
                "_id": "64cd41008290cb86311d67d4",
                "name": "Bamboozle",
                "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c3/Bamboozle.gif/revision/latest?cb=20200926195101",
                "id": "64cd41008290cb86311d67d4"
            },
            "perk_two": {
                "_id": "64cd41218290cb86311d67d7",
                "name": "Coulrophobia",
                "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a6/Coulrophobia.gif/revision/latest?cb=20200501134717",
                "id": "64cd41218290cb86311d67d7"
            },
            "perk_three": {
                "_id": "64cd413e8290cb86311d67da",
                "name": "Pop Goes the Weasel",
                "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/69/PopGoesTheWeasel.gif/revision/latest?cb=20200926195919",
                "id": "64cd413e8290cb86311d67da"
            },
            "id": "64c462e53b6c09639341012b"
        }
    ],
    "associated_survivors": [
        {
            "_id": "64caeda4da2e1eb56296d942",
            "name": "Kate Denson",
            "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/19/S13_charSelect_portrait.png/revision/latest?cb=20230705192155",
            "perk_one_id": "64cc1c4e875261f22dea2379",
            "perk_two_id": "64cc1c6f875261f22dea237f",
            "perk_three_id": "64cc1c8c875261f22dea2382",
            "perk_one": {
                "_id": "64cc1c4e875261f22dea2379",
                "name": "Dance With Me",
                "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e6/DanceWithMe.gif/revision/latest?cb=20200926195228",
                "id": "64cc1c4e875261f22dea2379"
            },
            "perk_two": {
                "_id": "64cc1c6f875261f22dea237f",
                "name": "Windows of Opportunity",
                "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/6c/WindowsOfOpportunity.gif/revision/latest?cb=20200926200422",
                "id": "64cc1c6f875261f22dea237f"
            },
            "perk_three": {
                "_id": "64cc1c8c875261f22dea2382",
                "name": "Boil Over",
                "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/7e/BoilOver.gif/revision/latest?cb=20200501134102",
                "id": "64cc1c8c875261f22dea2382"
            },
            "id": "64caeda4da2e1eb56296d942"
        }
    ],
    "createdAt": "2023-08-02T23:03:37.858Z",
    "updatedAt": "2023-08-09T18:36:12.427Z",
    "__v": 1,
    "associated_maps": [
        {
            "_id": "64b98402b777f1835e65d400",
            "name": "Father Campbell's Chapel",
            "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/87/IconMap_Asy_Chapel.png/revision/latest?cb=20210209230825",
            "layout": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/7/72/FatherCampbellsChapelOutline.png/revision/latest?cb=20220613133812",
            "realm_id": "64d12da70d0691dad2bd670f",
            "realm": {
                "_id": "64d12da70d0691dad2bd670f",
                "name": "Crotus Prenn Asylum",
                "location": "United States",
                "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/90/RealmKeyArt_04.png/revision/latest?cb=20210920230910",
                "id": "64d12da70d0691dad2bd670f"
            },
            "id": "64b98402b777f1835e65d400"
        }
    ],
    "id": "64cae0c90faca2101c26d6ec"
}
```

`/chapters/query?survivorName=` **or** `/chapters/query?killerName=`

Using the `GET` by chapter_id is the better option, but you can get the same information from either of the above query routes. The following will both return the same exact chapter object as above:

  - https://deadbydaylight-api.onrender.com/chapters/query?survivorName=Kate-Denson 
  - https://deadbydaylight-api.onrender.com/chapters/query?killerName=The-Clown 

## Realm Routes

`/realms`

Making a call to https://deadbydaylight-api.onrender.com/realms will return all realms.

Example:

```
 {
        "_id": "64d12fd90d0691dad2bd673f",
        "name": "Raccoon City",
        "description": "A former art museum turned bastion of justice, the Raccoon City Police Station was left shattered by the outbreak. Even the bravest officers were overwhelmed by the ravenous dead.",
        "location": "Arklay County, United States",
        "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/ad/RealmKeyArt_16.png/revision/latest?cb=20210920233023",
        "associated_killers": [
            {
                "_id": "64c80a2306b9522e7355842c",
                "killer_name": "The Nemesis",
                "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/84/K24_charSelect_portrait.png/revision/latest?cb=20230705184123",
                "id": "64c80a2306b9522e7355842c"
            },
            {
                "_id": "64c80b9b06b9522e73558479",
                "killer_name": "The Mastermind",
                "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/87/K29_charSelect_portrait.png/revision/latest?cb=20230705184825",
                "id": "64c80b9b06b9522e73558479"
            }
        ],
        "maps": [
            {
                "_id": "64b98bd7b777f1835e65d48e",
                "name": "Raccoon City Police Station East Wing",
                "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/68/IconMap_Ecl_Eclipselevel01.png/revision/latest?cb=20210525214446",
                "layout": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/cd/RaccoonCityPoliceStationEastWingOutline_LowerFloor.png/revision/latest?cb=20220811122134 (Lower Floor); https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e9/RaccoonCityPoliceStationEastWingOutline_UpperFloor.png/revision/latest?cb=20220811122147 (Upper Floor)",
                "id": "64b98bd7b777f1835e65d48e"
            },
            {
                "_id": "64b98c22b777f1835e65d492",
                "name": "Raccoon City Police Station West Wing",
                "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/fa/IconMap_Ecl_Orionlevel01.png/revision/latest?cb=20220810155724",
                "layout": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/2f/RaccoonCityPoliceStationWestWingOutline_LowerFloor.png/revision/latest?cb=20220811122205 (Lower Floor); https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/97/RaccoonCityPoliceStationWestWingOutline_UpperFloor.png/revision/latest?cb=20220811122217 (Upper Floor)",
                "id": "64b98c22b777f1835e65d492"
            }
        ],
        "associated_chapters": [
            {
                "_id": "64cae34c0faca2101c26d747",
                "name": "Resident Evil™",
                "number": 20,
                "release_date": "15 June 2021 (Tuesday)",
                "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/2/20/ResidentEvil_main_header.png/revision/latest?cb=20210527171803",
                "id": "64cae34c0faca2101c26d747"
            },
            {
                "_id": "64cae47e0faca2101c26d779",
                "name": "Resident Evil™: PROJECT W",
                "number": 25,
                "release_date": "30 August 2022 (Tuesday)",
                "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/81/ResidentEvilProjectW_main_header.png/revision/latest?cb=20220831050952",
                "id": "64cae47e0faca2101c26d779"
            }
        ],
        "createdAt": "2023-08-07T17:54:33.748Z",
        "updatedAt": "2023-08-07T17:54:33.748Z",
        "__v": 0,
        "id": "64d12fd90d0691dad2bd673f"
    }
```
`/realms/realm_id`

The only bonus information getting a realm by its realm_id ("_id" or "id" on a realm object, "realm_id" everywhere else) will provide is an actual description of each map, instead of just its name, image, and layout. Calling https://deadbydaylight-api.onrender.com/realms/64d12fd90d0691dad2bd673f will return the "Raccoon City" realm above, just with the added description of each map.

`/realms/query?killerName=killer_name`

As with other name queries, getting a realm by its realm_id is a better option, but you can get the same exact result as above by using either of the following:

 - https://deadbydaylight-api.onrender.com/realms/query?killerName=The-Nemesis
 - https://deadbydaylight-api.onrender.com/realms/query?killerName=The-Mastermind

 ## Map Routes

 `/maps`

 Making a call to https://deadbydaylight-api.onrender.com/maps will return all maps from Dead By Daylight.

 Example:

 ```
{
        "_id": "64b98637b777f1835e65d428",
        "name": "Mother's Dwelling",
        "description": "This house is new to me. I have never stumbled upon its existence before. Nature made a good job hiding from the rest of the world. I am pondering upon who might live there. Sometimes I have seen lights stemming from its windows. Sometimes a passing shadow. The engulfment that the surrounding wilderness provides might not be unintentional. Might it be on purpose? Might this... home seek anonymity and to be unseen by the rest of the world? I am not at peace with this dwelling. I believe to be hearing screams and wailing coming from it. But my mind is unstable and my ears might not be trusted. Or can they?",
        "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/01/IconMap_Brl_MadHouse.png/revision/latest?cb=20230311132630",
        "layout": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/d/d4/MothersDwellingOutline.png/revision/latest?cb=20230502102854",
        "realm_id": "64d12e5c0d0691dad2bd671f",
        "createdAt": "2023-07-20T19:08:40.035Z",
        "updatedAt": "2023-08-07T19:28:32.048Z",
        "__v": 0,
        "chapter_id": "64cadfea0faca2101c26d6cf",
        "realm": {
            "_id": "64d12e5c0d0691dad2bd671f",
            "name": "Red Forest",
            "location": "Kiev Governorate, Russian Empire",
            "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e7/RealmKeyArt_08.png/revision/latest?cb=20230402122442",
            "id": "64d12e5c0d0691dad2bd671f"
        },
        "chapter": {
            "_id": "64cadfea0faca2101c26d6cf",
            "name": "A Lullaby for the Dark",
            "number": 5,
            "release_date": "27 July 2017 (Thursday)",
            "associated_killers": [
                {
                    "_id": "64c461123b6c0963934100e2",
                    "killer_name": "The Huntress",
                    "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/1a/K08_charSelect_portrait.png/revision/latest?cb=20230705191247",
                    "id": "64c461123b6c0963934100e2"
                }
            ],
            "associated_survivors": [
                {
                    "_id": "64caeceada2e1eb56296d929",
                    "name": "David King",
                    "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/5/57/S10_charSelect_portrait.png/revision/latest?cb=20230705191257",
                    "id": "64caeceada2e1eb56296d929"
                }
            ],
            "id": "64cadfea0faca2101c26d6cf"
        },
        "id": "64b98637b777f1835e65d428"
    }
 ```

 `/maps/map_id`

 Using a map's map_id ("_id" or "id", "map_id" everywhere else), we are able to `GET` one specific map. Making a call to https://deadbydaylight-api.onrender.com/maps/64b98637b777f1835e65d428 will return the same exact map object as above, with no additional information.

 `/realms/realm_id/maps`

 In Dead By Daylight, two maps from two different chapters can exist in one realm. For example: while "Mother's Dwelling" came out with The Huntress and "Temple of Purgation" came out with The Plague, both maps happen to exist in the "Red Forest" realm. By using the realm_id of the "Red Forest" realm, we can `GET` both "Mother's Dwelling" *and* "Temple of Purgation" by making a call to https://deadbydaylight-api.onrender.com/realms/64d12e5c0d0691dad2bd671f/maps.

 `/maps/query?realmName=realm_name`

 You can get the exact same information by making the query https://deadbydaylight-api.onrender.com/maps/query?realmName=Red-Forest, but using its realm_id and making the call above this one is suggested.

 ## Power Routes

`/powers`

Making a call to https://deadbydaylight-api.onrender.com/powers will return the power of each killer.

Example:

```
{
        "_id": "64c2b03a29009060f7108cdd",
        "name": "Jigsaw's Baptism",
        "description": "The Pig starts the Trial with 4 Reverse Bear Traps in her inventory, which cannot be replenished. The Trial also spawns 5 Jigsaw Boxes placed in random locations throughout the Trial Grounds.",
        "special_interaction": "Jigsaw Boxes",
        "interaction_description": "Trapped Survivors see the Auras of all unsearched Jigsaw Boxes in the environment at all times. Trapped Survivors must search a random number of those Jigsaw Boxes (ranging from 1-4) in order to find the key to unlock their Reverse Bear Trap and remove it from their head. If the Search of a Jigsaw Box does not yield the key, its Aura will be removed and Billy, the Jigsaw Puppet sitting atop it, will cackle at the Survivor.",
        "special_ability": "Reverse Bear Traps",
        "ability_description": "Inactive Reverse Bear Traps: Press the Active Ability button while standing over a downed Survivor to attach an Inactive Reverse Bear Trap to their head. Trapped Survivors may escape the Trial through the Exit Gates, but only if the Reverse Bear Trap is still inactive. Active Reverse Bear Traps: Completing a Generator will activate all currently inactive Reverse Bear Traps. Active Reverse Bear Traps are armed and on a Death Timer of 150 seconds, which is displayed on the Survivor's Status Icon. Once the Death Timer elapses, the Reverse Bear Trap snaps open and kills the Trapped Survivor, counting as a Sacrifice. The Death Timer is paused whenever the Survivor is downed, hooked, or being actively chased by The Pig. Trapped Survivors may not escape the Trial through the Exit Gates if the Reverse Bear Trap is active. Approaching the Point of No Return, which is located at the mid-way point inside the Exit Gates, causes the Reverse Bear Trap to beep rapidly, warning the Survivor of their impending doom. Passing the trigger point immediately trips the Reverse Bear Trap and kills the Survivor. Trapped Survivors may still escape the Trial through the Hatch, even if the Reverse Bear Trap is active.",
        "special_object": null,
        "object_description": null,
        "special_affliction": null,
        "affliction_description": null,
        "special_mobility": "Crouching",
        "mobility_description": "Press the Active Ability button to crouch or un-crouch. While crouched, The Pig is granted the Undetectable Status Effect at the cost of moving at a slower speed (3.6 m/s).",
        "special_attack": "Ambush Dash",
        "attack_description": "Press and hold the Attack button while crouched to charge an Ambush Dash attack. The Ambush Dash causes The Pig to perform a Lunge Attack with increased duration (2 seconds) and increased Movement speed (6.9 m/s).",
        "special_state": null,
        "state_description": null,
        "special_enemy": null,
        "enemy_description": null,
        "special_effect": null,
        "effect_description": null,
        "killer_id": "64c4624f3b6c096393410114",
        "createdAt": "2023-07-27T17:58:18.616Z",
        "updatedAt": "2023-07-31T19:40:49.966Z",
        "__v": 0,
        "killer": {
            "_id": "64c4624f3b6c096393410114",
            "killer_name": "The Pig",
            "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c7/K11_charSelect_portrait.png/revision/latest?cb=20230705191844",
            "id": "64c4624f3b6c096393410114"
        },
        "id": "64c2b03a29009060f7108cdd"
    }
```

Not all killers' powers are that complex, so many elements of any given killer's power may be **null**.

`/powers/power_id`

Getting a power by its power_id ("_id" or "id", "power_id" everywhere else) will return that specific power, just with more details on the killer attached to it. By making a call to https://deadbydaylight-api.onrender.com/powers/64c2b03a29009060f7108cdd, for example, we will see the same object as above, but we also gain access to The Pig's three perks' names and icons, her weapon,  and the chapter with which she was released.

`/killers/killer_id/power`

We can also get that same power object by using The Pig's killer_id by making a call to https://deadbydaylight-api.onrender.com/killers/64c4624f3b6c096393410114/power, without the killer being populated.

`/powers/query?killerName=killer_name`

The other option is to make a call to https://deadbydaylight-api.onrender.com/powers/query?killerName=The-Pig, returning the same "Jigsaw's Baptism" power object, but using The Pig's killer_id and the above route is better.

## Weapon Routes

`/weapons`

Making a call to https://deadbydaylight-api.onrender.com/weapons will return the weapons of all killers.

Example:

```
{
        "_id": "64b861085a1f577cae3430a4",
        "name": "Azarov's Skull",
        "description": "The teeth of death lie on Azarov's skull and spine. Upon hitting a Survivor, The Wraith will wipe blood from Azarov's Skull with his left thumb.",
        "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/35/Wraith_Weapon01.png/revision/latest?cb=20220114151500",
        "killer_id": "64c45461c4cd9ff0150eaed5",
        "createdAt": "2023-07-19T22:17:44.924Z",
        "updatedAt": "2023-08-07T17:15:02.746Z",
        "__v": 0,
        "killer": {
            "_id": "64c45461c4cd9ff0150eaed5",
            "killer_name": "The Wraith",
            "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0d/K02_charSelect_portrait.png/revision/latest?cb=20230705190257",
            "id": "64c45461c4cd9ff0150eaed5"
        },
        "id": "64b861085a1f577cae3430a4"
    }
```

`/weapons/weapon_id`

As with getting a power by its power_id, getting a weapon by its weapon_id ("_id" or "id", "weapon_id" everywhere else) will return a bit more information on the killer itself. Calling https://deadbydaylight-api.onrender.com/weapons/64b861085a1f577cae3430a4, for example, returns the following:

```
{
    "_id": "64b861085a1f577cae3430a4",
    "name": "Azarov's Skull",
    "description": "The teeth of death lie on Azarov's skull and spine. Upon hitting a Survivor, The Wraith will wipe blood from Azarov's Skull with his left thumb.",
    "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/35/Wraith_Weapon01.png/revision/latest?cb=20220114151500",
    "killer_id": "64c45461c4cd9ff0150eaed5",
    "createdAt": "2023-07-19T22:17:44.924Z",
    "updatedAt": "2023-08-07T17:15:02.746Z",
    "__v": 0,
    "killer": {
        "_id": "64c45461c4cd9ff0150eaed5",
        "killer_name": "The Wraith",
        "overview": "The Wraith is a stealth Killer, able to cloak and uncloak at the ringing of his Wailing Bell. His personal Perks - Predator, Bloodhound, and Shadowborn - give him extra abilities to track and locate Survivors, making him a very efficient Hunter. He focuses on tracking and hunting Survivors, making it easier to catch and kill them.",
        "chapter_id": "64cadd872400b1dd8d1a1fb0",
        "portrait": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0d/K02_charSelect_portrait.png/revision/latest?cb=20230705190257",
        "chapter": {
            "_id": "64cadd872400b1dd8d1a1fb0",
            "name": "Base Game",
            "number": 0,
            "release_date": "14 June 2016 (Tuesday)",
            "image": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b7/Logo_dbd.svg/revision/latest?cb=20211216202129",
            "id": "64cadd872400b1dd8d1a1fb0"
        },
        "id": "64c45461c4cd9ff0150eaed5"
    },
    "id": "64b861085a1f577cae3430a4"
}
```

`/weapons/query?killerName=killer_name`

https://deadbydaylight-api.onrender.com/weapons/query?killerName=The-Wraith returns the same exact weapon object as above, but using the weapon_id route is more dependable.

## Status Effect Routes

`/status_effects`

Making a call to https://deadbydaylight-api.onrender.com/status_effects returns all status effects in Dead By Daylight.

Example:

```
{
        "_id": "64cbdde214056587889cc440",
        "name": "Blindness",
        "type": "Debuff",
        "applies_to": "Both",
        "description": "Players suffering from Blindness are unable to read any Auras, including the default ones of their role and those from Perks. Some essential Auras are exempt from that general rule, usually associated with Killer Power Objects. Additionally, Aura-like highlights, that resemble Auras, but are not actually considered Auras by the game (i.e. the white highlights on Scourge Hooks or on Survivors during Nightfall), are not affected by Blindness.",
        "icon": "https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/ea/FulliconStatusEffects_blindness.png/revision/latest?cb=20210212000619",
        "__v": 0
    }
```

`/status_effects/status_effect_id`

Getting a status effect by its status_effect_id ("_id" or "id", found in "associated_status_effects" everywhere else) returns a specific status effect with no additional details.

`/status_effects/buffs`

Making a call to https://deadbydaylight-api.onrender.com/status_effects/buffs returns all status effects that are buffs.

`/status_effects/debuffs`

Making a call to https://deadbydaylight-api.onrender.com/status_effects/debuffs returns all status effects that are debuffs.

`/survivor/status_effects`

Making a call to https://deadbydaylight-api.onrender.com/survivor/status_effects returns all status effects that can be applied to survivors in game.

`/survivor/status_effects/buffs`

Making a call to https://deadbydaylight-api.onrender.com/survivor/status_effects/buffs returns all status effects that are buffs and can be applied to survivors in game.

`/survivor/status_effects/debuffs`

Making a call to https://deadbydaylight-api.onrender.com/survivor/status_effects/debuffs returns all status effects that are debuffs and can be applied to survivors in game.

`/killer/status_effects`

Making a call to https://deadbydaylight-api.onrender.com/killer/status_effects returns all status effects that can be applied to killers in game.

`/killer/status_effects/buffs`

Making a call to https://deadbydaylight-api.onrender.com/killer/status_effects/buffs returns all status effects that are buffs and can be applied to killers in game.

`/killer/status_effects/debuffs`

Making a call to https://deadbydaylight-api.onrender.com/killer/status_effects/debuffs returns all status effects that are debuffs and can be applied to killers in game.