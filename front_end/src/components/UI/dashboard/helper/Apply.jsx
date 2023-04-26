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
          {disclosureGuide.map((item) => {
            return (
              <AccordionItemDirective
                header={item.header}
                content={item.content}
              />
            );
          })}
        </AccordionItemsDirective>
      </AccordionComponent>
      <div class="flex items-center space-x-3 mt-5">
        <input
          type="checkbox"
          id="tick-box"
          class="rounded text-green-900 focus:ring-0 h-5 w-5 "
        />
        <label for="tick-box" class="text-gray-700">
          Submit the form
        </label>
      </div>
    </React.Fragment>
  );
}

export default Apply;
