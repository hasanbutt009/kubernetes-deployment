import { inject } from '@angular/core';
import { ContactService } from "./contact.service";
import { ResolveFn } from '@angular/router';

export const ContactDetailsResolver: ResolveFn<any> = (route, state) => {
  let contactService = inject(ContactService);
  return contactService.getById(route.paramMap.get('contactId'));
};
