import { Component, OnInit, ViewChild } from '@angular/core';
import { ITools } from 'src/app/models/ITools';
import { MatSelectionList } from '@angular/material';
import { ToolService } from 'src/app/services/tools/tool.service';
import { SharedService } from 'src/app/services/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})
export class ReturnComponent implements OnInit {
  toolList: ITools;
  Id: number;
  Name: string;
  Quantity: number;
  User: Object;
  isloggedin: boolean;
  toolist_id: any;
  deselectedtool: any;
  idUser: number;
  ToolId: any[];
  EmptyArray: [];
  public grey_tools = 'grey';
  @ViewChild('tool') tool_list: MatSelectionList;

  constructor(private toolService: ToolService, private sharingService: SharedService, private toastr: ToastrService) { }

  ngOnInit() {
    this.ToolId = this.sharingService.getToolId();
    console.log('ToolId', this.ToolId);
    this.getTools();
    this.getToolsQuantity();

    this.User = this.sharingService.GetUser();
    if (this.User) {
      this.toastr.success('Identiication réussie !');
    }
    this.isloggedin = this.sharingService.getLoggedInStatus();
  }
  getTools() {
    this.toolService.tools().subscribe((tools) => {
      this.toolList = tools;
      this.Quantity = tools.quantity;
      console.log('toolist', this.toolList);
    });
  }

  getToolsQuantity() {
    try {
      this.toolService.tools().subscribe((tools) => {
        this.toolList = tools;
        this.Quantity = tools.quantity;
      });
    } catch (e) { }

  }
  onSelectionChange() {
    this.toolist_id = this.tool_list.selectedOptions.selected.map(t => t.value.id);
    // this.deselectedtool = this.tool_list.selectedOptions.changed.asObservable;
    console.log('toolist_id', this.toolist_id);
    return this.toolist_id;
  }
  onSelection() {
  }

  retourtools(toolist_id): any {
    if (toolist_id) {
      try {
        console.log('toolist_id', toolist_id);
        this.toolService.retourtools(toolist_id).subscribe((tools) => {
          console.log('data', toolist_id);
        });
        this.toastr.success('Retour réussie !');
      } catch (e) {
        console.log('Exception posttools :', e);
      }

    }
  }
}
