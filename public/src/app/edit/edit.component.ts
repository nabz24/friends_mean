import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FriendService } from './../friend.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  sub = null;
  editFriendId = null;
  editfriend = null;
  errors;
  constructor(private _route: ActivatedRoute, private _friendService: FriendService, private _router: Router) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe((param)=>{
      this.editFriendId = param.id;
    })
    this.getOneFriend();
  }

  getOneFriend(){
    this._friendService.getOneFriend(this.editFriendId)
    .then((data)=>{
      console.log("got data", data);
      if(data.message == "Success"){
        this.editfriend = data.friend;
        this.editfriend.birthday = new Date(this.editfriend.birthday).toDateString()
      }
      else{
        this.errors = data.error.message;
      }
    })
    .catch((err)=>{
      console.log("Got an error", err);
    })
  }

  updateFriend(){
    console.log("change our frien", this.editfriend);
    this._friendService.updateFriend(this.editFriendId, this.editfriend)
    .then((data)=>{
      console.log("worked", data);
      this._router.navigate(['/dashboard'])

    })
    .catch((err)=>{
      console.log("got error", err);
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe();

  }

}
