import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stockstatus',
  templateUrl: './stockstatus.component.html',
  styleUrls: ['./stockstatus.component.css']
})
export class StockstatusComponent implements OnChanges {

    @Input() stock: number;
    @Input() productId: number;
    @Output() stockValueChange = new EventEmitter();
    color = '';
    updatedstockvalue: number;

    stockValueChanged() {
        this.stockValueChange.emit({ id: this.productId, updatestockvalue: this.updatedstockvalue });
        this.updatedstockvalue = null;
    }

    ngOnChanges() {
        if (this.stock > 10) {
            this.color = 'green';
        } else {
            this.color = 'red';
        }

    }


}
