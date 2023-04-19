import React from "react";
import {
  PaneDirective,
  PanesDirective,
  SplitterComponent,
} from "@syncfusion/ej2-react-layouts";
import { ListBoxComponent } from "@syncfusion/ej2-react-dropdowns";
/* import the ListBox dependency styles */

import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-react-inputs/styles/material.css";
import "@syncfusion/ej2-react-dropdowns/styles/material.css";

import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-layouts/styles/material.css";

function Members() {
  function leftContent() {
    const people = [
      {
        id: 1,
        text: "Person One",
        imgUrl: "https://via.placeholder.com/50",
        fullName: "Full Name One",
        email: "email1@example.com",
        homeAddress: "Address 1",
        phone: "123-456-7890",
      },
      {
        id: 2,
        text: "Person Two",
        imgUrl: "https://via.placeholder.com/50",
        fullName: "Full Name Two",
        email: "email2@example.com",
        homeAddress: "Address 2",
        phone: "234-567-8910",
      },
      {
        id: 3,
        text: "Person Three",
        imgUrl: "https://via.placeholder.com/50",
        fullName: "Full Name Three",
        email: "email3@example.com",
        homeAddress: "Address 3",
        phone: "345-678-9120",
      },
    ];

    function onSelect(e) {
      console.log(e); // You can access the selected item's data here
    }

    return (
      <ListBoxComponent
        dataSource={people}
        onChange={onSelect}
        selectionSettings={{ mode: "single" }}
      />
    );
  }

  return (
    <div className=" p-5">
      <SplitterComponent id="splitter" height="85vh">
        <PanesDirective>
          <PaneDirective
            size="25vw"
            min="20%"
            max="30%"
            content={leftContent}
          />
          <PaneDirective />
        </PanesDirective>
      </SplitterComponent>
    </div>
  );
}

export default Members;
