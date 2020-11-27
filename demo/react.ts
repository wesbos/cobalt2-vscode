import * as React from "React";

export class App extends React.Component {
  public foo: string = "Hello world";

  public bar() {
    console.log(this.foo);
  }
}
