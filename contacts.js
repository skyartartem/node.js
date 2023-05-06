const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid")
// const fileOperation = async () => {
//   const buffer = await fs.readFile("./db/contacts.json", "utf-8");
//   // другий аргумент "utf-8" Перетворює з бинару на стрінг або:
//   // const data = buffer.toString();
//   /// Перетворює з бінару на об'ект
//   // const data = JSON.parse(buffer);

//   return JSON.parse(buffer);
// };

const contactsPath = path.join(__dirname, "db", "contacts.json");

// TODO: задокументувати кожну функцію
async function listContacts() {
  const buffer = await fs.readFile(contactsPath);
  return JSON.parse(buffer);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  return result || null;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return nul;
  }
  const [result] = contacts.splice(index, 1)
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

async function updateById(id, data) {
  const contacts = await listContacts();
  const index =  contacts.findIndex(item=>item.id ===id)
  if (index === -1) { return nul }
  contacts[index] = {id, ...data}
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
}

const contactsOperation = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateById,
};

module.exports = contactsOperation;
