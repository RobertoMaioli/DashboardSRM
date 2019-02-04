import { Routes } from '@angular/router';

import { PainelComponent }   from './painel/painel.component';
import { ContaComponent }   from './conta/conta.component';
import { RecebiveisComponent }   from './recebiveis/recebiveis.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'painel',
        pathMatch: 'full',
    },
    {
        path: 'painel',
        component: PainelComponent
    },
    {
        path: 'conta',
        component: ContaComponent
    },
    {
        path: 'recebiveis',
        component: RecebiveisComponent
    },
]
