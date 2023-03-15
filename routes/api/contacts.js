const express = require("express");
const router = express.Router();

const { contacts: ctrl } = require("../../controllers");
const { auth, validation, isValidId } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");
const { contactSchemas } = require("../../models");

router.get("/", auth, ctrlWrapper(ctrl.getAllContacts));

router.get("/:contactId", auth, isValidId, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  auth,
  validation(contactSchemas.addContactsSchema),
  ctrlWrapper(ctrl.addContact)
);

router.delete("/:contactId", auth, isValidId, ctrlWrapper(ctrl.deleteContactById));

router.put("/:contactId", auth, validation(contactSchemas.addContactsSchema), isValidId, ctrlWrapper(ctrl.uptadeContactById));

router.patch(
  "/:contactId/favorite",
  auth,
  isValidId,
  validation(contactSchemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateFavorite)
);

module.exports = router;