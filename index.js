const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateById,
} = require("./contacts");
// console.log(obj);


// console.log("First contact", listContacts());

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
      case "read":
        const allContacts = await listContacts();
        return console.log(allContacts);
      case "getById":
        const oneContact = await getContactById(id);
        return console.log(oneContact);
      case "delById":
        const delContact = await removeContact(id);
        return console.log(delContact);
      case "add":
        const newContact = await addContact(name, email, phone);
        return console.log(newContact);
      case "updateById":
        const updateContact = await updateById(id, { name, email, phone });
        return console.log(updateContact);
    }
};
// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "qdggE76Jtbfd9eWJHrssH" });
invokeAction({ action: "delById", id: "TExn-bqJrzIxwur2poPQV" });
// invokeAction({ action: "add", name: "Mr. Anderson", email: "mr.anderson@mail.com", phone: "0632814042" });
// invokeAction({
//   action: "updateById",
//   id: "TExn-bqJrzIxwur2poPQV",
//   name: "Mr. Anderson",
//   email: "mr.anderson@mail.com",
//   phone: "052346825",
// });