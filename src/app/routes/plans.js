const router = require("express").Router();
const { verifyUserAccessToken } = require("../../middlewares/jwt");
const {
  remove,
  update,
  view,
  create, planEvents,
  singlePlan,
  changePlanName
} = require("../controller/plans");
// const { isAuth } = require("../../middlewares/auth");

router.get("/", view);
router.get("/planEvents", verifyUserAccessToken, planEvents);
router.get("/:planId", singlePlan);
router.post("/create", create);
router.delete("/remove/:planId", remove);
router.patch("/update/:planId", update);
router.patch("/changePlanName/:activePlanId", changePlanName);

module.exports = router;
