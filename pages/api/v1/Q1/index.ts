import { supabase } from '~/root/lib/supabase';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const inputData = {
            C1: req.body.C1,
            C2: {
                ...req.body.C2,
            },
            C3: req.body.C3,
        }
        const { data, error } = await supabase.from("T2").insert(inputData).select();
        if (error) {
            res.status(404).send(error);
        }

        if (data && data.length > 0) {
            res.status(201).send(data);
        } else {
            res.status(404).send("Not found");
        }

        res.status(201).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

export default handler;