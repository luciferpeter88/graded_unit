import React from "react";
import {
  AccordionComponent,
  AccordionItemDirective,
  AccordionItemsDirective,
} from "@syncfusion/ej2-react-navigations";
import "../../../../styles/dashboard/adminevents.css";
import disclosureGuide from "./disclosure";
function Apply() {
  return (
    <React.Fragment>
      <AccordionComponent>
        <AccordionItemsDirective>
          {disclosureGuide.map((item, index) => {
            return (
              <AccordionItemDirective
                key={index}
                header={item.header}
                content={item.content}
              />
            );
          })}
        </AccordionItemsDirective>
      </AccordionComponent>
    </React.Fragment>
  );
}

export default Apply;
