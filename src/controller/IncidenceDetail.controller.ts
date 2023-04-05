import JSONModel from "sap/ui/model/json/JSONModel";
import BaseController from "./BaseController";
import Event from "sap/ui/base/Event";
import DateFormat from "sap/ui/core/format/DateFormat";

type EventWithIDArgument = Event & {
  getParameter(name: "arguments"): { id: string };
};

/**
 * @name com.myorg.tsexo1.controller.IncidenceDetail
 */
export default class IncidenceDetail extends BaseController {
  onInit() {
    const model = new JSONModel(
      "https://api.corona-zahlen.org/states/history/incidence/100"
    );
    this.setModel(model, "incidenceHistory");

    this.getRouter()
      .getRoute("IncidenceDetailRoute")
      .attachMatched(this.onRouteMatched.bind(this));
  }

  onRouteMatched(event: EventWithIDArgument) {
    this.getView().bindElement({
      path: "/data/" + event.getParameter("arguments").id,
      model: "incidenceHistory",
    });
  }

  private dfSource: DateFormat;
  private dfTarget: DateFormat;

  formatDate(date: string) {
    if (!this.dfSource && !this.dfTarget) {
      this.dfSource = DateFormat.getDateTimeInstance({
        pattern: "yyyy-MM-ddTHH:mm:ss.nnnZ",
      });
      this.dfTarget = DateFormat.getDateTimeInstance({
        pattern: "yyyy-MM-dd",
      });
    }
    return this.dfTarget.format(this.dfSource.parse(date, true, true), true);
  }
}

// TRYING TO HACK THESE MOTHERFUCKING JAVASCRIPT CLASSES !!!!

// class IncidenceDetailClass extends BaseController {}

// const IncidenceDetail = new IncidenceDetailClass("IncidenceDetail");

// IncidenceDetail.onInit = () => {
//   const model = new JSONModel(
//     "https://api.corona-zahlen.org/states/history/incidence/100"
//   );
//   IncidenceDetail.setModel(model, "incidenceHistory");
//   IncidenceDetail.getRouter()
//     .getRoute("IncidenceDetailRoute")
//     .attachMatched(onRouteMatched);
// };

// const onRouteMatched = (event: EventWithIDArgument) => {
//   IncidenceDetail.getView().bindElement({
//     path: "/data/" + event.getParameter("arguments").id,
//     model: "incidenceHistory",
//   });
// };

// export default IncidenceDetail;
