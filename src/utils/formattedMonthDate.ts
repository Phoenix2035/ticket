export const FormattedMonthDate = (date: string) => {
    const inputDate = new Date(date);
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const day = inputDate.getDate();
    const monthName = monthNames[inputDate.getMonth()];

    return `${monthName} ${day}`;
}