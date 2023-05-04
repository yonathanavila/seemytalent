import toast from 'react-hot-toast';

const baseURI = process.env.NEXT_PUBLIC_BASE_URI || "/api/v1"

const SavePayment = async (payment: any) => {
    try {
        const response = await fetch(`${baseURI}/Q1`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                C1: payment.C1,
                C2: payment.C2,
                C3: payment.C3,
            }),
        });
        const data = await response.json();

        if (data.error) {
            toast.error("Error saving");
            throw new Error(data.error);
        }

        if (data.length > 0) {
            toast.success("Saved successfully");
            return data;
        } else {
            toast.error("Error saving");
            throw new Error("Error saving");
        }

    } catch (error) {
        toast.error("Error saving");
        throw new Error(error);
    }
}

export default SavePayment;