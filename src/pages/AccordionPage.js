import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: "fjnfkj",
            label: "Can I use React?",
            content: "You can use react on any project you want. You can use react on any project you want. You can use react on any project you want."
        },
        {
            id: "ewqru",
            label: "Can I use JS?",
            content: "You can use JS on any project you want. You can use JS on any project you want. You can use JS on any project you want."
        },
        {
            id: "kapsodk",
            label: "Can I use React?",
            content: "You can use Java on any project you want. You can use Java on any project you want. You can use Java on any project you want."
        }
    ]

    return <Accordion items={items}/>;
}

export default AccordionPage;