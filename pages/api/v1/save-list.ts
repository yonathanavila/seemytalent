import { supabase } from '../../../lib/supabase';

import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { data, error } = await supabase.from("T1").insert(req.body).select();
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