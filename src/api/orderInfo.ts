import { createClient } from '@/app/supabase/server';

export const getOrderInfoByUserId = async (userId: string) => {
  const supabase = createClient();
  const { data: orderInfo, error } = await supabase
    .from('Carts')
    .select('*, Products (*), Users (*)')
    .eq('userId', userId);

  if (error) throw new Error(error.message);

  const productList = orderInfo.map((v) => v.Products);
  const user = orderInfo[0].Users;

  return { productList, user };
};
