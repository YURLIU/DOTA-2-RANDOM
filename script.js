window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.classList.add("hide");

        }, 3000);

    }

});




const heroes = [

    "Abaddon",
    "Axe",
    "Bane",
    "Batrider",
    "Beastmaster",
    "Bloodseeker",
    "Bounty Hunter",
    "Brewmaster",
    "Bristleback",
    "Broodmother",
    "Centaur Warrunner",
    "Chaos Knight",
    "Clockwerk",
    "Crystal Maiden",
    "Dazzle",
    "Drow Ranger",
    "Earthshaker",
    "Ember Spirit",
    "Faceless Void",
    "Gyrocopter",
    "Huskar",
    "Invoker",
    "Jakiro",
    "Juggernaut",
    "Keeper of the Light",
    "Kunkka",
    "Lina",
    "Lion",
    "Luna",
    "Lich",
    "Magnus",
    "Marci",
    "Medusa",
    "Mirana",
    "Monkey King",
    "Morphling",
    "Naga Siren",
    "Nature's Prophet",
    "Necrophos",
    "Night Stalker",
    "Ogre Magi",
    "Omniknight",
    "Oracle",
    "Outworld Destroyer",
    "Phantom Assassin",
    "Phantom Lancer",
    "Puck",
    "Pudge",
    "Pugna",
    "Queen of Pain",
    "Razor",
    "Riki",
    "Rubick",
    "Sand King",
    "Shadow Fiend",
    "Shadow Shaman",
    "Silencer",
    "Sniper",
    "Spectre",
    "Spirit Breaker",
    "Storm Spirit",
    "Sven",
    "Templar Assassin",
    "Tidehunter",
    "Timbersaw",
    "Tiny",
    "Treant Protector",
    "Troll Warlord",
    "Tusk",
    "Underlord",
    "Undying",
    "Ursa",
    "Vengeful Spirit",
    "Viper",
    "Visage",
    "Void Spirit",
    "Warlock",
    "Weaver",
    "Windranger",
    "Winter Wyvern",
    "Witch Doctor",
    "Wraith King",
    "Zeus"

];




const items = [

    "Blink Dagger",
    "Black King Bar",
    "Butterfly",
    "Daedalus",
    "Divine Rapier",
    "Satanic",
    "Manta Style",
    "Aghanim's Scepter",
    "Aghanim's Shard",
    "Desolator",
    "Assault Cuirass",
    "Moon Shard",
    "Heart of Tarrasque",
    "Radiance",
    "Butterfly",
    "Bloodthorn",
    "Skadi",
    "Mjollnir",
    "Hurricane Pike",
    "Linken's Sphere",
    "Octarine Core",
    "Refresher Orb",
    "Shiva's Guard",
    "Pipe of Insight",
    "Crimson Guard",
    "Guardian Greaves",
    "Force Staff",
    "Glimmer Cape",
    "Eul's Scepter",
    "Ghost Scepter",
    "Kaya",
    "Sange",
    "Yasha",
    "Sange and Yasha",
    "Kaya and Sange",
    "Maelstrom",
    "Battle Fury",
    "Mask of Madness",
    "Armlet of Mordiggian",
    "Echo Sabre",
    "Harpoon",
    "Diffusal Blade",
    "Phylactery",
    "Butterfly",
    "Dagon",
    "Nullifier",
    "Silver Edge",
    "Shadow Blade",
    "Heaven's Halberd",
    "Lotus Orb",
    "Aeon Disk",
    "Aether Lens",
    "Veil of Discord",
    "Vladmir's Offering",
    "Mekansm",
    "Solar Crest",
    "Boots of Travel",
    "Power Treads",
    "Phase Boots",
    "Arcane Boots"

];




function getRandom(array) {

    const randomIndex = Math.floor(
        Math.random() * array.length
    );

    return array[randomIndex];

}




function generateRandom() {

    const heroElement = document.getElementById("hero-name");

    if (!heroElement) {
        return;
    }


   

    const randomHero = getRandom(heroes);

    heroElement.textContent = randomHero;


   

    const availableItems = [...items];


    

    for (let i = 1; i <= 6; i++) {

        const itemElement =
            document.getElementById("item" + i);

        const randomIndex =
            Math.floor(
                Math.random() * availableItems.length
            );

        const randomItem =
            availableItems[randomIndex];


        itemElement.textContent = randomItem;


       

        availableItems.splice(randomIndex, 1);

    }

}
