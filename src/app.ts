import {setUpFramework7} from './services/f7'

export class App {
  message = 'Hello World!';

  attached () {
    setUpFramework7()
  }
}
