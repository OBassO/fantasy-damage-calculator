function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

const baseSkillDamageTable = {
    100: 39117,
    101: 39901,
    102: 40693,
    103: 41492,
    104: 42299,
    105: 43115,
    106: 43937,
    107: 44768,
    108: 45607,
    109: 46453,
    110: 47307,
    111: 48169,
    112: 49039,
    113: 49916,
    114: 50801,
    115: 51695,
    116: 52595,
    117: 53504,
    118: 54421,
    119: 55345,
    120: 56277,
    121: 57217,
    122: 58165,
    123: 59120,
    124: 60083,
    125: 61055,
    126: 62033,
    127: 63020,
    128: 64015,
    129: 65017,
    130: 66027,
    131: 67045,
    132: 68071,
    133: 69104,
    134: 70145,
    135: 71195,
    136: 72251,
    137: 73316,
    138: 74389,
    139: 75469,
    140: 76557,
    141: 77653,
    142: 78757,
    143: 79868,
    144: 80987,
    145: 82115,
    146: 83249,
    147: 84392,
    148: 85543,
    149: 86701,
    150: 87867
};

const dungeonDebuffTable = {
    //塔II 1-3F
    dungeon1: {
        damageLimit: 100,
        attributeDamageLimit: 100,
        toAttributeLimit: 50,
        defense: 0,
        attributeResistance: 50,
        criticalResistance: 50,
        TrinityResistance: 20,
        finalDamageReduction: 97,
        specialDamageReduction: 60
    },

    //塔II 4-7F
    dungeon111: {
        damageLimit: 100,
        attributeDamageLimit: 100,
        toAttributeLimit: 50,
        defense: 0,
        attributeResistance: 50,
        criticalResistance: 50,
        TrinityResistance: 30,
        finalDamageReduction: 97,
        specialDamageReduction: 60
    },

    //塔I 12F
    dungeon2: {
        damageLimit: 230,
        attributeDamageLimit: 130,
        toAttributeLimit: 0,
        defense: 0,
        attributeResistance: 180,
        criticalResistance: 150,
        TrinityResistance: 0,
        finalDamageReduction: 95,
        specialDamageReduction: 65
    },

    //共鬥
    dungeon222: {
        damageLimit: 230,
        attributeDamageLimit: 150,
        toAttributeLimit: 100,
        defense: 0,
        attributeResistance: 150,
        criticalResistance: 250,
        TrinityResistance: 10,
        finalDamageReduction: 80,
        specialDamageReduction: 50
    },

    //夢魘
    dungeon3: {
        damageLimit: 290,
        attributeDamageLimit: 250,
        toAttributeLimit: 150,
        defense: 0,
        attributeResistance: 200,
        criticalResistance: 300,
        TrinityResistance: 70,
        finalDamageReduction: 90,
        specialDamageReduction: 60
    },

    //始原
    dungeon4: {
        damageLimit: 270,
        attributeDamageLimit: 200,
        toAttributeLimit: 30,
        defense: 0,
        attributeResistance: 110,
        criticalResistance: 220,
        TrinityResistance: 25,
        finalDamageReduction: 99,
        specialDamageReduction: 0
    },
    
    //巨岩
    dungeon5: {
        damageLimit: 255,
        attributeDamageLimit: 200,
        toAttributeLimit: 0,
        defense: 0,
        attributeResistance: 100,
        criticalResistance: 200,
        TrinityResistance: 20,
        finalDamageReduction: 99,
        specialDamageReduction: 0
    },

    //冰龍
    dungeon6: {
        damageLimit: 235,
        attributeDamageLimit: 150,
        toAttributeLimit: 0,
        defense: 0,
        attributeResistance: 80,
        criticalResistance: 150,
        TrinityResistance: 0,
        finalDamageReduction: 99,
        specialDamageReduction: 0
    },

    //雷冥
    dungeon7: {
        damageLimit: 180,
        attributeDamageLimit: 100,
        toAttributeLimit: 0,
        defense: 0,
        attributeResistance: 0,
        criticalResistance: 100,
        TrinityResistance: 0,
        finalDamageReduction: 93,
        specialDamageReduction: 0
    },

    //暴風
    dungeon8: {
        damageLimit: 140,
        attributeDamageLimit: 0,
        toAttributeLimit: 0,
        defense: 0,
        attributeResistance: 0,
        criticalResistance: 90,
        TrinityResistance: 0,
        finalDamageReduction: 88,
        specialDamageReduction: 0
    },

    //火領
    dungeon9: {
        damageLimit: 145,
        attributeDamageLimit: 0,
        toAttributeLimit: 0,
        defense: 75,
        attributeResistance: 0,
        criticalResistance: 90,
        TrinityResistance: 0,
        finalDamageReduction: 88,
        specialDamageReduction: 0
    },

    //風龍
    dungeon10: {
        damageLimit: 97,
        attributeDamageLimit: 0,
        toAttributeLimit: 0,
        defense: 75,
        attributeResistance: 50,
        criticalResistance: 50,
        TrinityResistance: 0,
        finalDamageReduction: 90,
        specialDamageReduction: 0
    },

    //水龍
    dungeon11: {
        damageLimit: 115,
        attributeDamageLimit: 0,
        toAttributeLimit: 0,
        defense: 75,
        attributeResistance: 0,
        criticalResistance: 90,
        TrinityResistance: 0,
        finalDamageReduction: 80,
        specialDamageReduction: 0
    },

    //雷龍
    dungeon12: {
        damageLimit: 97,
        attributeDamageLimit: 0,
        toAttributeLimit: 0,
        defense: 75,
        attributeResistance: 50,
        criticalResistance: 50,
        TrinityResistance: 0,
        finalDamageReduction: 90,
        specialDamageReduction: 0
    },

    //書8F
    dungeon122: {
        damageLimit: 275,
        attributeDamageLimit: 180,
        toAttributeLimit: 140,
        defense: 0,
        attributeResistance: 170,
        criticalResistance: 230,
        TrinityResistance: 0,
        finalDamageReduction: 99,
        specialDamageReduction: 50
    },

    //書7F
    dungeon13: {
        damageLimit: 275,
        attributeDamageLimit: 170,
        toAttributeLimit: 130,
        defense: 0,
        attributeResistance: 160,
        criticalResistance: 220,
        TrinityResistance: 0,
        finalDamageReduction: 99,
        specialDamageReduction: 50
    },

    //書6F
    dungeon14: {
        damageLimit: 265,
        attributeDamageLimit: 160,
        toAttributeLimit: 120,
        defense: 0,
        attributeResistance: 150,
        criticalResistance: 220,
        TrinityResistance: 0,
        finalDamageReduction: 99,
        specialDamageReduction: 50
    },

    //書5F
    dungeon15: {
        damageLimit: 255,
        attributeDamageLimit: 150,
        toAttributeLimit: 100,
        defense: 0,
        attributeResistance: 150,
        criticalResistance: 200,
        TrinityResistance: 0,
        finalDamageReduction: 99,
        specialDamageReduction: 50
    },

    //書4F
    dungeon16: {
        damageLimit: 235,
        attributeDamageLimit: 130,
        toAttributeLimit: 70,
        defense: 0,
        attributeResistance: 150,
        criticalResistance: 150,
        TrinityResistance: 0,
        finalDamageReduction: 95,
        specialDamageReduction: 50
    },

    //書3F
    dungeon17: {
        damageLimit: 180,
        attributeDamageLimit: 90,
        toAttributeLimit: 30,
        defense: 0,
        attributeResistance: 150,
        criticalResistance: 130,
        TrinityResistance: 0,
        finalDamageReduction: 88,
        specialDamageReduction: 50
    },

    //書2F
    dungeon18: {
        damageLimit: 135,
        attributeDamageLimit: 70,
        toAttributeLimit: 0,
        defense: 0,
        attributeResistance: 150,
        criticalResistance: 100,
        TrinityResistance: 0,
        finalDamageReduction: 83,
        specialDamageReduction: 50
    },

    //書1F
    dungeon19: {
        damageLimit: 130,
        attributeDamageLimit: 60,
        toAttributeLimit: 0,
        defense: 76,
        attributeResistance: 150,
        criticalResistance: 100,
        TrinityResistance: 0,
        finalDamageReduction: 80,
        specialDamageReduction: 50
    },

    //S10
    dungeon20: {
        damageLimit: 200,
        attributeDamageLimit: 130,
        toAttributeLimit: 0,
        defense: 0,
        attributeResistance: 150,
        criticalResistance: 130,
        TrinityResistance: 0,
        finalDamageReduction: 95,
        specialDamageReduction: 10
    },

    //S5
    dungeon21: {
        damageLimit: 200,
        attributeDamageLimit: 130,
        toAttributeLimit: 0,
        defense: 0,
        attributeResistance: 150,
        criticalResistance: 130,
        TrinityResistance: 0,
        finalDamageReduction: 95,
        specialDamageReduction: 10
    },

    //S1
    dungeon22: {
        damageLimit: 170,
        attributeDamageLimit: 110,
        toAttributeLimit: 0,
        defense: 0,
        attributeResistance: 150,
        criticalResistance: 100,
        TrinityResistance: 0,
        finalDamageReduction: 90,
        specialDamageReduction: 0
    },

    //S1聖殿
    dungeon23: {
        damageLimit: 115,
        attributeDamageLimit: 90,
        toAttributeLimit: 0,
        defense: 0,
        attributeResistance: 130,
        criticalResistance: 50,
        TrinityResistance: 0,
        finalDamageReduction: 90,
        specialDamageReduction: 0
    },

    //覺醒
    dungeon24: {
        damageLimit: 109,
        attributeDamageLimit: 80,
        toAttributeLimit: 0,
        defense: 75,
        attributeResistance: 120,
        criticalResistance: 100,
        TrinityResistance: 0,
        finalDamageReduction: 80,
        specialDamageReduction: 0
    },

    //夢魘木頭
    dungeon25: {
        damageLimit: 255,
        attributeDamageLimit: 175,
        toAttributeLimit: 70,
        defense: 0,
        attributeResistance: 180,
        criticalResistance: 240,
        TrinityResistance: 22.5,
        finalDamageReduction: 90,
        specialDamageReduction: 55
    },
};

