const router = require("express").Router()


router.get("/login",async (req, res, next) => {
    res.send("Login")
})

router.get("/register",async (req, res, next) => {
        res.send("register")
})
    

router.post("/login",async (req, res, next) => {
    res.send("Login POST")
})

router.post("/register",async (req, res, next) => {
        res.send("register POST")
})
  
router.get("/logout",async (req, res, next) => {
    res.send("logout")
})

module.exports = router