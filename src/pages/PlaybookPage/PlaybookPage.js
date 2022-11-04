import "./PlaybookPage.scss";
import SelectionSlides from "../../components/SelectionSlides/SelectionSlides";
import BlockForm from "../../components/BlockForm/BlockForm";
import { useState } from "react";
import axios from "axios";

const testData = {
    id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
    playbook: "mechanic",
    summary:
        "Play a Mechanic if you want to make new devices, keep your ship in good shape, or hack systems.",
    tagline: "A gearhead and hacker",
    overview:
        "Whether it’s fixing up the ship’s engines or constructing a specialized safecracker to break into a Hegemonic vault, a mechanic is an invaluable asset on most jobs. You might be the mousy one who has all the fancy toys, or more hands-on, lugging your gear to The Job. Or you might prefer to literally make friends and specialize in Urbotic creation. When something breaks, you’re the one to call.",
    xp_gain:
        "When you play a Mechanic, you earn xp when you address challenges with technical skill or ingenuity. ",
    xp_advice:
        "Always look at the devices around you and be prepared to make them do what you want them to.",
    character_questions:
        "Did you make your own drone? How’d you learn your technical skills? Where’d you find your pet and what is it? Are you unassuming, fading into a crowd, or hard to miss, covered in tattoos?",
    starting_actions: "Rig 2, Study 1",
    build_suggestions:
        "Ship mechanic. Hack +2, Scramble +1, Sway +1. Fixed.\nComputer whiz. Hack +2, Skulk +1, Sway +1. Hacker.\nBot builder. Hack +1, Scramble +1, Attune +2. Construct Whisperer.\nShip owner. Helm +2, Scrap +1, Command +1. Junkyard Hunter.",
    starting_ability: "tinker",
    starting_ability_summary:
        "When you work on a clock with rig or hack, or when you study a schematic, fill +1 segment.",
    starting_ability_clarification:
        "You get this bonus segment regardless of whether this is a Downtime action or not. This means that bypassing security on a job or doing an emergency patch while escaping a chasing ship is easier for you than others.",
    items_description:
        "Mechanics have tools, ship parts, and their latest inventions around or on them. Although they can dress like anyone else, many mechanics prefer looks that are tough to tear, have plenty of places to stash a tool or two, and are easy to crawl through a ship duct in.",
    playing_advice:
        "Playing a Mechanic is foremost about your relationship with The Ship. No one else will have the same ability to keep it flying, and when something breaks, all eyes will be on you. Look for opportunities to bring up what you’ve personally modified on The Ship. Where do you get parts when The Ship needs something repaired?\n\nHow did you become a mechanic? Were you mentored by one of your friends? Were you once a Guild trainee? Why did you leave and join the crew? Do you approach fixing The Ship as a stop-gap solution, where you’re simply trying to find a patch until the next thing breaks, or is it a matter of pride that something never fails twice?\n\nFamiliarize yourself with the crafting system. The ability for you to make new devices is very powerful, and the starting Tinker ability gives you an advantage that no one else will be able to match. Ask the rest of the crew what devices you might be able to create and get them to chip in for their development, either in extra downtimes to speed up Design or with extra cred to pay for Assembly.\n\nAction-wise, you may want to pick up skulk if you tend to lurk in the background, or Attune if you expect to be working on Ur machines or Urbots. If you also serve as the crew’s foremost computer and system expert, you’ll want to stack some hack.\n\nVeteran ability-wise, the Speaker’s Old Friends ability can play up your connections among crafters and hackers. If you want to go full mad scientist, look at the Stitch’s Dr. Strange ability.",
    xeno_advice:
        "Every species has Mechanics, so when playing a xeno, consider how that xenotype relates to machines. Some xenos have an unusual relationship with technology (particularly Ur-based technology), such as the Sah’iir, while others use unusual materials, like the Mem.\n\nDoes your species have an unusual adaptation for working on machines? Are they small and fit into ventilation ducts easily? Also consider how your xeno adaptations might reflect sides of you that aren’t directly relating to machines.\n\nHow does your xeno heritage fit into the story? Have the Guilds excluded your character from certain opportunities because you aren’t human? Or have your people been embraced, perhaps because of an adaptation that The Hegemony could utilize?",

    special_abilities: [
        {
            id: "018ba9b7-193b-4661-912b-b8b43144200e",
            playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
            name: "CONSTRUCT WHISPERER",
            description:
                "Machines speak to you when you study them. The first time you roll a critical while fixing or building a particular machine, you may add a simple modification to it (see Crafting).",
            clarification:
                "How do machines whisper their secrets to you? Is it intuitive? Do you feel what they feel? You do not gain the modification if you improve the result with cred.",
        },
        {
            id: "4bd527d0-77e6-46e3-8a57-afe94ad37996",
            playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
            name: "OVERCLOCK",
            description:
                "When you spend a gambit on a rig roll to Repair or upgrade, treat the system you worked on as 1 quality higher for the remainder of The Job.",
            clarification:
                "You may make a rig roll during a job to simply to get more out of a system, but such temporary boosts are only situational and need to be backed out the next time you hit drydock. You can overclock systems that aren’t ships, enhancing the system’s quality.",
        },
        {
            id: "7e20cc37-bf0e-4086-8db3-53c516253cfc",
            playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
            name: "MECHANIC’S HEART",
            description:
                "When you speak from your heart, your words can reach even the most hardened criminal, and you gain Potency.",
            clarification:
                "This ability works in all situations without restriction. As long as you speak genuinely and sincerely, your words will be heard.",
        },
        {
            id: "92e7708c-635e-4e4c-bd1e-38783e642231",
            playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
            name: "BAILING WIRE AND MECH-TAPE",
            description:
                "You get an extra Downtime activity to Repair, and the Repair activity costs you 0 cred.",
            clarification:
                "The Repair Downtime activity usually takes 1 cred to perform. With this ability, you can take the activity at no cred cost. The free repairs can’t be “saved up.” You get one per Downtime.",
        },
        {
            id: "938cc9c2-417a-425c-9794-f9a5b65dc1c5",
            playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
            name: "HACKER",
            description:
                "You may expend your special armor to resist the Consequences of hacking, or to push yourself when hacking or gathering info electronically.",
            clarification:
                "When you use this ability, tick the special armor box on your playbook sheet. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 Stress. Your special armor is restored when you select your load at the start of a job.",
        },
        {
            id: "9acbd538-2ff9-4cc9-be95-a51a517bef83",
            playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
            name: "ANALYST",
            description:
                "When you hack a system, you may also ask a question about the owner or location of the system as though you had rolled a 6 on gather info. When you resist the Consequences of hacking, roll +1d.",
            clarification:
                "Regardless of the purpose for which you are hacking, you learn something about the systems you’re manipulating. If you were Gathering Information, you may roll to learn a second thing, or you can simply accept the 6 for what you wanted to know.",
        },
        {
            id: "cbcb111a-1cbe-4d01-abeb-a7b36ba1aee7",
            playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
            name: "JUNKYARD HUNTER",
            description:
                "When you acquire parts or equipment during Downtime, you may either gain two assets or one asset at +1 quality.",
            clarification:
                "Your junkyard contacts can get what you need refurbished or on special offer. If you gain two assets, they both have the same quality as your roll.",
        },
        {
            id: "ef49c9f4-8591-49f5-9e84-a224556f34d4",
            playbooks_id: "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
            name: "FIXED",
            description:
                "You may expend your special armor to resist a consequence from machines breaking or being damaged, or to push yourself when repairing or building a machine.",
            clarification:
                "When you use this ability, tick the special armor box on your playbook sheet. Machines can include your ship, so you can use this as special armor for your ship if you are onboard dealing with the Damage. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 Stress. Your special armor is restored when you select your load at the start of a job.",
        },
    ],
};

export default function PlaybookPage() {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
    const BACKEND_PORT = process.env.REACT_APP_PORT;
    const apiUrl = `http://localhost:${BACKEND_PORT}`;
    const [selectedPlaybook, setSelectedPlaybook] = useState(null);
    const [refData, setRefData] = useState(testData);
    const [formStage, setFormStage] = useState(0); // TODO: set back to false
    const handleSelectPlaybook = (e, currentPlaybook, id) => {
        setSelectedPlaybook(currentPlaybook);
        axios.get(`${apiUrl}/ref/${id}`).then((response) => {
            setRefData(response.data);
        });
    };
    const handleNextStage = () => {
        setFormStage(formStage + 1);
    };
    const handleBlockFinish = () => {
        window.scrollTo(0, 0);
    };
    const handleItemSelection = (e, data) => {};
    if (formStage === 0) {
        return (
            <>
                <SelectionSlides
                    handleSelectPlaybook={handleSelectPlaybook}
                    handleNextStage={handleNextStage}
                />
            </>
        );
    } else if (formStage === 1) {
        return (
            <>
                <BlockForm refData={refData} handleBlockFinish={handleBlockFinish} />
            </>
        );
    }
}
