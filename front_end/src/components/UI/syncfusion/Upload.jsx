import React, { useEffect } from "react";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-react-inputs/styles/material.css";
import "../../../styles/dashboard/upload.css";
import { L10n } from "@syncfusion/ej2-base";

import { UploaderComponent } from "@syncfusion/ej2-react-inputs";

function Upload() {
  useEffect(() => {
    L10n.load({
      "en-US": {
        uploader: {
          dropFilesHint: "",
          Browse: "Upload...",
        },
      },
    });
  }, []);

  return <UploaderComponent locale="en-US" />;
}

export default Upload;
