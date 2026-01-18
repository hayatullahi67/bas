import { db } from '../firebase';
import {
    collection,
    query,
    getDocs,
    orderBy,
    limit
} from 'firebase/firestore';

const EVENTS_COLLECTION = 'events';
const eventsCollectionRef = collection(db, EVENTS_COLLECTION);

/**
 * Fetch all events
 */
export const getAllEvents = async () => {
    try {
        const q = query(eventsCollectionRef, orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error("Error fetching events:", error);
        throw error;
    }
};

/**
 * Fetch upcoming events
 */
export const getUpcomingEvents = async (count = 3) => {
    try {
        const q = query(
            eventsCollectionRef,
            orderBy("date", "asc"),
            limit(count)
        );

        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error("Error fetching upcoming events:", error);
        throw error;
    }
};

export const eventsService = {
    getAllEvents,
    getUpcomingEvents
};
