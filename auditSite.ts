import { LightHouseWrapper } from "./lighthouse/lighthouse-wrapper";

let lighthouse = new LightHouseWrapper();
(async () => {
    await lighthouse.auditSite();
})();
