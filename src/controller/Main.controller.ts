import { IconColor } from "sap/ui/core/library";
import BaseController from "./BaseController";
import Event from "sap/ui/base/Event";
import Control from "sap/ui/core/Control";

type Incidence = {
  id: number;
  name: string;
  population: number;
  cases: number;
  deaths: number;
  casesPerWeek: number;
  deathsPerWeek: number;
  recovered: number;
  abbreviation: string;
  weekIncidence: number;
  casesPer100k: number;
  delta: Delta;
  hospitalization: Hospitalization;
};

type Delta = {
  cases: number;
  deaths: number;
  recovered: number;
  weekIncidence: number;
};

type Hospitalization = {
  cases7Days: number;
  incidence7Days: number;
  date: string;
  lastUpdate: string;
};

/**
 * @namespace com.myorg.tsexo1.controller
 */
export default class Main extends BaseController {
  formatIncidence = (incidence: number) => {
    return Math.round(incidence);
  };

  formatIconColor = (incidence: number) => {
    if (incidence < 25) return IconColor.Default;
    if (incidence < 30) return IconColor.Critical;
    return IconColor.Negative;
  };

  navToIncidenceDetail(event: Event) {
    const stateObj = (event.getSource() as Control)
      .getBindingContext()
      .getObject() as Incidence;

    const stateId = stateObj.abbreviation;

    console.log(stateId);
    
    this.navTo("IncidenceDetailRoute", { id: stateId });
  }
}
