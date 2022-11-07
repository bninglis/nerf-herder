import "./AcceptWindow.scss";

export default function AcceptWindow({ handleNextStage, incompleteSections }) {
    if (
        incompleteSections.name === false &&
        incompleteSections.history.heritages === false &&
        incompleteSections.history.backgrounds === false &&
        incompleteSections.history.vices === false &&
        incompleteSections.people.friend === false &&
        incompleteSections.people.rival === false &&
        incompleteSections.actions === false
    ) {
        return (
            <div className="accept-id">
                <div>
                    <h2>Accept Current Character ID?</h2>
                    <button onClick={handleNextStage}>Yes</button>
                </div>
            </div>
        );
    }
}

// {
//     "friend": {
//         "name": "Slice",
//         "id": "d2bd40fb-ae56-4d1d-b90f-e5cd17c2280f"
//     },
//     "rival": {
//         "name": "Nisa",
//         "id": "be837e95-80eb-48ac-9d19-b77aced14572"
//     },
//     "actions": [
//         "Rig",
//         "Rig",
//         "Study"
//     ],
//     "playbookActions": [
//         "Rig",
//         "Rig",
//         "Study"
//     ],
//     "playbookID": "4d7f5b63-fb0a-4d09-a18f-e99a97781aef",
//     "playbook": "mechanic",
//     "abilityID": "cbcb111a-1cbe-4d01-abeb-a7b36ba1aee7",
//     "abilityName": "junkyard hunter",
//     "abilityDescription": "When you acquire parts or equipment during Downtime, you may either gain two assets or one asset at +1 quality.",
//     "abilityClarification": "Your junkyard contacts can get what you need refurbished or on special offer. If you gain two assets, they both have the same quality as your roll.",
//     "startingAbility": "tinker",
//     "startingAbilitySummary": "When you work on a clock with rig or hack, or when you study a schematic, fill +1 segment.",
//     "startingAbilityClarification": "You get this bonus segment regardless of whether this is a Downtime action or not. This means that bypassing security on a job or doing an emergency patch while escaping a chasing ship is easier for you than others.",
//     "actionsStrings": [
//         "Rig +2, Study +1",
//         [
//             "Rig +2",
//             "Study +1"
//         ]
//     ],
//     "firstName": "Chendra",
//     "lastName": "Tel",
//     "alias": "Titan",
//     "look": "Leathers",
//     "heritage": "spacer",
//     "heritages_id": "f950f30c-4a7a-47a3-8944-413be401d9af",
//     "heritage_story": "in space",
//     "background": "Guilder",
//     "backgrounds_id": "e4c7879c-c6a5-47ea-95ba-bc6e528038c7",
//     "background_story": "in a guild",
//     "vice": "Obligation",
//     "vices_id": "c7b0d8b0-63ed-4e87-a4da-8c322482ba17",
//     "vice_story": "has an obligation",
//     "actionsArray": [
//         "attune",
//         "attune",
//         "command",
//         "command",
//         "rig",
//         "rig",
//         "study"
//     ],
//     "actionsObject": {
//         "attune": 2,
//         "command": 2,
//         "consort": 0,
//         "doctor": 0,
//         "hack": 0,
//         "helm": 0,
//         "rig": 2,
//         "scramble": 0,
//         "scrap": 0,
//         "skulk": 0,
//         "study": 1,
//         "sway": 0
//     }
// }
