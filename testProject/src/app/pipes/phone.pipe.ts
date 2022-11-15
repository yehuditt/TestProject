import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phoneNum:any): string {
    if(!phoneNum)
    return '';
    phoneNum = phoneNum.toString().charAt(0)!= 0 ? "0" + phoneNum : "" + phoneNum;

    let newStr = "";
    let i = 0;

    for (; i < phoneNum.length ; i++) {
      newStr = newStr + phoneNum.toString().charAt(i);
      if(i==2)
      newStr=newStr+ "-";
    }

    return newStr ;
  }

}
