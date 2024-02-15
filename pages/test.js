import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="flex border-b border-gray-200">
        <TabButton
          title="Tab 1"
          onClick={() => handleTabClick(1)}
          isActive={activeTab === 1}
        />
        <TabButton
          title="Tab 2"
          onClick={() => handleTabClick(2)}
          isActive={activeTab === 2}
        />
        <TabButton
          title="Tab 3"
          onClick={() => handleTabClick(3)}
          isActive={activeTab === 3}
        />
      </div>
      <div className="mt-4">
        {activeTab === 1 && <TabContent>Content for Tab 1</TabContent>}
        {activeTab === 2 && <TabContent>Content for Tab 2</TabContent>}
        {activeTab === 3 && <TabContent>Content for Tab 3</TabContent>}
      </div>
    </div>
  );
};

const TabButton = ({ title, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        isActive ? "border-b-2 border-blue-500" : ""
      } flex-grow py-2 px-4 text-sm font-semibold text-gray-700 focus:outline-none`}
    >
      {title}
    </button>
  );
};

const TabContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export default Tabs;
