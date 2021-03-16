import React from 'react'
import AsyncStorage from "@react-native-community/async-storage";
import {Notifications} from 'expo'

const NOTIFICATION_KEY = 'MobileFlashcard:notifications'

export function timeToString (time = Date.now()) {
  const date = new Date(time)
  const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  return todayUTC.toISOString().split('T')[0]
}

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export async function setLocalNotification() {

    AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
        if (data === null) {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();

            Notifications.scheduleLocalNotificationAsync(
                {
                    title: 'Log your stats!',
                    body:
                        "👋 don't forget to log your stats for today!",
                    ios: {
                        sound: true,
                    },
                    android: {
                        sound: true,
                        sticky: false,
                    },
                },
                {
                    time: tomorrow.getTime() + 6000,  // almost every minute it should show the notification
                    repeat: 'minute',
                }
            );

            AsyncStorage.setItem(
                NOTIFICATION_KEY,
                JSON.stringify(true)
            );
        }
    })
}
