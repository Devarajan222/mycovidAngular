import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { MiningService } from '../mining.service';


@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['./mining.component.css']
})
export class MiningComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,

    // Inject your Hello Service Here
    private helloService: MiningService,
    
    // Inject your confirmation dialog
    private confirmationDialogService: ConfirmationDialogService



  ) { }

  ngOnInit(): void {
    // onInit and Constructor difference
    // https://stackoverflow.com/questions/35763730/difference-between-constructor-and-ngoninit#:~:text=The%20main%20difference%20between%20constructor,how%20the%20code%20is%20structured.

    // initialize by call the component method here. 
  }


  hi:string=" ";

  public getBasicHelloSubscribe(): any {
    this.httpClient.get(`http://localhost:8091/covid/mining/my`, { responseType: 'text' })
      .subscribe((data: any) => 
                  {
                    // assign HTTP response with local variable
                    this.hi = data;
                  }
                );   
  }
  
}



