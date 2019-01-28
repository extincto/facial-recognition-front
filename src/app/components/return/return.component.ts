import { Component, OnInit, ViewChild } from '@angular/core';
import { ITools } from 'src/app/models/ITools';
import { MatSelectionList } from '@angular/material';
import { ToolService } from 'src/app/services/tools/tool.service';
import { SharedService } from 'src/app/services/shared.service';
import { ToastrService } from 'ngx-toastr';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})
export class ReturnComponent implements OnInit {
  toolList: ITools;
  Id: number;
  id: number;
  name: string;
  Name: string;
  Quantity: number;
  quantity: number;
  User: Object;
  isloggedin: boolean;
  toolist_id: any;
  deselectedtool: any;
  idUser: number;
  ToolId: any[];
  EmptyArray: [];
  grey_tools: 'grey';
  @ViewChild('tool') tool_list: MatSelectionList;

  constructor(private toolService: ToolService, private sharingService: SharedService, private toastr: ToastrService) { }

  ngOnInit() {
    this.ToolId = this.sharingService.getToolId();
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
      this.Id = tools.id;
      this.Name = tools.name;
      this.Quantity = tools.quantity;
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

  retourtools(ToolId: any): any {
    if (this.ToolId) {
      try {
        this.toolService.retourtools(this.ToolId).subscribe((tools) => {
        });
        this.toastr.success('Retour réussie !');
      } catch (e) {
        console.log('Exception posttools :', e);
      }
    }
  }
}
