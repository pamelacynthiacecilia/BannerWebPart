import * as React from 'react';
import styles from './BannerWebPart.module.scss';
import { IBannerWebPartProps } from './IBannerWebPartProps';
//import { escape } from '@microsoft/sp-lodash-subset';

export default class BannerWebPart extends React.Component<IBannerWebPartProps, {}> {
  public render(): React.ReactElement<IBannerWebPartProps> {
    const {
      isDarkTheme
    } = this.props;

    return (
      <section>
        <div>
          <img alt="" src={isDarkTheme ? require('../assets/banner.jpeg') : require('../assets/banner.jpeg')} className={styles.welcomeImage} />
        </div>
      </section>
    );
  }
}
