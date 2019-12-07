import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  // Pour appliquer le style globalement à l'ensemble des autres composants
  // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  // Alias : @Input('aliasName') ...
  @Input() element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
