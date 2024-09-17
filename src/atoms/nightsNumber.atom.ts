import { atom, selector } from 'recoil';
import { differenceInDays } from 'date-fns';

const today: Date = new Date();
const tomorrow: Date = new Date(today.getTime() + 24 * 60 * 60 * 1000);

// Client-side localStorage access check
const getStoredStartDate = (): Date => {
   if (typeof window !== 'undefined') {
      const storedStartDate = localStorage.getItem('startDate');
      return storedStartDate ? new Date(storedStartDate) : today;
   }
   return today; // Fallback for SSR
};

const getStoredEndDate = (): Date => {
   if (typeof window !== 'undefined') {
      const storedEndDate = localStorage.getItem('endDate');
      return storedEndDate ? new Date(storedEndDate) : tomorrow;
   }
   return tomorrow; // Fallback for SSR
};

const getStoredNumberOfNights = (): number => {
   if (typeof window !== 'undefined') {
      const storedNumberOfNights = localStorage.getItem('numberOfNights');
      return storedNumberOfNights ? Number(storedNumberOfNights) : 1;
   }
   return 1; // Fallback for SSR
};

export const startDateState = atom({
   key: 'startDateState',
   default: getStoredStartDate(),
});

export const endDateState = atom({
   key: 'endDateState',
   default: getStoredEndDate(),
});

export const numberOfNightsState = atom({
   key: 'numberOfNightsState',
   default: getStoredNumberOfNights(),
});

export const numberOfNightsSelector = selector({
   key: 'numberOfNightsSelector',
   get: ({ get }) => {
      const startDate = get(startDateState);
      const endDate = get(endDateState);
      const daysDifference = differenceInDays(new Date(endDate), new Date(startDate));
      return daysDifference >= 1 ? daysDifference : 1;
   },
   set: ({ set }, newValue) => {
      set(numberOfNightsState, newValue);
      if (typeof window !== 'undefined') {
         localStorage.setItem('numberOfNights', newValue.toString());
      }
   },
});