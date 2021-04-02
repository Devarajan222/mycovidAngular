import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { CovidApiServiceBonus } from '../bonus.service';
import { BonusComponent } from '../bonus/bonus.component';
@Component({
  selector: 'app-covid-delete',
  templateUrl: './covid-delete.component.html',
  styleUrls: ['../share/css/share.component.css']
})
export class CovidDeleteComponent implements OnInit {
  public covidTotalDaily: any;
  public covidTotalDescBonus: any[] = [];
  public desc: any;
  public descObjectBonus: any;
  constructor(
    private httpClient: HttpClient,
    public covidApiServiceBonus: CovidApiServiceBonus,
    private confirmationDialogService: ConfirmationDialogService,
    public bonusComponent:BonusComponent
  ) { }

  ngOnInit(): void {
    this.descObjectBonus = {};
    console.log("Covid Bonus Component Inited");
    console.log("Total of Description Column Row --->" + this.descObjectBonus.length);
  }

//delete
deleteDescriptionBonus(){

  if (this.covidTotalDescBonus.length == 0) {
    this.confirmationDialogService.confirm(GlobalConstants.errorMessageFE, "List is Empty");
  }
  else {
    this.covidApiServiceBonus.deleteDescriptionBonus(this.descObjectBonus.description).then(
      resolve => {
        this.bonusComponent.getCovidBonus();
      });
  }
}
deleteDuplicate(){

  this.covidApiServiceBonus.deleteDuplicate().then(
    resolve => {
      this.bonusComponent.getCovidBonus();
    });
  }
}

