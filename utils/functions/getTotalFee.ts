export default function getTotalFee(talents: Array<any>): number {
    const applicantsFee = talents.reduce((totalFee, item) => {
        console.log(item);
        return totalFee + (item?.fee || 0);
    }, 0);
    const totalFeeWithFee = applicantsFee + applicantsFee * 0.05;
    return totalFeeWithFee;
}