import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Import the default styles
import "./DetailsTabs.css";

export const DetailsTabs = () => {
  return (
    <Tabs>
      <TabList className="flex gap-10">
        <Tab className="react-tabs__tab w-60 h-10 border-2 rounded-full text-gray-600 py-2 px">
          Description
        </Tab>
        <Tab className="react-tabs__tab w-60 h-10 border-2 rounded-full text-gray-600 py-2 px">
          Brand
        </Tab>
        <Tab className="react-tabs__tab w-60 h-10 border-2 rounded-full text-gray-600 py-2 px">
          Comments
        </Tab>
      </TabList>

      <TabPanel className="p-4">
        {/* Content for Description tab */}
        <h2 className="text-xl font-bold mb-4">Description</h2>
        {/* <p className="text-gray-700">{description}</p> */}
      </TabPanel>

      <TabPanel className="p-4">
        {/* Content for Brand tab */}
        <h2 className="text-xl font-bold mb-4">Brand</h2>
        {/* <p className="text-gray-700">{brand}</p> */}
      </TabPanel>

      <TabPanel className="p-4">
        {/* Content for Comments tab */}
        <h2 className="text-xl font-bold mb-4">Comments</h2>
        {/* <ul className="list-disc list-inside">
          {comments.map((comment, index) => (
            <li key={index} className="text-gray-700">
              {comment}
            </li>
          ))}
        </ul> */}
      </TabPanel>
    </Tabs>
  );
};
