import Manager from "./Manager.js";
import ManagerView from "./ManagerView.js";
import ManagerController from "./ManagerController.js";

const ManagerApp = new ManagerController(
    Manager.getInstance(),
    new ManagerView()
);

export {ManagerApp};