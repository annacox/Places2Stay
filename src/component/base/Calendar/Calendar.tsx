import * as React from 'react';
import {StyleProp, ViewStyle, View, StyleSheet} from 'react-native';
import {Calendar as RNCalendar} from 'react-native-calendars';
import {isAfter, isBefore, parseISO, addDays, format} from 'date-fns';
import differenceInDays from 'date-fns/differenceInDays';

type MarkedDatesProps = {
  endingDay?: boolean;
  startingDay?: boolean;
  color?: string;
  textColor?: string;
};

type MarkedDatesType = {
  [date: string]: MarkedDatesProps;
};

type onPressProps = {
  startDate?: string;
  endDate?: string;
};

type CalendarProps = {
  onPress: ({}: onPressProps) => void;
  style?: StyleProp<ViewStyle>;
};

const getDateRange = (fromDateString: string, toDateString: string) => {
  let markedDates: MarkedDatesType = {};

  const fromDate = new Date(fromDateString);
  const toDate = new Date(toDateString);
  const range = differenceInDays(toDate, fromDate) + 1;

  if (range === 0) {
    markedDates = {
      [fromDateString]: {startingDay: true},
      [toDateString]: {endingDay: true},
    };
  } else {
    for (var i = 1; i <= range; i++) {
      const date = format(addDays(fromDate, i), 'yyyy-MM-dd');

      if (i === 1) {
        markedDates[date] = {
          startingDay: true,
          color: '#4169E1',
          textColor: '#FFFFFF',
        };
      } else if (i < range) {
        markedDates[date] = {color: '#4169E1', textColor: '#FFFFFF'};
      } else {
        markedDates[date] = {
          endingDay: true,
          color: '#4169E1',
          textColor: '#FFFFFF',
        };
      }
    }
  }

  return markedDates;
};

const Calendar: React.FC<CalendarProps> = ({onPress, style}) => {
  const [startDate, setStartDate] = React.useState<string>();
  const [endDate, setEndDate] = React.useState<string>();
  const [markedDates, setMarkedDates] = React.useState<MarkedDatesType>();

  React.useEffect(() => {
    onPress({startDate, endDate});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  const handleDatePress = ({dateString}: {dateString: string}) => {
    const isDateBefore =
      startDate && isBefore(parseISO(dateString), parseISO(startDate));
    const isDateAfter =
      startDate && isAfter(parseISO(dateString), parseISO(startDate));

    if (!startDate || (startDate && isDateBefore) || (startDate && endDate)) {
      setStartDate(dateString);
      setEndDate(undefined);

      setMarkedDates({
        [dateString]: {
          startingDay: true,
          color: '#4169E1',
          textColor: '#FFFFFF',
        },
      });
    } else if (startDate && isDateAfter && !endDate) {
      const range = getDateRange(startDate, dateString);

      setEndDate(dateString);
      setMarkedDates(range);
    }
  };
  return (
    <View style={[styles.container, style]}>
      <RNCalendar
        onDayPress={handleDatePress}
        disableAllTouchEventsForDisabledDays={true}
        markedDates={markedDates}
        markingType="period"
      />
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
