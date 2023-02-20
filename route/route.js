//================================= Importing ======================================================//

const router = require("express").Router()

const UrlController = require('../controller/urlController')

//==================================== API ==================================================//

router.post("/url/shorten", UrlController.urlShortener)
router.get("/:urlCode", UrlController.getUrl)


//==================================== Exporting ==================================================//

module.exports = router