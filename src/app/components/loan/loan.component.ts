import { Component, OnInit, ViewChild } from '@angular/core';
import { ITools } from 'src/app/models/ITools';
import { ToolService } from 'src/app/services/tools/tool.service';
import { SharedService } from 'src/app/services/shared.service';
import { MatSelectionList } from '@angular/material';

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
  toolist_id: any;
  @ViewChild('tool') tool_list: MatSelectionList;

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
  onSelectionChange() {
    console.log(this.onSelection());
  }
  onSelection() {
    this.toolist_id = this.tool_list.selectedOptions.selected.map(t => t.value.id);
    return this.toolist_id;
  }

  posttools() {
    this.toolService.postToollist(this.toolist_id);
    console.log(this.toolist_id);
  }
}
