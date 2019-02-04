import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'painel', title: 'Painel de Gestão',  icon: 'ti-world', class: '' },
    { path: 'conta', title: 'Conta Digital',  icon:'ti-id-badge', class: '' },
    { path: 'recebiveis', title: 'Ant. de Recebiveis',  icon:'ti-bar-chart-alt', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}
