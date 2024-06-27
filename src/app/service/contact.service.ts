import { Injectable } from '@angular/core';

interface Contact {
  id: number;
  name: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];
  private nextId = 1;

  getContacts() {
    return this.contacts;
  }

  addContact(name: string, phone: string) {
    this.contacts.push({ id: this.nextId++, name, phone });
  }

  editContact(id: number, name: string, phone: string) {
    const contact = this.contacts.find(c => c.id === id);
    if (contact) {
      contact.name = name;
      contact.phone = phone;
    }
  }

  deleteContact(id: number) {
    this.contacts = this.contacts.filter(c => c.id !== id);
  }
}
