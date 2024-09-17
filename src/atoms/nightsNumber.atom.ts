import { atom, selector } from 'recoil';
import { differenceInDays, addDays } from 'date-fns';

const today = new Date();

const tomorrow = addDays(today, 1);
export const startDateState = atom({
    key: 'startDateState',
    default: today,
});

export const endDateState = atom({
    key: 'endDateState',
    default: tomorrow, // Default to tomorrow's date
});

export const numberOfNightsState = atom({
    key: 'numberOfNightsState',
    default: 1, // Default value
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