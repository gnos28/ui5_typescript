import JSONModel from "sap/ui/model/json/JSONModel";
import BaseController from "./BaseController";
import Event from "sap/ui/base/Event";

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
}
