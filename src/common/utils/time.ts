export function timeToSeconds(time: string) {
    const [hours = '0', minutes = '0', seconds = '0'] = time.split(":");

    const hoursToSeconds = Number(hours) * 3600;
    const minutesToSecods = Number(minutes) * 60;
    return hoursToSeconds + minutesToSecods + Number(seconds);
}
