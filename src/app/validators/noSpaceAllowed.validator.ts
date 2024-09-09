import { FormControl } from "@angular/forms";

// export const noSpaceAllowed = (control: any)=> {
//     if(control.value != null && control.value.indexOf(' ') != 1){
//         return {noSpaceAllowed: true}
//     }
//     return null
// }

export class CustomValidators{
    static noSpaceAllowed (control: any) {
        if(control.value != null && control.value.indexOf(' ') != -1){
            return {noSpaceAllowed: true}
        }
        return null
    }
}