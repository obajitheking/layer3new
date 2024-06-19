export function summarizeNumber(num?: number): string {
    const units = ['', 'K', 'M', 'B', 'T']; // You can extend this array for larger units if needed
    if (!num) return '0';
    let unitIndex = 0;
    let summarizedNum = num;

    while (summarizedNum >= 1000 && unitIndex < units.length - 1) {
        summarizedNum /= 1000;
        unitIndex++;
    }

    // Round the summarized number to two decimal places
    const roundedSummarizedNum = Math.round(summarizedNum * 100) / 100;

    // Combine the number with the corresponding unit symbol
    const summarizedString = roundedSummarizedNum.toString() + units[unitIndex];

    return summarizedString;
}