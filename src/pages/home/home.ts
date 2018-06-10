import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  messagesDummy: Array<any> = [ {
    "alert" : "",
    "carrierMess" : "Message sent to Driver to initiate Order",
    "delay" : 0,
    "message" : "This is a reminder to turn on tracking for the XPO load you’ll pick up in 2 hours.",
    "time" : "11:00",
    "toDriver" : true
  }, {
    "alert" : "",
    "carrierMess" : "Driver travelling on time.",
    "delay" : 0,
    "message" : "Have you been loaded with the correct weight and quantity per the BOL. Say YES or NO.",
    "time" : "12:00",
    "toDriver" : true
  }, {
    "alert" : "",
    "carrierMess" : "Driver delayed. Alert Sent to Driver",
    "delay" : 30,
    "message" : "You are scheduled to arrive at 3pm, will you be on time? Say YES or NO.",
    "time" : "14:00",
    "toDriver" : true
  },
  {
    "alert" : "",
    "carrierMess" : "Order Delivered on time by driver.",
    "delay" : 0,
    "message" : "Please contact your carrier representative for payment details. Thank you.",
    "time" : "17:00",
    "toDriver" : true
  } 
]
  i: any
  bidding:AngularFireList<any>;
  constructor(public navCtrl: NavController, private db: AngularFireDatabase) {
    this.i=0;
    this.bidding = this.db.list('/itracks/messages');
  }

  sendMe(){
    console.log(this.messagesDummy[this.i]);
    this.bidding.update((this.i).toString(),this.messagesDummy[this.i]);
    this.i++;

  }

}