function getPenetration() {

    let penetration = Number(
        document.getElementById("penetration").value
    );

    penetration = clamp(penetration,-60,80);

    document.getElementById("penetration").value = penetration;

    const realPenetration = penetration / 100;
    return realPenetration;
}

function getskillRate() {

    const skillLevel = Number(
        document.getElementById("skillLevel").value
    );
    
    const skillDamage = Number(
        document.getElementById("skillDamage").value
    );

    const power = Number(
        document.getElementById("power").value
    );

    const baseSkillDamage =
            baseSkillDamageTable[skillLevel];

    const skillRate = Math.round(100 * skillDamage / (baseSkillDamage + power));

    document.getElementById("skillRate").value = skillRate;
    return skillRate;
}    

function updateDungeonDebuff() {

    const dungeon =
        document.getElementById("dungeon").value;

    const debuff =
        dungeonDebuffTable[dungeon];

    if (!debuff) {
        document.getElementById("dungeonDebuff").textContent = "";
        return;
    }

    document.getElementById("damageLimit").textContent = debuff.damageLimit;
    document.getElementById("attributeDamageLimit").textContent = debuff.attributeDamageLimit;
    document.getElementById("toAttributeLimit").textContent = debuff.toAttributeLimit;
    document.getElementById("attributeResistance").textContent = debuff.attributeResistance;
    document.getElementById("criticalResistance").textContent = debuff.criticalResistance;
    document.getElementById("finalDamageReduction").textContent = debuff.finalDamageReduction;
    document.getElementById("specialDamageReduction").textContent = debuff.specialDamageReduction;  
}

