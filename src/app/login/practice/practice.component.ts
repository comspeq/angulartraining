import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

declare var $: any; 
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor() {
  }


  
  ngOnInit(): void {


    var USD = false;
    
    // six combinations
    // INR-Annum     USD-Annum
    // INR-Month     USD-Month
    // INR-Hour      USD-Hour
    
    $(".INR-Month").show();
    $(".INR-Annum").hide();
    $(".INR-Hour").hide();
    $(".USD-Annum").hide();
    $(".USD-Month").hide();
    $(".USD-Hour").hide();

  // by default
  $(".INR").click(function(){
    USD = false;

    
    $(".INR-Annum").hide();
    $(".INR-Hour").hide();
    $(".USD-Annum").hide();
    $(".USD-Month").hide();
    $(".USD-Hour").hide();
    $(".INR-Month").show();
  });
  $(".USD").click(function(){
    USD=true;
    $(".INR-Annum").hide();
    $(".INR-Hour").hide();
    $(".USD-Annum").hide();
    $(".INR-Month").hide();
    $(".USD-Hour").hide();
    $(".USD-Month").show();
  });
if(USD==false)
{
    $(".Annum").click(function(){
      $(".INR-Month").hide()
      $(".INR-Hour").hide()
      $(".USD-Hour").hide()
      $(".USD-Month").hide()
      $(".USD-Annum").hide()
      $(".INR-Annum").show()
    });
    $(".Month").click(function(){
      $(".INR-Hour").hide()
      $(".INR-Annum").hide()
      $(".USD-Annum").hide()
      $(".USD-Month").hide()
      $(".USD-Hour").hide()
      $(".INR-Month").show()
    });
    $(".Hour").click(function(){
      $(".INR-Annum").hide()
      $(".INR-Month").hide()
      $(".USD-Month").hide()
      $(".USD-Annum").hide()
      $(".USD-Hour").hide()
      $(".INR-Hour").show()
    });
}
  else if(USD==true)
    {
      $(".Annum").click(function(){
        $(".USD-Month").hide()
        $(".USD-Hour").hide()
        $(".INR-Hour").hide()
        $(".INR-Month").hide()
        $(".INR-Annum").hide()
        $(".USD-Annum").show()
      });
      $(".Month").click(function(){
        $(".USD-Hour").hide()
        $(".USD-Annum").hide()
        $(".INR-Annum").hide()
        $(".INR-Month").hide()
        $(".INR-Hour").hide()
        $(".USD-Month").show()
      });
      $(".Hour").click(function(){
        $(".USD-Annum").hide()
        $(".USD-Month").hide()
        $(".INR-Month").hide()
        $(".INR-Annum").hide()
        $(".INR-Hour").hide()
        $(".USD-Hour").show()
      });
    }
  }
}
 
//   $(document).ready(function(){
//     $(".txt1").hide().delay(1000).fadeIn(1000).delay(1000).fadeOut(1000);
//     $(".txt2").hide().delay(4100).fadeIn(1000).delay(1000).fadeOut(1000);
//     $(".txt3").hide().delay(7100).fadeIn(1000).delay(1000).fadeOut(1000);
// });




