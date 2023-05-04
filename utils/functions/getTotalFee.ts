export default function getTotalFee(talents: Array<any>): any {
    try {
        let currentFee = 0.05;
        const applicantsFee = talents.reduce((totalFee, item) => {
            return totalFee + (item?.fee || 0);
        }, 0);
        const totalFeeWithFee = applicantsFee + applicantsFee * currentFee;
        return { total: totalFeeWithFee, fee: currentFee };
    } catch (error) {
        throw new Error(`[Error] getTotalFee: ${error.message}`);
    }
}