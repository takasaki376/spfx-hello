import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import styles from './HelloWorldWebPart.module.scss';

export interface IHelloWorldWebPartProps {
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `<div class="${ styles.helloWorld }"></div>`;
  }

  protected onInit(): Promise<void> {
    return super.onInit();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
