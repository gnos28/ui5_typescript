import { IconColor } from "sap/ui/core/library";
import BaseController from "./BaseController";

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
}