function calculateDamage() {

    const power = Number(
        document.getElementById("power").value
    );
    const attributeDamage = Number(
        document.getElementById("attributeDamage").value
    );
    const mainWeaponDamage = Number(
        document.getElementById("mainWeaponDamage").value
    );
    const classDamage = Number(
        document.getElementById("classDamage").value
    );
    const skillLevel = Number(
        document.getElementById("skillLevel").value
    ); 
    const bonusSkillrate = Number(
        document.getElementById("bonusSkillrate").value
    );
    const toAttributeDamage = Number(
        document.getElementById("toAttributeDamage").value
    );
    const damageBonus = Number(
        document.getElementById("damageBonus").value
    );
    const bossDamageBonus = Number(
        document.getElementById("bossDamageBonus").value
    );
    const criticalDamage = Number(
        document.getElementById("criticalDamage").value
    );
    const bossCriticalDamage = Number(
        document.getElementById("bossCriticalDamage").value
    );
    const TrinityDamage = Number(
        document.getElementById("TrinityDamage").value
    );


    const realPenetration = getPenetration();

    const baseSkillDamage = baseSkillDamageTable[skillLevel];

    const skillRate = getskillRate();


    const dungeon =document.getElementById("dungeon").value;

    const debuff = dungeonDebuffTable[dungeon];

    const attributeDamageLimit = debuff.attributeDamageLimit;

    const toAttributeLimit = debuff.toAttributeLimit;

    const damageLimit = debuff.damageLimit;

    const defense = debuff.defense;

    const attributeResistance = debuff.attributeResistance;

    const criticalResistance = debuff.criticalResistance;

    const TrinityResistance = debuff.TrinityResistance;

    const finalDamageReduction = debuff.finalDamageReduction;

    const specialDamageReduction = debuff.specialDamageReduction;


    const realAttributeDamage = Math.min(attributeDamage - attributeDamageLimit,300);

    const realtoAttributeLimit = Math.min(toAttributeDamage - toAttributeLimit,300);

    const realmainWeaponDamage = Math.min(classDamage + mainWeaponDamage,300);

    const realcriticalDamage = Math.max(130 + bossCriticalDamage + criticalDamage - criticalResistance,0);

    const realdamageBonus = Math.max(100 + damageBonus + bossDamageBonus - damageLimit,0);


    const weaponAttribute =
        document.getElementById("weaponAttribute").checked
            ? 20
            : 0;

    const enemyAttribute =
        document.getElementById("enemyAttribute").checked
            ? 25
            : 0;

    document.getElementById("result").textContent = Math.round((baseSkillDamage * skillRate / 100) + power * Math.max((( skillRate
                                                                                                                       + bonusSkillrate
                                                                                                                       + realAttributeDamage                                                
                                                                                                                       + realmainWeaponDamage
                                                                                                                       + realtoAttributeLimit
                                                                                                                       + weaponAttribute
                                                                                                                       - defense
                                                                                                                       - attributeResistance
                                                                                                                       - enemyAttribute
                                                                                                                       )/100),0)
                                                                                                           * realcriticalDamage/100
                                                                                                           * (1 + realPenetration)
                                                                                                           * realdamageBonus/100
                                                                                                           * (TrinityDamage - TrinityResistance)/100
                                                                                                           * (1 - finalDamageReduction/100)
                                                                                                           * (1 - specialDamageReduction/100));

}