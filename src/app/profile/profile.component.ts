import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  addresses: any[] = [];

  addressEditForm!:FormGroup;

  showAddressForm = false;
  isEdit = false;

  constructor(private _profile: ProfileService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getAddress();
    this.getUser()
  }

  createAddressForm(){
    return this.fb.group({
      name:this.fb.control(''),
      phone:this.fb.control(''),
      pinCode:this.fb.control(''),
      locality:this.fb.control(''),
      areaAndStreet:this.fb.control(''),
      city:this.fb.control(''),
      state:this.fb.control(''),
      landmark:this.fb.control(''),
      alternativePhone:this.fb.control(''),
      _id:this.fb.control(''),
      addressType:this.fb.control(''),
    })
  }

  createProfileForm(){
    return ''
  }



  editForm(i:number){
    this.showAddressForm=true;
    this.addressEditForm = this.createAddressForm();
    this.isEdit=true;
    this.addressEditForm.patchValue(this.addresses[i]);
  }

  addAddressForm(){
    this.showAddressForm=true;
    this.addressEditForm = this.createAddressForm();
  }

  saveAddress(){
    if(this.isEdit){
      this._profile.editAddress(this.addressEditForm.value).subscribe((res)=>{
        this.isEdit = false;
        this.showAddressForm = false;
        this.getAddress();
      })
    }
    else{
       const {_id,...payload} = this.addressEditForm.value
      this._profile.addAddress(payload).subscribe((res)=>{
        this.showAddressForm = false;
        this.getAddress();
      })
    }
  }

  getUser(){
this._profile.getUser.subscribe(console.log)
  }


  getAddress() {
    this._profile.address.subscribe((res: any) => {
      this.addresses = res.addresses;
    });
  }

  updateDefault(id: string) {
    this._profile.setDefaultAddress(id).subscribe((res) => {
      this.getAddress();
    });
  }

  deleteAddress(id: string) {
    this._profile.deleteAddress(id).subscribe((res) => {
      this.getAddress();
    });
  }
}
