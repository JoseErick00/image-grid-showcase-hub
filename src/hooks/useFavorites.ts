import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useGamification } from '@/contexts/GamificationContext';

export interface FavoriteProduct {
  id: string;
  product_id: string;
  product_data: {
    image: string;
    label: string;
    link: string;
    platform: string;
    category: string;
  };
  created_at: string;
}

export function useFavorites() {
  const { user, isAuthenticated } = useGamification();

  return useQuery({
    queryKey: ['favorites', user?.id],
    queryFn: async () => {
      if (!user?.id) return [];
      
      // Using explicit cast due to newly created table
      const { data, error } = await (supabase as any)
        .from('user_favorites')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching favorites:', error);
        return [];
      }

      return (data || []) as FavoriteProduct[];
    },
    enabled: isAuthenticated && !!user?.id,
  });
}

export function useFavoritesByCategory(category: string) {
  const { data: favorites = [] } = useFavorites();
  
  return favorites.filter(
    (fav) => fav.product_data?.category === category
  );
}

export function useAddFavorite() {
  const queryClient = useQueryClient();
  const { user } = useGamification();

  return useMutation({
    mutationFn: async ({
      productId,
      productData,
    }: {
      productId: string;
      productData: FavoriteProduct['product_data'];
    }) => {
      if (!user?.id) throw new Error('User not authenticated');

      // Using explicit cast due to newly created table
      const { error } = await (supabase as any)
        .from('user_favorites')
        .insert({
          user_id: user.id,
          product_id: productId,
          product_data: productData,
        });

      if (error) {
        // Ignore unique constraint violation (already favorited)
        if (error.code === '23505') return;
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });
}

export function useRemoveFavorite() {
  const queryClient = useQueryClient();
  const { user } = useGamification();

  return useMutation({
    mutationFn: async (productId: string) => {
      if (!user?.id) throw new Error('User not authenticated');

      // Using explicit cast due to newly created table
      const { error } = await (supabase as any)
        .from('user_favorites')
        .delete()
        .eq('user_id', user.id)
        .eq('product_id', productId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });
}

export function useIsFavorite(productId: string): boolean {
  const { data: favorites = [] } = useFavorites();
  return favorites.some((fav) => fav.product_id === productId);
}

export function useFavoritesCount(): number {
  const { data: favorites = [] } = useFavorites();
  return favorites.length;
}
