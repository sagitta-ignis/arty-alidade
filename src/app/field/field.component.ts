import { Component, OnInit, HostBinding } from '@angular/core';
declare var sigma;

@Component({
  selector: 'ali-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @HostBinding('class.top-level') private _classTopLevel = true;

  constructor() { }

  ngOnInit() {
    const data = {
      'nodes': [
        {
          'id': 'n0',
          'label': 'Howitzer #1',
          'x': -2,
          'y': -1,
          'size': 3,
          'color': '#88ff88'
        },
        {
          'id': 'n1',
          'label': 'Saltbrook',
          'x': 4,
          'y': 3,
          'size': 3,
          'color': '#ec5148'
        },
        {
          'id': 'n2',
          'label': 'Ikyran',
          'x': 0,
          'y': 0,
          'size': 1
        }
      ],
      'edges': [
        {
          'id': 'e0',
          'source': 'n0',
          'target': 'n1',
          'color': '#ec5148',
          'label': '98.6m  73°',
          'labelSize': 12,
          'labelColor': '#ec5148',
          'type': 'arrow',
          'size': 6
        },
        {
          'id': 'e1',
          'source': 'n2',
          'target': 'n1',
          'color': '#ccc',
          'label': '84m 63°',
          'type': 'arrow',
        },
        {
          'id': 'e2',
          'source': 'n2',
          'target': 'n0',
          'color': '#ccc',
          'label': '22m 297°',
          'type': 'arrow',
        }
      ]
    };

    const s = new sigma({
      graph: data,
      renderer: {
        container: document.getElementById('network-graph'),
        type: 'canvas'
      },
      settings: {
        defaultLabelSize: 14,
      }
    });
  }

}
