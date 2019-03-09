import {Component} from '@angular/core'
import { collectExternalReferences } from '@angular/compiler';

@Component({
    selector: '<nav-bar></nav-bar>',
    templateUrl: './nav-bar.component.html',
    styleUrls:['./nav-bar.component.css']
    //.nav-link{color: white !important} color: white;
    //.nav-link:hover{color: black !important} color:#f5e2e2;
})
export class NavBarComponent{
    collapsed: boolean = true;
    public onToggle() {
        this.collapsed = !this.collapsed
    }
}