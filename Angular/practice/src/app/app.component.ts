import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'practice';

  name = 'arnav jain';
  currentDate = new Date();
  cost = 2000;
  temperature = 25.346;
  pizza = {
    cost: 100,
    toppings: ['pepperoni', 'jalepaneos', 'pickle'],
    size: 'Large',
  };

  blueClass: boolean | null = null;
  fontSize = 20;
  numList: number[] = [1, 2, 3, 4, 5, 6];

  imgUrl1 =
    'https://th.bing.com/th/id/R.e95ac8d5f7bb057053fdd34f8370415d?rik=q1VHggJH5dpvmQ&riu=http%3a%2f%2fwww.thewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-image.jpg&ehk=bsDaBmDZgtasRhqb4OUzSkOAcwVCMTWMQ0XkPj4nrvQ%3d&risl=&pid=ImgRaw&r=0';
  imgUrl2 =
    'https://th.bing.com/th/id/R.6afc61b50aabe45a2e6c68eae2c217ba?rik=L2W0YWncfjZBVA&riu=http%3a%2f%2fwww.shutterstock.com%2fblog%2fwp-content%2fuploads%2fsites%2f5%2f2016%2f03%2ffall-trees-road-1.jpg&ehk=KA%2bzFrmYoWsdK4k7v%2fgfNkd1T2rdnNtpF5ICdLIxAeM%3d&risl=&pid=ImgRaw&r=0';
  img =
    'https://th.bing.com/th/id/R.e95ac8d5f7bb057053fdd34f8370415d?rik=q1VHggJH5dpvmQ&riu=http%3a%2f%2fwww.thewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fnature-image.jpg&ehk=bsDaBmDZgtasRhqb4OUzSkOAcwVCMTWMQ0XkPj4nrvQ%3d&risl=&pid=ImgRaw&r=0';

  changeImage(e: KeyboardEvent) {
    /* event binding */
    this.imgUrl2 = (e.target as HTMLInputElement).value;
  }

  flag = 0;
  fromChildImg = '';
  logImg(e: string) {
    console.log(e);
    this.flag = 1;
    this.fromChildImg = e;
  }
}
