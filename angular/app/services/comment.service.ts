import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService
{
  public url="http://localhost/iaw/jugueterion-fs/symfony/web/app_dev.php";

  constructor(private _http: Http){}

  create(token, comment)
  {
    let json = JSON.stringify(comment);
    let params = "json="+json+"&authorization="+token;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+"/comment/new", params, {headers: headers})
                    .map(res => res.json());
  }

  getComments(juguete_id)
  {
    //console.log("id: "+juguete_id);
    return this._http.get(this.url+"/comment/list/"+juguete_id).map(res => res.json());
  }

  delete(token, id)
  {
    let params = "authorization="+token;
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});

    return this._http.post(this.url+"/comment/delete/"+id, params, {headers: headers})
                    .map(res => res.json());
  }
}