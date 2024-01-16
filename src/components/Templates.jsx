import "./index.css";
import * as React from "react";
import { useCallback } from "react";




import { MultiSelectComponent } from "@syncfusion/ej2-react-dropdowns";

import * as data from "./dataSource.json";
const Templates = () => {
  const temp = "empList";
  // define the JSON of data
  const employeesData = data[temp];
  // maps the appropriate column to fields property
  const fields = { text: "Name", value: "Eimg" };
  //set the value to header template
  const headerTemplate = useCallback(() => {
    return (
      <div className="header">
        {/* <span>Photo</span>
        <span className="columnHeader">Employee Info</span> */}
      </div>
    );
  }, []);
  //set the value to item template
  const itemTemplate = useCallback((data) => {
    return (
      <div>
        <img
          className="empImage"
          src={
            "https://ej2.syncfusion.com/react/demos/src/combo-box/Employees/"
          }
          alt="employee"
        />
        <div className="ms-ename">{data.Name}</div>
        <div className="ms-job">{data.Job}</div>
      </div>
    );
  }, []);
  //set the value to value template
  const valueTemplate = useCallback((data) => {
    return (
      <div>
        {/* <img className="valueTemp" src={data.Image} alt="employee" /> */}
        <div className="nameTemp">{data.Name}</div>
      </div>
    );
  }, []);
  return (
    <div id="multitemp" className="control-pane">
      <div className="control-section">
        <div id="multitemplate" className="control-styles">
          <h4>Employees</h4>
          <MultiSelectComponent
            id="multiTemplate"
            dataSource={employeesData}
            fields={fields}
            mode="Box"
            placeholder="Select employee"
            itemTemplate={itemTemplate}
            valueTemplate={valueTemplate}
            headerTemplate={headerTemplate}
          />
        </div>
      </div>
    </div>
  );
};
export default Templates;
