import { useState } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonList, IonItem, IonLabel } from '@ionic/react';
import { useHistory } from 'react-router-dom'
import cn from 'classnames'
import { workouts } from '../data'

import styles from './Tab1.module.css';

const Tab1: React.FC = () => {
  const [category, setCategory] = useState(1);
  const history = useHistory();

  const onListItemClick = (workout: any) => {
    history.push(`/workout/${workout.id}`);
  }

  const updateCategory = (cat: any) => {
    setCategory(cat)
  }

  return (
    <IonPage>
      <IonHeader>
        <div className={styles.header} style={{backgroundImage: "url('/assets/images/hero.png')"}}>
          Workout Plans
        </div>
        <div className={styles.headerTabs}>
          <div
            className={cn(styles.headerTabItem, {[`${styles.headerTabItemActive}`]: category == 1})}
            onClick={() => updateCategory(1)}
          >
              Beginner
            </div>
          <div
            className={cn(styles.headerTabItem, {[`${styles.headerTabItemActive}`]: category == 2})}
            onClick={() => updateCategory(2)}
          >
              Expert
            </div>
        </div>
      </IonHeader>
      <IonContent fullscreen>
        <div className={styles.list}>
          {workouts.map(plan => (
            <div 
              key={plan.id}
              className={styles.listItem} 
              onClick={() => onListItemClick(plan)}
              style={{ 'background': `no-repeat center/cover url(/assets/images/${plan.id}.jpg)` }}
            >
              <div>
                <IonLabel className={styles.listItemTitle}>{plan.title}</IonLabel>
                <div className={styles.listItemSub}>{plan.duration} Minutes</div>
              </div>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
