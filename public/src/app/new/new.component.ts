import { Component, OnInit } from '@angular/core';
import { Friend } from './../friend';
import { FriendService } from './../friend.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newfriend = new Friend();
  errors = null;
  constructor(private _friendService: FriendService, private _router: Router) { }

  ngOnInit() {
  }

  createFriend(){
    console.log(this.newfriend);
    this._friendService.createFriend(this.newfriend)
    .then((data)=>{
      console.log("After creatign a friend", data);
      if(data.message == "Success"){
          this.errors = null;
          this._router.navigate(['/dashboard'])
      }
      // this.newfriend = new Friend();
      else{
        this.errors = "Could not create your friend, please try again. First and last name must be 3 characters"

      }
    })
    .catch((err)=>{
      console.log("something went wrong", err);

    })
  }

}
