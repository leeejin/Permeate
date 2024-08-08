import { useQuery } from '@tanstack/react-query';

const useReviewsQuery = (productId: string) => {
  return useQuery({
    queryKey: ['Reviews', productId],
    queryFn: async () => {
      return [
        {
          reviewId: 0,
          Products: { notes: ['달콤한 호박', '일랑일랑', '불가리안 로즈'] },
          User: { name: '박원빈' },
          content: '항상 사용하는터라 만족합니다',
          createdBy: '2024.07.28',
          ImagesURL: [],
          score: 4,
          productId: 56
        },
        {
          reviewId: 1,
          Products: { notes: [''] },
          User: { name: '이하얀' },
          content: '주기적으로 구매하고 있는데 향이 넘 좋아요',
          createdBy: '2024.07.28',
          ImagesURL: [],
          score: 5,
          productId: 55
        },
        {
          reviewId: 2,
          Products: { notes: ['기본'] },
          User: { name: '윤문열' },
          content: '향수좋네요',
          createdBy: '2024.07.28',
          ImagesURL: [
            'https://mblogthumb-phinf.pstatic.net/MjAxODA5MjBfODgg/MDAxNTM3MzcxNjMzNTA1.DR-4_aVEKyabxToJhS2VV5md9FnUdmuQNP_Gp0X0ki4g.SoOL0l9I11EFA3qx_5PVNmmJ_nsINEUrdygp-0UXZxYg.JPEG.that1219/DSC07631.jpg?type=w800'
          ],
          score: 5,
          productId: 42
        },
        {
          reviewId: 3,
          Products: { notes: ['달콤한 호박', '일랑일랑', '불가리안 로즈'] },
          User: { name: '강감찬' },
          content: '회사 동료분들이 추천해주셔서 구매해 봤습니다. 절 향 나고 좋네요',
          createdBy: '2024.07.28',
          ImagesURL: [],
          score: 5,
          productId: 56
        }
      ].filter((review) => review.productId === Number(productId));
    }
  });
};

export default useReviewsQuery;
