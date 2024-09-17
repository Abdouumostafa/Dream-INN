import { atom, selector } from 'recoil';
import { differenceInDays } from 'date-fns';

const today: Date = new Date();
const tomorrow: Date = new Date(today.getTime() + 24 * 60 * 60 * 1000);

const getStoredStartDate = (): Date => {
   if (typeof window !== 'undefined') {
      const storedStartDate = localStorage.getItem('startDate');
      return storedStartDate ? new Date(storedStartDate) : today;
   }
   return today;
};

const getStoredEndDate = (): Date => {
   if (typeof window !== 'undefined') {
      const storedEndDate = localStorage.getItem('endDate');
      return storedEndDate ? new Date(storedEndDate) : tomorrow;
   }
   return tomorrow;
};

const storedStartDate: Date = getStoredStartDate();
const storedEndDate: Date = getStoredEndDate();
const storedNumberOfNights = localStorage.getItem('numberOfNights') ? Number(localStorage.getItem('numberOfNights')) : 1;

export const startDateState = atom({
   key: 'startDateState',
   default: storedStartDate,
});

export const endDateState = atom({
   key: 'endDateState',
   default: storedEndDate,
});

export const numberOfNightsState = atom({
   key: 'numberOfNightsState',
   default: storedNumberOfNights,
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
      localStorage.setItem('numberOfNights', newValue.toString());
   },
});