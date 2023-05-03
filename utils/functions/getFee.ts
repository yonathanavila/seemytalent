export async function getMaxPriorityFeePerGas(provider: any) {
	try {
		let maxPriorityFee = null;
		let attempt = 0;
		while (maxPriorityFee == null) {
			try {
				return await provider.getFeeData().maxPriorityFeePerGas;
			} catch (e) {
				attempt++;
				if (attempt > 100) {
					break;
				}
			}
		}
		return 0;
	} catch (error) {
		throw new Error(`[Error] getMaxPriorityFeePerGas: ${error.message}`);
	}
}
