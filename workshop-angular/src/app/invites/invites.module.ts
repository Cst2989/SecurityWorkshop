// invite.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { InviteComponent } from './invites.component';

@NgModule({
  declarations: [InviteComponent],
  imports: [
    CommonModule,
    FormsModule, // Add FormsModule to imports array
  ],
  exports: [InviteComponent]
})
export class InviteModule { }
