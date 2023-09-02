import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class UserService {
  private users = [
    {
      name: 'Violanta',
      avatar:
        'https://avatars.mds.yandex.net/i?id=81c8f3e4df450efad84bba827a8a8044de337e20-9390856-images-thumbs&n=13',
      profession: 'politician',
      phone: '12333134',
      desc: 'Nice old lady',
    },
    {
      name: 'Abasamumba',
      avatar:
        'https://avatars.mds.yandex.net/i?id=ed99078566d26441f75e11d7514f6691347661d6-9211785-images-thumbs&n=13',
      profession: 'engineer',
      phone: '13553455',
      desc: 'Totally paranoid',
    },
    {
      name: 'Chrisophoropulos',
      avatar:
        'https://avatars.mds.yandex.net/i?id=961e12772476ddf51807518b8e7d2aa4cf6a9949-9855122-images-thumbs&n=13',
      profession: 'teacher',
      phone: '575757',
      desc: 'Just scum',
    },
    {
      name: 'Jupps',
      avatar:
        'https://avatars.mds.yandex.net/i?id=bb83b5720c60830012ee62182f440883aac59608-10354084-images-thumbs&n=13',
      profession: 'carpenter',
      phone: '9769769',
      desc: 'Good fellow',
    },
    {
      name: 'Homer',
      avatar:
        'https://www.boredpanda.com/blog/wp-content/uploads/2015/08/If-Monet-painted-Darth-Vader-and-other-art-clash-ups8__880.png',
      profession: 'donuts king',
      phone: '787800',
      desc: 'Funny dude',
    },
     {
      name: 'Mr. Smith',
      avatar:
        'https://avatars.mds.yandex.net/i?id=920bf5e15f1b0749647d140731918683d8783d00-9291521-images-thumbs&n=13',
      profession: 'spy',
      phone: '7080808708',
      desc: 'not funny guy',
    },
    {
      name: 'Abasamumba',
      avatar:
        'https://avatars.mds.yandex.net/i?id=ed99078566d26441f75e11d7514f6691347661d6-9211785-images-thumbs&n=13',
      profession: 'engineer',
      phone: '13553455',
      desc: 'Totally paranoid',
    },
    {
      name: 'Chrisophoropulos',
      avatar:
        'https://avatars.mds.yandex.net/i?id=961e12772476ddf51807518b8e7d2aa4cf6a9949-9855122-images-thumbs&n=13',
      profession: 'teacher',
      phone: '575757',
      desc: 'Just scum',
    },
  ];
  constructor(
  private _http: HttpClient
  ) {}

  public getAll() {
  return this.users;
  }

  public getAllFromServer() {
    return this._http.get('https://jsonplaceholder.typicode.com/users')
  }

  public remove(name: string) {
    return (this.users = this.users.filter((user) => user.name != name));
  }

  public add(
    name: string,
    avatar: string,
    profession: string,
    phone: string,
    desc: string
  ) {
    this.users.push({
      name: name,
      avatar: avatar,
      profession: profession,
      phone: phone,
      desc: desc,
    });
  }
}
