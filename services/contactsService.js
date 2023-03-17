const { Contacts } = require("../schemas");

const listContacts = async (user, skip, limit, favorite) => {
  return await Contacts.find(
    favorite ? { owner: user, favorite } : { owner: user }
  )
    .skip(skip)
    .limit(limit);
};

module.exports = {
  listContacts,
};
