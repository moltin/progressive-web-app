import { Component, Input } from '@angular/core';
 
@Component({
    selector: 'verification-display',
    templateUrl: 'verification.html'
})
export class VerificationDisplay {
    @Input('time') time: string;
}