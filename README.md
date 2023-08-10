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
`/killers/killer_id`

In the above example, we can see that The Doctor's killer_id ("_id" or "id", referred to as "killer_id" on all associated objects) is 64c460a03b6c0963934100d3. By calling http://localhost:3000/killers/64c460a03b6c0963934100d3, the following killer object will be returned:

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

`/killers/query?killer_name=killer_name`

While there aren't really any outlier names with killers (yet?), the same guidelines as the survivor_name query still apply and getting a killer by ID is always the more dependable and easier route. However, you can totally make the following query: http://localhost:3000/killers/query?killer_name=The-Doctor and get exactly the same killer object returned as above.

## Perk Routes

`/perks`

Calling http://localhost:3000/perks will return ALL perks in the game, agnostic to their role ("Killer" or "Survivor") or whether they're generic or unique ("Hope" vs. "Made For This").

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

While getting a perk by its unique perk_id ("_id" or "id", referred to as either "perk_one_id", "perk_two_id", or "perk_three_id" on associated killer or survivor objects) doesn't return a ton more information than getting all perks, it does specify what the other two perks are that belong to that character (if generic is **false**, of course). Calling http://localhost:3000/perks/64cc140d875261f22dea22ec, for example, returns the following:

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

Calling http://localhost:3000/perks/survivor will return all perks where the "role" is set to "Survivor".

`/perks/survivor/generic`

Calling http://localhost:3000/perks/survivor/generic will return all perks where the "role" is set to "Survivor" and "generic" is set to **true**.

`/perks/killer`

Calling http://localhost:3000/perks/killer will return all perks where the "role" is set to "Killer".

`/perks/killer/generic`

Calling http://localhost:3000/perks/killer/generic will return all perks where the "role" is set to "Killer" and "generic" is set to **true**.

`/character_id/perks`

We can also make a call based on a "character_id" (being either a "survivor_id" **or** a "killer_id"), and the three perks that belong to that specific character will be returned. For example, knowing that Meg's "character_id" (again, this is just Meg's "_id") is 64caeae5da2e1eb56296d8d9, if we make a call to http://localhost:3000/64caeae5da2e1eb56296d8d9/perks, the following perks will be returned:
  - "Quick & Quiet"
  - "Sprint Burst"
  - "Adrenaline"

### Querying Perks

`/perks/query?character_name=`

Here, like getting perks based on a "character_id", you can get the three perks that belong to either a survivor or killer based on their "character_name" ("name" for survivor and "killer_name" for killer). The same guidelines from survivor/killer name queries apply here, and the recommended approach is definitely to get perks by a character's unique ID, but if you wish to query perks this way, here are a couple examples:

http://localhost:3000/perks/query?character_name=Ashley-Joanna-'Ash'-Williams

http://localhost:3000/perks/query?character_name=The-Wraith

`/perks/query?perk_name=`

While getting a perk by its ID is the recommended approach, you can also `GET` a specific perk based on its name as well. http://localhost:3000/perks/query?perk_name=We're-Gonna-Live-Forever, for example,  will return David King's perk of the same name, also displaying David's other two perks.

`/perks/query?type=`
                // ?type=perk_type
                // supports 'hex', 'boon', 'scourge', and 'teamwork'
                // returns all perks of that type

`/perks/query?status_effect=`
                // ?status_effect=status_effect_name
                // will return perks associated with this status effect

`/perks/query?status_effect=status_effect_name&role=role`
                // ?status_effect=status_effect_name&role=role ('killer' or 'survivor')
                // will return role specific perks associated with this status effect





