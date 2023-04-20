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

function AdminDGallery() {
  const { navState } = useContext(navContext);
  //testing
  function itemTemplate4() {
    return (
      <div className="product-container flex flex-col xl:flex-row min-h-[80vh] gap-x-5  bg-green-900  rounded-lg">
        <div className="col-sm-5 component-container w-2/3 xl:w-1/3  flex flex-col gap-y-5 mt-5 p-3 text-white">
          <div className="heading text-2xl">Moscow</div>
          <div className="description text-lg">
            Moscow, on the Moskva River in western Russia, is the nation’s
            cosmopolitan capital.
          </div>
        </div>
        <div className="col-sm-5 image-container xl:w-2/3 mt-10 xl:mt-0">
          <picture>
            <img
              width="100%"
              height="100%"
              src="https://ej2.syncfusion.com/products/images/carousel/hunei.png"
              alt="Moscow"
            />
          </picture>
        </div>
      </div>
    );
  }

  return (
    <div className={`main ${navState.toggleDash ? "active" : null}`}>
      <TopBar menu={menuOutline} search={searchOutline} />
      <div className=" p-5">
        <div className="control-container">
          <CarouselComponent loop={false} autoPlay={false}>
            <CarouselItemsDirective>
              <CarouselItemDirective template={itemTemplate4} />
              <CarouselItemDirective template={itemTemplate4} />
            </CarouselItemsDirective>
          </CarouselComponent>
        </div>
      </div>
    </div>
  );
}

export default AdminDGallery;
