import { Component, OnInit } from '@angular/core';
import { Tourist } from '../tourist';
import { TouristService } from '../tourist.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-tourist',
  templateUrl: './create-tourist.component.html',
  styleUrls: ['./create-tourist.component.css']
})
export class CreateTouristComponent implements OnInit {
  tourist: Tourist = new Tourist();

  constructor(private touristService:TouristService,
    private router: Router){ }
  

  ngOnInit(): void {
  
  }

  
    
    
    registered(){ console.log(this.tourist);
      this.touristService.registerUser(this.tourist).subscribe((data)=>{ 
        alert("Sucessfully registered")
              },error=>alert("User is not registered"));
       
    };

    
   


  }


