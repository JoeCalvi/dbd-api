# Introduction

Hello, fellow traverser of the fog! 

I couldn't find a reliable, up-to-date Dead By Daylight API and needed a project to work on, so I bring this offering. My goal was for this API to be a robust wealth of Dead By Daylight data for other developers to utilize in their own endeavors. This API is built with NodeJS and Express, using MongoDB as a database.

This API only supports `GET` requests, as it is meant to be a tool to provide access to Dead By Daylight data in order to build things like random loadout generators, etc. Below, I will do my best to explain in detail how each of the routes work to make this API an easy tool for people to use. I will do my best to update data as it is adjusted per update, but alas, I am human and may miss some things. That being said, some TODOs still include: items, offerings, and add-ons. 

If you don't find the answer to your question below, or if you have any comments, feedback, or just want to share something you built while using this API, please feel free to reach out to me [here](https://joecalvi.dev). All rights to any and all of this information belong to [Behaviour Interactive](https://www.bhvr.com/), and I do not claim to be the author of any of it. Thank you for stopping by and good luck in your next one!

## Survivor Routes

`/survivors`

By calling http://localhost:3000/survivors, you will get ALL survivors.
These survivor objects have slightly less detail than getting an individual survivor by their ID or name. 

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

`/survivors/query?survivor_name=name`



`/survivors/survivor_id`
