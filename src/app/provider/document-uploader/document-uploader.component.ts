import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HttpRequestComponent } from '../http-request/http-request.component';
import swal from 'sweetalert2';

@Component({
  selector: 'app-document-uploader',
  templateUrl: './document-uploader.component.html',
  styleUrls: ['./document-uploader.component.scss'],
  providers: [HttpRequestComponent]
})
export class DocumentUploaderComponent implements OnInit {
  @Input() documents: Array<any>;
  @Input() document: any;
  @Input() DeceasedDetails: any;
  @ViewChild('filesInput') filesInput;
  fileUrl: any = "assets/images/PDF-Icon.png";
  FileToUpload: File = null;
  filename: any;
  filesize: any;
  isfileUploaded: boolean = false;
  upload: boolean = false;
  url: string = "assets/images/PDF-Icon.png";

  constructor(private request: HttpRequestComponent) { }

  ngOnInit() {}

  handleFileInput(file: FileList) {
    this.FileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = () => {
      this.fileUrl = this.FileToUpload.type.match('image.*') ? reader.result : this.url;
      this.filename = this.FileToUpload.name;
      this.filesize = this.FileToUpload.size;
    }
    reader.readAsDataURL(this.FileToUpload);
  }

  uploadFile(): any {
    if (this.filesInput.nativeElement.files[0]) {
      var formData = new FormData();
      formData.append('document', this.filesInput.nativeElement.files[0]);
      formData.append('documentName', this.filesInput.nativeElement.files[0].name);
      formData.append('DeceasedId', this.DeceasedDetails.Id);
      formData.append('DeceasedLastName', this.DeceasedDetails.LastName);
      this.request.mediaPost("api/Upload", formData, 
      swal("Documents upload successful", '', 'success'), 
      error => {
        this.isfileUploaded = false;
        this.upload = true;
        const message = 'Oops';
        swal(message, error.message, 'warning');
      });
    }
  }
}
