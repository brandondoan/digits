import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {
    first: 'Brandon',
    last: 'Doan',
    address: '814 Kahuna Lane',
    telephone: '808-499-9103',
    email: 'doanb@hawaii.edu',
  },
  { first: 'Luffy', last: 'Monkey', address: '814 Kahuna Lane', telephone: '808-499-9103', email: 'monkeyd@hawaii.edu', },
  { first: 'Ash', last: 'Ketchum', address: '814 Kahuna Lane', telephone: '808-499-9103', email: 'pokeballs143@hawaii.edu', },
  { first: 'Harry', last: 'Buttcheeks', address: '814 Kahuna Lane', telephone: '808-499-9103', email: 'warmbuns@hawaii.edu', },
];

/**
 * Initialize the Contacts collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
