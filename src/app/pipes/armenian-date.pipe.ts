import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'armenianDate'
})
export class ArmenianDatePipe implements PipeTransform {
  months:string[]=["Հունվար","Փետրվար ","Մարտ ","Ապրիլ ","Մայիս ","Հունիս ","Հուլիս ",'Օգոստոս ',"Սեպտեմբեր ",'Հոկտեմբեր ','Նոյեմբեր ','Դեկտեմբեր ']
  weeks:string[]=["երկուշաբթի ",'երեքշաբթի ',"չորեքշաբթի ","հինգշաբթի ","ուրբաթ ",'շաբաթ ',"կիրակի "]
  
  transform(value: Date, args: string): string {
    let date;
    if(args === 'YY-DD-MM'){
      return  `${value.getDate()}, ${this.months.at(value.getMonth())} ,${(value.getFullYear())},${this.weeks.at(value.getDay())}`
    }
    if(args === 'DD-YY-MM'){
      return  `${this.weeks.at(value.getDay())},,${(value.getFullYear())},${value.getDate()}, ${this.months.at(value.getMonth())} ,`
    }
    if(args === 'MM-DD-YY'){
      return  `${this.months.at(value.getMonth())},${this.weeks.at(value.getDay())},${(value.getFullYear())},${value.getDate()}`
    }
    return `${value.getDate()}, ${this.months.at(value.getMonth())} ,${(value.getFullYear())},${this.weeks.at(value.getDay())}`
  }
}
