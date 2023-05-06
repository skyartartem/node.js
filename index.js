const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");
// console.log(obj);


// console.log("First contact", listContacts());

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "read":
            const contacts = await listContacts();
            return console.log(contacts);
        case "getById":
         const contact = await getContactById(id);
            return console.log(contact); 
        case "add": 
            const newContact = await addContact(name, email, phone); 
            return console.log(newContact);
    }
};
// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: "qdggE76Jtbfd9eWJHrssH" });
invokeAction({ action: "add", name: "Mr. Anderson", email: "mr.anderson@mail.com", phone: "0632814042" });