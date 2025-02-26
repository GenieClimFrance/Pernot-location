import { useState, useEffect, useRef } from "react";
import { RangeCalendar } from "@heroui/calendar";
import { Button } from "@heroui/react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarDate, today, getLocalTimeZone } from "@internationalized/date";
import { IoCalendarOutline } from "react-icons/io5";

interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

function Calendar() {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [calendarValue, setCalendarValue] = useState<any>(undefined);
  const calendarRef = useRef<HTMLDivElement>(null);

  // Mettre à jour calendarValue lorsque dateRange change
  useEffect(() => {
    if (dateRange.from && dateRange.to) {
      setCalendarValue({
        start: new CalendarDate(
          dateRange.from.getFullYear(),
          dateRange.from.getMonth() + 1,
          dateRange.from.getDate()
        ),
        end: new CalendarDate(
          dateRange.to.getFullYear(),
          dateRange.to.getMonth() + 1,
          dateRange.to.getDate()
        ),
      });
    }
  }, [dateRange]);

  // Ajouter un gestionnaire de clic pour fermer le calendrier lorsqu'on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    }

    // Ajouter l'écouteur d'événement seulement si le calendrier est ouvert
    if (isCalendarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Nettoyer l'écouteur d'événement
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCalendarOpen]);

  const handleSelect = (value: any) => {
    if (!value) return;

    // Convertir les dates du format CalendarDate au format Date standard
    const newRange = {
      from: value.start
        ? new Date(value.start.year, value.start.month - 1, value.start.day)
        : undefined,
      to: value.end
        ? new Date(value.end.year, value.end.month - 1, value.end.day)
        : undefined,
    };

    setDateRange(newRange);
    setCalendarValue(value);

    // Fermer le calendrier seulement si les deux dates sont sélectionnées
    if (newRange.from && newRange.to) {
      setIsCalendarOpen(false);
    }
  };

  // Formater l'affichage des dates
  const getFormattedDateRange = () => {
    if (dateRange.from && dateRange.to) {
      return (
        <span className="text-white text-base">
          {format(dateRange.from, "dd MMM", { locale: fr })} -{" "}
          {format(dateRange.to, "dd MMM yyyy", { locale: fr })}
        </span>
      );
    } else if (dateRange.from) {
      return (
        <span className="text-white">
          {format(dateRange.from, "dd MMM yyyy", { locale: fr })} - Sélectionner
          la date d&apos;arrivée
        </span>
      );
    } else {
      return <span className="text-gray-400">Sélectionner les dates</span>;
    }
  };

  return (
    <div className="relative space-y-4">
      <div>
        <label
          className="block font-bold font-roboto mb-2 text-lg text-white uppercase"
          htmlFor="date-range"
        >
          Dates de réservation
        </label>
        <Button
          className="w-full justify-start text-left font-normal border-0 border-b-1 border-white rounded-none"
          id="date-range"
          variant="bordered"
          onPress={() => setIsCalendarOpen(true)}
        >
          <div className="flex justify-between items-center w-full">
            <div>{getFormattedDateRange()}</div>
            <IoCalendarOutline className="h-5 w-5 text-white" />
          </div>
        </Button>
      </div>

      {isCalendarOpen && (
        <div
          ref={calendarRef}
          className="absolute z-10 rounded-md shadow-lg w-full"
        >
          <RangeCalendar
            showMonthAndYearPickers
            className="rounded-md"
            defaultFocusedValue={today(getLocalTimeZone())}
            minValue={today(getLocalTimeZone())}
            value={calendarValue}
            visibleMonths={1}
            onChange={handleSelect}
          />
        </div>
      )}
    </div>
  );
}

export default Calendar;
