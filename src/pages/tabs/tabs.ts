import { Component } from '@angular/core';

import { MylifePage } from '../mylife/mylife';
import { HomePage } from '../home/home';
import { EinstellungenPage } from '../einstellungen/einstellungen';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MylifePage;
  tab3Root = EinstellungenPage;

  constructor() {

  }
}
