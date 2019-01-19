import { Component, OnInit } from '@angular/core';
import { ITools } from 'src/app/models/ITools';
import { ToolService } from 'src/app/services/tools/tool.service';
import { SharedService } from 'src/app/services/shared.service';

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
  User: Object;
  isloggedin: boolean;
  tool_selected: number;

  constructor(private toolService: ToolService, private sharingService: SharedService) { }

  ngOnInit() {
    this.getTools();
    this.User = this.sharingService.GetUser();
    this.isloggedin = this.sharingService.getLoggedInStatus();

  }
  getTools() {
    this.toolService.tools().subscribe((tools) => {
      this.toolList = tools;

    });
  }
  getValue(event: any) {
    // if (event.source.selected) {
    //   this.tool_selected = event.selectedOptions.selected.length;
    //   return this.tool_selected;
    // }
    // console.log(this.tool_selected);
  }


}
