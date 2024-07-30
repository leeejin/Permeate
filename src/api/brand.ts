import { Brand } from '@/types/brands';

export const getBrandsById = async (brandId: number): Promise<Brand> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/brands/brand?brandId=${brandId}`);
  if (!response.ok) throw new Error('response 에러');
  const data = await response.json();
  return data;
};
