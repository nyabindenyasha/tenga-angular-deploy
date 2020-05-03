import { Component, OnInit, Input } from '@angular/core';
import swal from 'sweetalert2';
import { HttpRequestComponent } from '../http-request/http-request.component';


@Component({
  selector: 'app-document-viewer',
  templateUrl: './document-viewer.component.html',
  styleUrls: ['./document-viewer.component.scss']
})

export class DocumentViewerComponent implements OnInit {
  @Input() document;
  constructor(private request: HttpRequestComponent) { }
  selectedDocument() {
    var title = '<h3>' + this.document.Name + '</h3>';
    //var url = this.request.base + 'UploadedDocuments/' + this.document.Url;
    var url = this.document.Url;
      swal({
        title: title,
        width: 850,
        html: '<small><b><i>Please disable ad blockers if document fails to load</i></b></small><br/><embed src="'
          + url + '" type="application/pdf" width="100%" height="500px" />'
      });
  }
  ngOnInit() {
    console.log(document);
  }

}
