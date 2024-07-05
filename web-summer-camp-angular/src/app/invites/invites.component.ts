import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invite',
  template: `
    <div>
      <h1>Invitation Code Content</h1>
      <div [innerHTML]="sanitizedInvitationCode"></div>
    </div>
  `,
})
export class InviteComponent implements OnInit {
  invitationCode: string = '';
  sanitizedInvitationCode: SafeHtml = '';

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.invitationCode = params['inviteCode'] || '';
      if(this.invitationCode) {
        this.sanitizedInvitationCode = this.sanitizer.sanitize(4, this.invitationCode) as SafeHtml
      }
    });
  }
}
