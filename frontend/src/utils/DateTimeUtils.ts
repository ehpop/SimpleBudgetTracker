export function getDateFromDateTimeString(dateTimeString: string): string {
    if (!dateTimeString) {
        return "";
    }

    if (dateTimeString.includes("T")) {
        return dateTimeString.split("T")[0];
    }

    return dateTimeString;
}

export function getTimeFromDateTimeString(dateTimeString: string): string {
    if (!dateTimeString) {
        return "";
    }

    if (!dateTimeString.includes("T")) {
        return "";
    }

    return dateTimeString.split("T")[1].split(".")[0];
}

export function getDateTimeStringFromDateAndTime(date: string, time: string): string {
    return `${date}T${time}:00.000Z`;
}

export function getDateTimeStringFromDate(date: string): string {
    return `${date}T00:00:00.000Z`;
}