export const FormattedBoardingTime = (time: string) => {
    const hours = Math.floor(Number(time) / 3600);
    const minutes = Math.floor((Number(time) % 3600) / 60);

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

}