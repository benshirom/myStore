const express= require("express");
const {auth, authAdmin} = require("../middlewares/auth");
const { authCtrl } = require("../controllers/authControll");
const { userCtrl } = require("../controllers/userControll");
const router = express.Router();

// אזור שמחזיר למשתמש את הפרטים שלו לפי הטוקן שהוא שולח
// רק משתמש אדמין יוכל להגיע ולהציג את רשימת 
// כל המשתמשים

router.post("/",authCtrl.signUp)
router.post("/login", authCtrl.login)

router.get("/myInfo",auth,userCtrl.myInfo)
router.get("/usersList", authAdmin ,userCtrl.userList)
module.exports = router;
