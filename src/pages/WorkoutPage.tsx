import React from 'react';
import { IonPage, IonHeader, IonContent, IonImg, IonTitle, IonList, IonItem, IonCheckbox } from '@ionic/react'
import { RouteComponentProps } from 'react-router-dom'

import { workouts } from '../data'

import styles from './WorkoutPage.module.css'

interface MatchParams {
    id: string;
}

interface Workout{
  title: string;
  duration: number,
}

interface Props extends RouteComponentProps<MatchParams> {
}

const WorkoutPage: React.FC<Props>  = ({ match }) => {
  const { id } = match.params;
  const workout = workouts.find(workout => workout.id === id)

  return (
    <IonPage>
      <IonHeader>
        <div className={styles.hero}>
          <IonImg src={`/assets/images/${id}.jpg`} />
        </div>
        <div className={styles.headerTitleBox}>
          <div>{workout?.title}</div>
          <div>{workout?.duration}min</div>
        </div>
      </IonHeader>
      <IonContent>
        <div className={styles.contentHeading}>Exercises</div>
        <IonList lines='none'>
          {workout?.exercises?.map(exercise => (
            <IonItem className={styles.listItem}>
              <IonCheckbox slot="start" />
              <div>
                <div className={styles.listItemTitle}>
                  {exercise.title}
                </div>
                <div className={styles.listItemSub}>
                  <div>{exercise.duration}minutes</div>
                </div>
              </div>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default WorkoutPage
