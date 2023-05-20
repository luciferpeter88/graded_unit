import React, { useContext } from "react";
import "../../../../styles/dashboard/dashboard.css";
import TopBar from "../../../UI/dashboard/admin/TopBar";
import { menuOutline, searchOutline } from "ionicons/icons";
import navContext from "../../../../context_Reducer/nav/navContext";
import {
  CarouselComponent,
  CarouselItemsDirective,
  CarouselItemDirective,
} from "@syncfusion/ej2-react-navigations";
import context from "../../../../services/Admin/adminContext";

function AdminDGallery() {
  const { navState } = useContext(navContext);
  const {
    adminStateServices: { pictures },
  } = useContext(context);

  const itemTemplate = (picture) => (
    <div className="product-container flex flex-col xl:flex-row h-[90vh] gap-x-5 bg-green-900 rounded-lg">
      <div className="col-sm-5 component-container w-2/3 xl:w-1/3 flex flex-col gap-y-5 mt-5 p-3 text-white">
        <div className="heading text-2xl">Uploaded By</div>
        <div className="description text-lg">{picture.uploadedBy}</div>
      </div>
      <div className="col-sm-5 image-container xl:w-2/3 mt-10 xl:mt-0 flex justify-center items-center">
        <img width="100%" height="100%" src={picture.imagePath} alt="" />
      </div>
    </div>
  );

  return (
    <div className={`main ${navState.toggleDash ? "active" : null}`}>
      <TopBar menu={menuOutline} search={searchOutline} />
      <div className=" p-5">
        <div className="control-container">
          <CarouselComponent loop={false} autoPlay={false}>
            <CarouselItemsDirective>
              {pictures.hasData
                ? pictures.dataFromServer.map((picture, index) => (
                    <CarouselItemDirective
                      key={index}
                      template={() => itemTemplate(picture)}
                    />
                  ))
                : null}
            </CarouselItemsDirective>
          </CarouselComponent>
        </div>
      </div>
    </div>
  );
}

export default AdminDGallery;
