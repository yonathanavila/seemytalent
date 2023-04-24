import { supabase } from '../../../lib/supabase';

import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { data, error } = await supabase.from("T1").select('*');
        if (error) {
            res.status(404).send(error);
        }

        if (data && data.length > 0) {
            res.status(201).send(data);
        }
    } catch (error) {
        console.log(error);
    }
};

export default handler;