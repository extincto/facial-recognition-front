import { Component, OnInit, ViewChild } from '@angular/core';
import { ITools } from 'src/app/models/ITools';
import { ToolService } from 'src/app/services/tools/tool.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {
  toolList: ITools;
  Id: number;
  Name: string;
  Quantity: number;

  constructor(private toolService: ToolService) { }

  ngOnInit() {
    this.getTools();
  }

  getTools() {
    this.toolService.tools().subscribe((tools) => {
      this.toolList = tools;

    });
  }

}
