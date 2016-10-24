import {Component, OnInit} from "@angular/core";
import { ObservableArray } from 'data/observable-array';
import { ListViewEventData } from 'nativescript-telerik-ui/listview';
@Component({
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    public counter: number = 16;
    dataItems: ObservableArray<RadListviewSelectorModel>;
    selectedItem: RadListviewSelectorModel;
    ngOnInit() {
        let tempList = [
            { id: 0, name: '银行卡', isSelected: true },
            { id: 1, name: '现金', isSelected: false },
            { id: 2, name: '微信', isSelected: false },
            { id: 3, name: '支付宝', isSelected: false },
            { id: 4, name: '其他', isSelected: false }
        ];
        this.dataItems = new ObservableArray<RadListviewSelectorModel>(tempList);
    }

    public onItemTap(args: ListViewEventData) {
        console.log(args.itemIndex);
        this.selectedItem = this.dataItems.getItem(args.itemIndex);

        for (let i = 0; i < this.dataItems.length; i++) {
            let temp = this.dataItems.getItem(i);
            if (this.selectedItem.id === temp.id) {
                this.dataItems.getItem(i).isSelected = true;
            } else {
                this.dataItems.getItem(i).isSelected = false;
            }
        }
    }
}


export class RadListviewSelectorModel {
    id: number;
    name: string;
    isSelected: boolean;
}
