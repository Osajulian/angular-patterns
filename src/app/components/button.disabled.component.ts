import { Component } from '@angular/core';

@Component({
    selector: 'app-button-disabled',
    template: `
    <div class="container">
    <div class="col-xs-12">
    <input type="text" [(ngModel)] = "username"/>
    <button class="btn btn-primary m-2" [disabled] = "username === ''">Submit</button>
    <br />
    <p>{{username}}</p>
    </div>
    </div>`
})
export class ButtonDisabledComponent {
username: string = '';
}