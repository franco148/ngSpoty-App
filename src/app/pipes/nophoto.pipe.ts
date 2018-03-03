import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nophoto'
})
export class NophotoPipe implements PipeTransform {

  transform(images: any[]): any {

    let defaultPath = 'assets/img/noimage.png';

    if (!images) {
        return defaultPath;
    }

    return (images.length > 0) ? images[1].url : defaultPath;
  }

}
