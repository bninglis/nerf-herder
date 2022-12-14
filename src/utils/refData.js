const heritages = [
    {
        id: "1e8dbfa5-2124-489a-846d-1fd520c0e1f0",
        heritage: "imperial",
        description:
            "Those with imperial heritage hail from Warren or the Core worlds. You were brought up educated in ways of The Hegemony, through a Guild vocational education, Cult teachings, or Noble family tutors.",
    },
    {
        id: "f950f30c-4a7a-47a3-8944-413be401d9af",
        heritage: "spacer",
        description:
            "If you’d rather be more at home on a creaking ship, you could be from a spacer family. Ice miners, station mechanics, and most merchants are born, grow old, and die in space—and may or may not view your terrestrial ventures with suspicion.",
    },
    {
        id: "c68a9712-79c6-446b-b30a-ca1985eacd62",
        heritage: "colonist",
        description:
            "The exact opposite are colonist families. Farmers, miners, and terraformers form the backbone of the Hegemony. Fighting for a living on the borders of planets, these folks deal with alien beasts and odd Precursor ruins more than most.",
    },
    {
        id: "49c341b5-2a15-455c-b6cf-fb8e71f0bf84",
        heritage: "manufactured",
        description:
            "Manufactured “families” are fundamentally controlled in some way by the Guilds—for example, a Yaru clone who’s escaped from a facility or a Urbot that’s avoided routine memory wipes. You may often have to hide your origin and independence.",
    },
    {
        id: "4bf4ab75-b4d4-4475-9467-1cfdaac4dc85",
        heritage: "wanderer",
        description:
            "If you want to be without a planet to call home, you could be from a wanderer heritage. A small but notable portion of The Hegemony move from planet to planet, as opportunities emerge and galactic economic cycles shift. Or just follow where The Way takes you.",
    },
    {
        id: "70d96cd6-a280-44d6-8d7b-47b079015b36",
        heritage: "xeno",
        description:
            "Xeno families are as diverse as the countless kinds of xenos in the galaxy. You were raised in a non-human culture. Xenos struggle to find acceptance in The Hegemony, and many of their practices are seen as strange or unusual.",
    },
];
const backgrounds = [
    {
        id: "0ad31b2c-ac6e-423c-8bc9-07c453ad57da",
        background: "Academic",
        description: "A professor, student, researcher, or other knowledge-driven vocation.",
    },
    {
        id: "2a388aee-e449-4dfd-8787-4f5558f06ab7",
        background: "Labor",
        description:
            "A factory worker, driver, dockhand, miner, or other tradesperson. The majority of The Hegemony is of this background.",
    },
    {
        id: "2d530e5f-3bf8-4471-a5cb-2eedcbb22c5e",
        background: "Cult",
        description:
            "Part of a Cult, officially sanctioned or not. A holy warrior, priest, or religious devotee.",
    },
    {
        id: "e4c7879c-c6a5-47ea-95ba-bc6e528038c7",
        background: "Guilder",
        description:
            "Involved in the of machinations of a Guild, such as a ship designer, financial analyst, or logistics officer.",
    },
    {
        id: "e5a37b1e-0861-4bc7-aff7-bafe596c13d8",
        background: "Military",
        description:
            "A Hegemonic soldier, mercenary, intelligence operative, strategist, training instructor, etc.",
    },
    {
        id: "5d8f4a11-addd-412d-aa1f-9aed59541c89",
        background: "Noble",
        description:
            "Living the life of luxury, such as a dilettante, someone caught up in House politics, etc.",
    },
    {
        id: "8e640997-779e-49ae-9975-1272fd809084",
        background: "Syndicate",
        description:
            "Part of an organized criminal gang, from the lowest lookout to ousted former crime lord.",
    },
];
const vices = [
    {
        id: "d109c67c-46d9-47d5-adbd-72a69d4b0138",
        vice: "Faith",
        description: "You’re part of a Cult, or observe specific ceremonies at regular intervals.",
    },
    {
        id: "b81e2316-d0c4-4904-be1e-f518ce6ba806",
        vice: "Gambling",
        description: "You crave games of chance, or bet on sporting events, etc.",
    },
    {
        id: "30543565-bf6b-4eb7-a754-4730583c304b",
        vice: "Luxury",
        description: "You seek the high life with expensive, ostentatious displays of wealth.",
    },
    {
        id: "c7b0d8b0-63ed-4e87-a4da-8c322482ba17",
        vice: "Obligation",
        description: "You’re devoted to a family, cause, organization, charity, etc.",
    },
    {
        id: "ed60f373-3f7f-4f2c-b876-0ea17d6792a5",
        vice: "Pleasure",
        description: "You seek hedonistic gratification from lovers, food, drink, drugs, art, etc.",
    },
    {
        id: "3c74ab6d-608e-4f75-a03e-b1e78ef10a57",
        vice: "Stupor",
        description:
            "You dull the senses with drug abuse, excessive drinking, fighting to exhaustion, etc.",
    },
    {
        id: "6e2a4482-7926-4b67-9ab0-638df8952ea1",
        vice: "Weird",
        description:
            "You perform strange experiments, explore The Way, commune with Ur Artifacts, and so on.",
    },
];
const signature = [
    {
        id: "b145646d-72ab-4f2c-83b4-050fdced16de",
        item: "Ornate Headdress",
    },
    {
        id: "f119309f-a97e-4672-9785-afd68b01dcdf",
        item: "Long Coat",
    },
    {
        id: "7e8cda24-9877-4a15-b861-9d3102480b6a",
        item: "Hood and Veil",
    },
    {
        id: "8aa7388e-7dfa-4b0b-8d20-944126d7e198",
        item: "Short Cloak",
    },
    {
        id: "cf56ed9f-e0a3-425b-b843-70d87840a71c",
        item: "Knit Cap",
    },
    {
        id: "24f48cd3-11bd-40c0-8e85-bf7cf2a599dc",
        item: "Fancy Makeup",
    },
    {
        id: "7e00eaa4-2e91-4348-bf15-71148f0b4f2b",
        item: "Slim Jacket",
    },
    {
        id: "7612f1a8-5932-41a0-a84f-b85cb15781d8",
        item: "Hooded Cloak",
    },
    {
        id: "f560ac4d-4925-4c55-beb7-ccfe1d7aff4a",
        item: "Work Boots",
    },
    {
        id: "dd720b88-6841-4693-a45f-54d43e9c6c6a",
        item: "Mask and Robe",
    },
    {
        id: "32a776b5-08f9-4695-b8ba-f5df785fdca6",
        item: "Suit and Vest",
    },
    {
        id: "12afb950-f1f4-41e9-a4d8-3ac8a7c87a13",
        item: "Collared Shirt",
    },
    {
        id: "c5a2fe20-dcac-41df-82ff-2df886175220",
        item: "Suspenders",
    },
    {
        id: "9ba9a285-df7d-48b8-bc44-d6cd0e063c11",
        item: "Intricate Rings",
    },
    {
        id: "d7ccf7ef-b40e-4d6f-801c-d31dffb0b80a",
        item: "Skirt and Blouse",
    },
    {
        id: "5bbc7603-a010-472b-a8fe-f8ef9d053ca7",
        item: "Wide Belt",
    },
    {
        id: "7b36744a-7081-4e62-9092-fc7c82aa2f0d",
        item: "Fitted Dress",
    },
    {
        id: "a304c282-b691-49ed-a93e-94536488f97d",
        item: "Flight Suit",
    },
    {
        id: "b7da3557-863c-4074-b5a1-89ae0d076beb",
        item: "Heavy Cloak",
    },
    {
        id: "5575a1d4-a5d3-48e6-9582-87e62750962d",
        item: "Thick Duster",
    },
    {
        id: "165394b2-7a14-4566-98c3-4ac7b6558fd2",
        item: "Loose Silks",
    },
    {
        id: "24711ed5-4283-4805-94d3-2d1b8aa3ddb4",
        item: "Tight Pants",
    },
    {
        id: "c3d00059-c54a-46dc-97f0-729b4cb39f92",
        item: "Bomber Jacket",
    },
    {
        id: "c6e2f0f5-d4bf-40ff-b2a4-7ef3ac99bd0a",
        item: "Long Scarf",
    },
    {
        id: "3eef1bb0-59d5-4230-95e9-da96ce30c1f4",
        item: "Leathers",
    },
    {
        id: "775d6437-b0cc-4d9e-897d-288fedc0ff27",
        item: "Stillsuit",
    },
    {
        id: "2a02335b-9609-4808-b69f-a3d4db630a84",
        item: "Hides and Furs",
    },
    {
        id: "ebb9c428-d572-47a3-9036-33b4d6581f33",
        item: "Worn Uniform",
    },
    {
        id: "7aa47273-443e-48cd-b144-8ba4ab47e683",
        item: "Space Suit",
    },
    {
        id: "4ed3463d-2273-449a-951e-33a8294355ed",
        item: "Glittering Jewelry",
    },
];
const aliases = [
    {
        id: "986102b6-e30c-4648-b3ca-492220a5f1b9",
        alias: "Ace",
    },
    {
        id: "ca5bb4be-f68b-4a01-8835-1e9adac20600",
        alias: "Agony",
    },
    {
        id: "98a7b2ca-1553-4c3d-a1a5-638d71fdc775",
        alias: "Apex",
    },
    {
        id: "10d135b9-8db5-4375-b40f-ff7fb60f8957",
        alias: "Athena",
    },
    {
        id: "ae443627-20f0-47d9-87b9-6d12efa9b7bd",
        alias: "Badger",
    },
    {
        id: "46c4c2bb-c8f7-40dc-b898-466315ae8f6a",
        alias: "Bingo",
    },
    {
        id: "626912ab-3868-435a-bef3-7cc9aedef822",
        alias: "Black",
    },
    {
        id: "95436dda-7aac-4b77-a072-4bf97b3f7f93",
        alias: "Bolt",
    },
    {
        id: "5a326194-3d8a-4000-a864-a8ca9e9dfeb7",
        alias: "Brakes",
    },
    {
        id: "4ff184d5-184b-4083-b57b-40ba241dd9b5",
        alias: "Carrot",
    },
    {
        id: "6272678e-910c-4f8c-a696-ea39c412585b",
        alias: "Cash",
    },
    {
        id: "20093b4a-9d12-4aca-abca-1545e4b9eb8b",
        alias: "Cosmo",
    },
    {
        id: "0c81ab1b-772c-46f4-949e-8be5ea68d46f",
        alias: "Dash",
    },
    {
        id: "ff5db15b-32cf-4214-87ba-525c8f5567d0",
        alias: "Devil",
    },
    {
        id: "e9e3e9c0-dc77-4039-b311-3aa2d0abd35c",
        alias: "Dipper",
    },
    {
        id: "858b7a0c-1980-4cd9-b920-8e7ce14dbb69",
        alias: "Echo",
    },
    {
        id: "7126c6a4-dcd3-4e12-8e98-ac51b8a5861a",
        alias: "Eight",
    },
    {
        id: "b2a7af85-757d-4a09-96e2-4e4e1ac9248c",
        alias: "Elbows",
    },
    {
        id: "ef36ec50-339e-40fe-9501-e89d2b606ffa",
        alias: "Falcon",
    },
    {
        id: "fb6905b6-5873-4bbd-adae-fbc7d8da59eb",
        alias: "Fireball",
    },
    {
        id: "ebdc7bea-caf4-4a38-b8c0-88484086eb0e",
        alias: "Flex",
    },
    {
        id: "19a9c5ef-9a10-4783-81f4-d4ed27ccc5c1",
        alias: "Game",
    },
    {
        id: "c8874c2b-7da8-4d48-a251-944412d840a2",
        alias: "Gargoyle",
    },
    {
        id: "9c959d7a-5ab9-4b25-bd1a-4bab3e2b9a9a",
        alias: "Gear",
    },
    {
        id: "490c97cb-a005-4e78-ae8d-496abca9d3b5",
        alias: "Gonzo",
    },
    {
        id: "c745fe0f-841f-446b-9a77-87bd7e84ff3c",
        alias: "Guns",
    },
    {
        id: "e1a23309-9dd5-452a-a54c-0a0e4d5ac65a",
        alias: "Hammer",
    },
    {
        id: "34b5c1dd-aa87-452b-a370-9531445b2948",
        alias: "Headhunter",
    },
    {
        id: "37b97220-44b2-4642-bd2a-3065bf192aae",
        alias: "Helo",
    },
    {
        id: "cb59f56a-ed00-4116-85b8-8a455676e0f5",
        alias: "Hex",
    },
    {
        id: "db702024-d588-40de-9be3-845c10d0ce25",
        alias: "Highball",
    },
    {
        id: "ed94183e-1e7b-4782-86a8-6d0cf9043332",
        alias: "Hyper",
    },
    {
        id: "5bcb934c-41bb-4790-8ec5-369707f1a0f8",
        alias: "Intake",
    },
    {
        id: "355b49fc-5af4-4798-bfce-3b08e804e770",
        alias: "Iris",
    },
    {
        id: "3ffd5b70-0694-4eb5-ae65-5bac03a085da",
        alias: "Iron",
    },
    {
        id: "edb954c1-0ec6-4bb2-bb49-047b5911dcb1",
        alias: "Juggler",
    },
    {
        id: "24a26342-578d-4869-b687-b07bb6e1e969",
        alias: "Juice",
    },
    {
        id: "18bfc83e-3e1f-4ba9-a0ea-98bd7d5f24f6",
        alias: "Junior",
    },
    {
        id: "94a9b3f6-7339-46ea-80a0-a2c38a3bf203",
        alias: "Karma",
    },
    {
        id: "e97de4be-7085-45f6-b00b-8ade54bb6e3c",
        alias: "Lasher",
    },
    {
        id: "86f7b148-f949-4aa8-a17c-0101f8bd1d0f",
        alias: "Legend",
    },
    {
        id: "615dc862-6bd0-422d-99b6-7e66dbbbce04",
        alias: "Link",
    },
    {
        id: "e1644842-b185-4eae-8845-0c9a29fb7b32",
        alias: "Loco",
    },
    {
        id: "8d98d26f-9d5e-4cbc-bb80-10744c8fd532",
        alias: "Mooch",
    },
    {
        id: "acfc8fb2-2ffa-4c41-9617-ec9c283b8663",
        alias: "Nails",
    },
    {
        id: "522d7155-2147-43df-901c-13c13e0314f5",
        alias: "Nemesis",
    },
    {
        id: "d33bdc1a-9207-41c7-b7bb-35de8fc8f54a",
        alias: "Nova",
    },
    {
        id: "5a772bac-8bf0-4445-aa3b-c352840efdac",
        alias: "Owl",
    },
    {
        id: "43c1b1c5-3388-4c41-be47-afe2bcd43adc",
        alias: "Phoenix",
    },
    {
        id: "2bdd56d7-4b0c-4877-8596-32c1142b6951",
        alias: "Quirk",
    },
    {
        id: "595379c4-51de-4536-9530-0c3d31395c35",
        alias: "Raider",
    },
    {
        id: "11b61959-bf27-494f-b972-1f16bcdcffab",
        alias: "Razor",
    },
    {
        id: "741c1bd5-2713-4d35-91fe-53b27a820d31",
        alias: "Rash",
    },
    {
        id: "7079646e-b630-43d8-b85d-209c9d8b0ba0",
        alias: "Skulls",
    },
    {
        id: "97525463-10cf-406b-bcc4-f8d5a4bdb7e2",
        alias: "Snaps",
    },
    {
        id: "3898c8eb-146d-4b08-89bf-e619db890554",
        alias: "Snitch",
    },
    {
        id: "3f9584fd-2542-4e8e-936d-99f131e722d8",
        alias: "Stinger",
    },
    {
        id: "3a6a59b0-1b51-4383-a924-a7947c9d2945",
        alias: "Syndrome",
    },
    {
        id: "9b792ff4-fb37-4eea-bef8-6d15d3ecc9ed",
        alias: "Tank",
    },
    {
        id: "a67c888a-90b2-4253-826f-708abb2bdd38",
        alias: "Tax",
    },
    {
        id: "65cee91f-9f82-4c1a-ac25-13a2ff8a3f44",
        alias: "Titan",
    },
    {
        id: "f0a485c8-82a6-4452-9104-f9223ef762d4",
        alias: "Tread",
    },
    {
        id: "239e9cff-005f-4465-9643-c0850fa8deb9",
        alias: "Under",
    },
    {
        id: "9e22a119-d4f6-4c94-9be7-bd164ecc0bce",
        alias: "Vandal",
    },
    {
        id: "26338b78-4e0d-4e51-8a93-be1109c2091a",
        alias: "Vapor",
    },
    {
        id: "687976ec-1813-4cea-a4e6-32e224659b7d",
        alias: "Wraith",
    },
    {
        id: "53e43983-e64d-4035-8dfa-65e87be9f2db",
        alias: "X-Ray",
    },
    {
        id: "f3924ae0-d65d-4ee5-8701-5ef6226c3646",
        alias: "Yellow",
    },
    {
        id: "b61e5676-ff05-4a5e-89b7-0d75f6f0066a",
        alias: "Zen",
    },
    {
        id: "d00e7b1c-67f0-41d6-b7ff-d8c2b89dc144",
        alias: "Zenith",
    },
    {
        alias: "Zipper",
    },
];
const lastNames = [
    {
        id: "af3f0aa9-5abc-4217-8de2-10dc2884dcec",
        name: "Acon",
    },
    {
        id: "ef7ffe44-a039-4d25-8fa1-b35487e9d8aa",
        name: "Apple",
    },
    {
        id: "ca2e8edd-fa96-4c0d-b5a5-b73524f2abcb",
        name: "Bartok",
    },
    {
        id: "79ed3309-6aff-4c8a-af71-b2c605f41356",
        name: "Black",
    },
    {
        id: "45ddc349-620a-4293-b2f8-95095891ea94",
        name: "Brell",
    },
    {
        id: "9ca12c6f-a082-405a-a86d-438aa0a6c45d",
        name: "Clovis",
    },
    {
        id: "42a48baf-0cee-48fc-91b3-fe104e1a74ca",
        name: "Crynyd",
    },
    {
        id: "54f8e884-0b98-4eb2-bc66-198f34ded14d",
        name: "Curia",
    },
    {
        id: "12b94aa3-09c5-425e-bb70-2d743f9fa9f9",
        name: "Doona",
    },
    {
        id: "be7d3d33-dd0a-499c-b230-d47cb9bdf438",
        name: "Drake",
    },
    {
        id: "b63898ca-d748-4ef0-8a53-286f6bfa7568",
        name: "Dyson",
    },
    {
        id: "f912ffc7-fbb1-4e6a-b934-870945044de1",
        name: "Emari",
    },
    {
        id: "0a65e971-2ecb-4fb7-89bf-70cff56ea51b",
        name: "Endua",
    },
    {
        id: "f1cf80d7-09a0-4305-9ab5-70d1876961ce",
        name: "Evazan",
    },
    {
        id: "9618cab2-8404-4778-9cc5-6a7e5c4a2a0c",
        name: "Farr",
    },
    {
        id: "3be82d7c-5227-4525-9e66-e4d9c50a8962",
        name: "Feris",
    },
    {
        id: "28cc3661-1df5-4017-9e98-f25e76d2ab17",
        name: "Gallia",
    },
    {
        id: "e6d1678f-f47b-4168-b766-44fceba8166a",
        name: "Gree",
    },
    {
        id: "0ad4e1c3-ff75-46c0-b481-ea36eb7fc9a5",
        name: "Gyle",
    },
    {
        id: "183a6700-f55a-4380-8336-7300a0743cff",
        name: "Hawking",
    },
    {
        id: "e9ac8fa3-d6d2-4b19-8317-af7e7d59c0ea",
        name: "Hex",
    },
    {
        id: "2352327a-79aa-45ca-8682-9779bdbafac7",
        name: "Hill",
    },
    {
        id: "8107d656-3757-43e3-8b5d-b79a1471a6c3",
        name: "Impera",
    },
    {
        id: "d5e77273-e384-45db-a590-6e54244ee004",
        name: "Indigo",
    },
    {
        id: "14571806-99f6-40ad-b933-0d37b96e1d2a",
        name: "Intal",
    },
    {
        id: "10db16bd-b439-462f-985c-c03b5733a155",
        name: "Ivanov",
    },
    {
        id: "ff94d577-a541-4dbe-8221-33b31a38ecef",
        name: "Jor",
    },
    {
        id: "1f977557-4857-45c1-ba02-d38088710905",
        name: "Jusik",
    },
    {
        id: "5b05c4b8-1c93-4cae-9baf-9b234f9a8c8e",
        name: "Kasur",
    },
    {
        id: "10d52667-f980-458b-a3a7-d52bfd19cb0d",
        name: "Kedra",
    },
    {
        id: "fe754ff8-bf27-4384-a07c-18472276349b",
        name: "Kor",
    },
    {
        id: "afa33723-eda8-4273-86f3-4b919f639950",
        name: "Kranax",
    },
    {
        id: "fa625aa1-780b-4e80-abd4-b9221a276249",
        name: "Kritus",
    },
    {
        id: "8b0a6414-1d64-4b68-af97-94fc257341a6",
        name: "Kromyl",
    },
    {
        id: "f5375afb-cbae-4c27-8322-c1339d0c863e",
        name: "Kymnal",
    },
    {
        id: "d15f14b5-d28c-4997-8250-2f0c85b6e7f1",
        name: "Lana",
    },
    {
        id: "05b31dca-fedd-48d6-9c71-94e5d0fc850d",
        name: "Livia",
    },
    {
        id: "24856540-70d0-45b3-8863-37f857457fe5",
        name: "Luo",
    },
    {
        id: "0930f812-05f5-41f7-a93f-dfad638c9887",
        name: "Mahat",
    },
    {
        id: "da9ed097-9286-4269-93d0-351b17833be1",
        name: "Marak",
    },
    {
        id: "deac4e39-9206-430e-865d-0373bcfa04e7",
        name: "Natoth",
    },
    {
        id: "45a4b193-7b3d-42e1-ad7c-a85f457abf61",
        name: "Nagan",
    },
    {
        id: "b2497441-ac7c-4f8f-b392-a1b1b8bd3799",
        name: "Neumann",
    },
    {
        id: "3dc18659-a823-4b4f-976d-a3af1f0936c4",
        name: "Nur",
    },
    {
        id: "0275fa0b-eb22-4f36-ae41-61d745d2047d",
        name: "Ortcutt",
    },
    {
        id: "47d944dd-3750-4010-9045-3a8c861cd6d6",
        name: "Pava",
    },
    {
        id: "781a6673-672a-4763-bf88-995296449f56",
        name: "Pim",
    },
    {
        id: "50a8d661-44ad-4433-8642-05d6c94f84b4",
        name: "Quag",
    },
    {
        id: "5b342607-9ae1-428c-90c3-85a2207a7fc2",
        name: "Ramus",
    },
    {
        id: "130e0b1a-7861-44e7-8f9a-8dfc5240e3f3",
        name: "Rudra",
    },
    {
        id: "f7cb2236-41a0-498d-bade-0f93ff7421de",
        name: "Ryle",
    },
    {
        id: "1db95519-9306-4c79-a287-fbc6f826c8b7",
        name: "Shrike",
    },
    {
        id: "e0737a12-9e7a-4e72-908e-833a0516b800",
        name: "Sprek",
    },
    {
        id: "7b609460-35c7-4476-a9e1-784d8cbc5b8d",
        name: "Suzuka",
    },
    {
        id: "ff37f4d2-2f28-4031-bf49-6df9dd23d608",
        name: "Tann",
    },
    {
        id: "cd7ed8db-b9b6-4ff7-9e7d-1e1c7e048bf9",
        name: "Tarkin",
    },
    {
        id: "36b8ed2c-b08e-40d5-a9b4-07213a5e3edc",
        name: "Tel",
    },
    {
        id: "f2460837-f5f1-46ec-83b9-1630c55068bd",
        name: "Thorn",
    },
    {
        id: "2d983bfe-7981-45cb-a8c8-2ee46b274e3b",
        name: "Tilad",
    },
    {
        id: "9e7d2931-c660-4200-937d-902084d01c8a",
        name: "Ulmak",
    },
    {
        id: "8c9f5f95-8a84-49a1-816a-5c3401d97004",
        name: "Ursis",
    },
    {
        id: "b1df8791-424e-487e-a0b5-fce27043215a",
        name: "Valorum",
    },
    {
        id: "ddf930c4-39b6-4649-82b1-c0904d65b15b",
        name: "Veers",
    },
    {
        id: "052ea8a5-ab8e-4632-a61a-3130b689cc3e",
        name: "Vosa",
    },
    {
        id: "a18b373d-e7b3-4d72-9833-fe42940dd97f",
        name: "Wu",
    },
    {
        id: "5a8371e7-2139-429b-a254-31a0429a3462",
        name: "Wolffe",
    },
    {
        id: "7f3f31d4-2fa0-40d0-a8b8-95a8ff42fe74",
        name: "Wren",
    },
    {
        id: "338bd86f-7ba2-4d64-b770-118ca5d2df67",
        name: "Yoneyama",
    },
    {
        id: "ac3f3a2d-3890-414e-babc-47ee01553a52",
        name: "Yueh",
    },
    {
        id: "301c14a6-bdbb-4565-a13b-acd710a560fd",
        name: "Yularen",
    },
    {
        id: "c393aa93-eafd-4617-afb8-13c4f0cf9fc0",
        name: "Zan",
    },
    {
        id: "be8fa8f2-c3ca-447b-8efc-fe76fadbac76",
        name: "Zer",
    },
];
const firstNames = [
    {
        id: "1e2ae67e-21f6-4f94-8c11-798af6e962e5",
        name: "Abra",
    },
    {
        id: "ee1f2dde-b91a-48e3-bc6b-9a22ce986b17",
        name: "Aria",
    },
    {
        id: "7007c94e-4757-4652-a851-a1acf85931dd",
        name: "Chendra",
    },
    {
        id: "b27b0f76-f37c-450c-b991-961ce2e3f591",
        name: "Cord",
    },
    {
        id: "866e48a1-294a-4a2b-8a18-ba69a7c79f3b",
        name: "Del",
    },
    {
        id: "1b29071b-8c96-4761-9e00-d1e9f7639311",
        name: "Duncan",
    },
    {
        id: "89b031f0-7e62-449a-bf42-4999a500f727",
        name: "Ed",
    },
    {
        id: "7463a1a8-f542-4c62-b884-4328f1ccafbc",
        name: "Entex",
    },
    {
        id: "4e4ec686-3aa2-4997-87c8-ae7a4d8c342c",
        name: "Espa",
    },
    {
        id: "ce43e3cf-97a5-48c8-9556-6af0675462b8",
        name: "Faykan",
    },
    {
        id: "38a1d77b-b25a-4138-80f5-66bd9ea04a13",
        name: "Faye",
    },
    {
        id: "498bd3ac-f519-425a-ba76-b64ed926fa19",
        name: "Finn",
    },
    {
        id: "4965bdcb-acc5-4a74-b69d-b3a2b812b500",
        name: "Fox",
    },
    {
        id: "49fe24a0-8241-47c6-a948-5a9010168285",
        name: "Gaius",
    },
    {
        id: "525ecbe5-7815-44f7-883e-07ef51c828ff",
        name: "Garm",
    },
    {
        id: "5204daaf-9b54-4597-89d4-92ab512225af",
        name: "Garrus",
    },
    {
        id: "993b50d0-ccb0-45f6-a13d-9b32e76158ab",
        name: "Genera",
    },
    {
        id: "be50a1ef-cb6d-4583-9579-a3a8c410c9e5",
        name: "Greeg",
    },
    {
        id: "07847017-66ee-475c-820a-5404a590e13a",
        name: "Gurney",
    },
    {
        id: "3f713500-75b6-44d7-b8c4-825e7bf347d0",
        name: "Han",
    },
    {
        id: "51a3859f-8edf-43b2-84b0-5f635982b87a",
        name: "Hirak",
    },
    {
        id: "e65dc352-d221-4e13-816d-a829161a11b0",
        name: "Hondo",
    },
    {
        id: "b8408c72-2e44-45fb-92b9-1f85f38a98eb",
        name: "Ignor",
    },
    {
        id: "360437f7-80c1-4c3a-b81e-ef549ba48f93",
        name: "Jaana",
    },
    {
        id: "72bd2ca9-3a05-4162-b9d1-97d4b6dccf78",
        name: "Jango",
    },
    {
        id: "938cb14e-5592-4fed-8d48-78152c4b0613",
        name: "Jerec",
    },
    {
        id: "893b3e3d-664c-44a8-99ce-0755ccedf5f2",
        name: "Jet",
    },
    {
        id: "d0fea32f-1c6b-42a8-9474-93545cddd12a",
        name: "Jung",
    },
    {
        id: "839b1ae1-5a85-40ea-ba08-3ea453bd8f5f",
        name: "Kai",
    },
    {
        id: "cc219455-1d01-4ab2-bee0-e6ef42202224",
        name: "Kalo",
    },
    {
        id: "37f9591b-70a3-4887-aa13-5a0c2ec243d9",
        name: "Kahlee",
    },
    {
        id: "98876350-4242-4c2d-be82-cc9a3d99a796",
        name: "Kasumi",
    },
    {
        id: "4eabcd3f-9a50-483c-bce2-e427d702074b",
        name: "Kirk",
    },
    {
        id: "cbc7dc57-ccdb-419d-8956-a506a34ecb38",
        name: "Kit",
    },
    {
        id: "99213564-1516-4609-b4db-d6dd77ca177d",
        name: "Lando",
    },
    {
        id: "c2881e02-c811-44cc-8906-a5ebc09f75b5",
        name: "Leto",
    },
    {
        id: "2352078f-efc5-4c1a-8ec9-40ef7812d51c",
        name: "Liara",
    },
    {
        id: "d51b8257-e62f-42e8-9fb0-525e38c3c075",
        name: "Lotus",
    },
    {
        id: "610dd41e-3551-474b-9b0e-848f44825732",
        name: "Mevakor",
    },
    {
        id: "c7f5b8a2-5abd-4d58-a50a-c95dfca64de7",
        name: "Mill",
    },
    {
        id: "d813fd76-3e3f-48b3-9f40-ba36ba114ac0",
        name: "Mino",
    },
    {
        id: "d3fcf0d7-0301-458e-8f61-72f1d90853a5",
        name: "Miranda",
    },
    {
        id: "c98a1815-7ab3-4484-973c-fdac6dc5e5e3",
        name: "Mordin",
    },
    {
        id: "70c4e710-4400-4272-b148-64ea63f636f3",
        name: "Naimon",
    },
    {
        id: "3884c48e-5a25-40aa-aab2-786242906246",
        name: "Needa",
    },
    {
        id: "59141ebd-dd61-4412-a83a-1475b887db0a",
        name: "Oola",
    },
    {
        id: "8f384c6e-03e4-4c7a-9dce-bbf89dcca3b8",
        name: "Orrin",
    },
    {
        id: "26149e21-5584-422e-af6b-b75ce2cc9432",
        name: "Paul",
    },
    {
        id: "293409aa-bbd2-470b-a9b9-899618bbd2dc",
        name: "Poe",
    },
    {
        id: "ca39b2bf-ab44-4f9a-8e22-d80bb946f853",
        name: "Potak",
    },
    {
        id: "45cc6bf2-3bfa-4b78-9f92-a198136e1ff7",
        name: "Praxis",
    },
    {
        id: "8a9560d3-c557-49fd-8b41-c9a3c57a0e06",
        name: "Quinton",
    },
    {
        id: "0db82bcf-eaec-4fca-82c9-574f1cb48152",
        name: "Rey",
    },
    {
        id: "50507648-d319-40c1-9388-218e6392f728",
        name: "Rocco",
    },
    {
        id: "a6828c16-7ec1-43d1-bf11-a55b75b70e40",
        name: "Saldeed",
    },
    {
        id: "ed16d0eb-d79f-457a-90b1-67b8eae7cc2f",
        name: "Samara",
    },
    {
        id: "5616fa1a-3a87-4844-af7b-b75012ed79dc",
        name: "Saren",
    },
    {
        id: "ed9b0af3-2c93-45c3-8479-b876d1a44c92",
        name: "Seklor",
    },
    {
        id: "c337db64-51d8-4a4d-8ca9-dee7a1389663",
        name: "Spike",
    },
    {
        id: "67a8c405-5062-4af1-8e9e-fe21d0d8fb78",
        name: "Thane",
    },
    {
        id: "9454e97d-f2cf-4bae-99ae-0a95312c8398",
        name: "Yast",
    },
    {
        id: "a91f5b07-8558-468d-97f9-c9c26593a801",
        name: "Yola",
    },
    {
        id: "63e74caf-d8a3-4641-8f08-ca8ffe85d881",
        name: "Victor",
    },
    {
        id: "a4c706a6-b770-4cbd-8b0c-b7b895bd466e",
        name: "Wyndam",
    },
    {
        id: "b1dfff26-0749-4188-980f-fb2311154f1a",
        name: "Xavier",
    },
    {
        id: "dccf35d7-b349-4226-9fee-1de5003b4a15",
        name: "Zaeed",
    },
    {
        id: "2b75d7c0-c282-4442-9839-726ace5cd910",
        name: "Zokar",
    },
];
const actions = [
    {
        id: "2d955562-0706-4c52-aa6c-6434fd637785",
        action: "attune",
        description:
            "When you Attune to The Way, you open your mind to the galactic energies underlying all of existence.",
        clarification:
            "You might communicate with a non-sentient species or robot. You could safely handle Precursor Artifacts or remnants that tap directly into The Way. You might sense unseen danger, or killing intent (though study might be better).",
    },
    {
        id: "e8135559-e633-46b8-a68e-a2847fd15ce3",
        action: "command",
        description: "When you Command, you compel obedience with your force of personality.",
        clarification:
            "You might intimidate or threaten to get what you want. You might lead an action with NPCs. You might order people to do what you want (though sway might be better).",
    },
    {
        id: "649ff699-7629-4b0a-bbcf-8703f790b424",
        action: "consort",
        description: "When you Consort, you socialize with friends and contacts.",
        clarification:
            "You might gain access to resources, information, people, or places. You might make a good impression or win someone over with your charm and style. You might make new friends or connect with your heritage or background. You could try to direct your friends with social pressure (but Command might be better).",
    },
    {
        id: "5fddad07-5be8-4cbc-8ef4-5329d15bd9f1",
        action: "doctor",
        description:
            "When you Doctor, you attend to the needs of another by lending aid and comfort, or you look scientifically at the world.",
        clarification:
            "You might treat someone’s injuries. You might analyze a substance’s composition to learn how it functions. You might comfort someone in distress (but Consort might be better).",
    },
    {
        id: "b6b946b1-7a66-412b-bd50-8772250e6f23",
        action: "hack",
        description:
            "When you hack, you breach the security systems of computers or override their controls.",
        clarification:
            "You might access a data console to find a captive being held somewhere on the station. You might Scramble a drone’s control systems to keep it from firing on you. You might override a door’s controls to get it to open (though rig might be better).",
    },
    {
        id: "daa14d85-6a46-438c-bc69-60691fbf2d66",
        action: "helm",
        description: "When you helm, you pilot a vehicle or use vehicle weapons.",
        clarification:
            "You might plot a jump through a dark hyperspace lane. You might dive through a canyon to escape a chasing ship. You might fire quad-lasers at hostile pirates. You might reroute power on The Ship to weather fire (though rig may be better).",
    },
    {
        id: "6ceb5cde-deb5-4cf3-83eb-86d238687564",
        action: "rig",
        description:
            "When you rig mechanisms, you alter how an existing mechanism works or create a new one.",
        clarification:
            "You might disable a trap. You might repair a damaged ship system. You might crack a safe. You might overdrive an engine. You might program a bomb to detonate later. You might force a door open (though hack might be better).",
    },
    {
        id: "36866e1d-d14a-4877-8220-4bbb5482aa11",
        action: "scramble",
        description:
            "When you Scramble, you lift, climb, jump, run, or swim, usually either away from or into danger.",
        clarification:
            "You might vault over a turnstile while escaping authorities. You might climb up the side of a cliff to approach a secret base. You might dodge blaster fire as you cross the hangar to get to your ship. You might chase after a mark you’re following (though skulk might be better).",
    },
    {
        id: "f6eec4e6-0b7b-4106-b38e-fa2b52b64a68",
        action: "scrap",
        description:
            "When you scrap, you engage in pitched combat with the intent to harm or neutralize your opposition.",
        clarification:
            "You might brawl or wrestle with your foe. You might use a melee weapon. You might storm a barricade or hold a position in battle. You might lay down blaster fire. If you’re using a vehicle or ship weapon, you should use helm instead.",
    },
    {
        id: "537960fb-888d-4477-8736-ca332ca683ab",
        action: "skulk",
        description: "When you skulk, you move stealthily or without being noticed.",
        clarification:
            "You might sneak past security or hide in the shadows. You might lift a cred-stick off a mark. You might sneak up behind someone to attack them by surprise (but scrap might be better). You could try to climb up the side of a building (but Scramble might be better).",
    },
    {
        id: "5d9c5d61-766e-4719-ad4c-c17549412fed",
        action: "study",
        description: "When you study, you scrutinize details and interpret evidence.",
        clarification:
            "You might gather information from documents, newspapers, and books. You might do research on an esoteric topic. You might closely analyze a person to detect lies or true feelings. You could deduce a person’s intention to kill you (but Attune might be better).",
    },
    {
        id: "2f13c331-8aca-42ef-a703-bb5f41e00537",
        action: "sway",
        description: "When you sway, you influence someone with guile, charm, or logic.",
        clarification:
            "You might outright lie to someone’s face. You might persuade a sucker to believe you. You might argue the facts with an officer. You could try to trick people into affection or obedience (but Consort or Command might be better).",
    },
];

export { heritages, backgrounds, vices, signature, aliases, lastNames, firstNames, actions };
