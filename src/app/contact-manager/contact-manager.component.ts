import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  contacts = this.contactService.getContacts();
  newContact = { name: '', phone: '' };
  editingContact: any = null;


  ngOnInit(): void {
    
  }
  constructor(private contactService: ContactService) {}

  addContact() {
    if (this.newContact.name && this.newContact.phone) {
      this.contactService.addContact(this.newContact.name, this.newContact.phone);
      this.newContact = { name: '', phone: '' };
    }
  }

  editContact(contact:any) {
    this.editingContact = { ...contact };
  }

  saveContact() {
    if (this.editingContact.name && this.editingContact.phone) {
      this.contactService.editContact(this.editingContact.id, this.editingContact.name, this.editingContact.phone);
      this.editingContact = null;
    }
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id);
  }
}
