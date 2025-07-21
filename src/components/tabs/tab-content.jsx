import Tabs from "./Tabs";

export default function TabContent() {
  const tabs = [
    { label: "Tab 1", content: "This is Tab 1" },
    { label: "Tab 2", content: "This is Tab 2" },
    { label: "Tab 3", content: "This is Tab 3" },
  ];
  function handleOnChange(index) {
    console.log("chnaged");
  }

  return <Tabs tabsContent={tabs} onChange={handleOnChange} />;
}
