export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      affiliate_clicks: {
        Row: {
          affiliate_link: string
          banner_id: string | null
          click_type: string
          created_at: string
          id: string
          item_name: string | null
          page_url: string | null
          platform: string
          referrer: string | null
          session_id: string | null
          user_agent: string | null
        }
        Insert: {
          affiliate_link: string
          banner_id?: string | null
          click_type?: string
          created_at?: string
          id?: string
          item_name?: string | null
          page_url?: string | null
          platform: string
          referrer?: string | null
          session_id?: string | null
          user_agent?: string | null
        }
        Update: {
          affiliate_link?: string
          banner_id?: string | null
          click_type?: string
          created_at?: string
          id?: string
          item_name?: string | null
          page_url?: string | null
          platform?: string
          referrer?: string | null
          session_id?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      affiliate_conversions: {
        Row: {
          created_at: string
          id: string
          original_click_id: string | null
          page_url: string | null
          session_id: string | null
          user_agent: string | null
          utm_campaign: string | null
          utm_content: string | null
          utm_medium: string | null
          utm_source: string | null
          utm_term: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          original_click_id?: string | null
          page_url?: string | null
          session_id?: string | null
          user_agent?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          original_click_id?: string | null
          page_url?: string | null
          session_id?: string | null
          user_agent?: string | null
          utm_campaign?: string | null
          utm_content?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          utm_term?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "affiliate_conversions_original_click_id_fkey"
            columns: ["original_click_id"]
            isOneToOne: false
            referencedRelation: "affiliate_clicks"
            referencedColumns: ["id"]
          },
        ]
      }
      campaigns: {
        Row: {
          category_id: string
          created_at: string | null
          display_order: number | null
          hero_desktop: string | null
          hero_mobile: string | null
          hero_tablet: string | null
          id: string
          is_active: boolean | null
          name: string
          seo_description: string | null
          seo_keywords: string[] | null
          seo_title: string | null
          slug: string
          subtitle: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category_id: string
          created_at?: string | null
          display_order?: number | null
          hero_desktop?: string | null
          hero_mobile?: string | null
          hero_tablet?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          seo_description?: string | null
          seo_keywords?: string[] | null
          seo_title?: string | null
          slug: string
          subtitle?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category_id?: string
          created_at?: string | null
          display_order?: number | null
          hero_desktop?: string | null
          hero_mobile?: string | null
          hero_tablet?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          seo_description?: string | null
          seo_keywords?: string[] | null
          seo_title?: string | null
          slug?: string
          subtitle?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaigns_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string | null
          description: string | null
          display_order: number | null
          icon: string | null
          id: string
          is_active: boolean | null
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      coin_transactions: {
        Row: {
          amount: number
          created_at: string | null
          description: string | null
          id: string
          product_id: string | null
          redemption_id: string | null
          referral_id: string | null
          transaction_type: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          description?: string | null
          id?: string
          product_id?: string | null
          redemption_id?: string | null
          referral_id?: string | null
          transaction_type: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          description?: string | null
          id?: string
          product_id?: string | null
          redemption_id?: string | null
          referral_id?: string | null
          transaction_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "coin_transactions_redemption_id_fkey"
            columns: ["redemption_id"]
            isOneToOne: false
            referencedRelation: "prize_redemptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "coin_transactions_referral_id_fkey"
            columns: ["referral_id"]
            isOneToOne: false
            referencedRelation: "referrals"
            referencedColumns: ["id"]
          },
        ]
      }
      level_config: {
        Row: {
          display_order: number
          level: Database["public"]["Enums"]["user_level"]
          max_coins: number
          min_coins: number
          required_referrals: number
        }
        Insert: {
          display_order: number
          level: Database["public"]["Enums"]["user_level"]
          max_coins: number
          min_coins: number
          required_referrals: number
        }
        Update: {
          display_order?: number
          level?: Database["public"]["Enums"]["user_level"]
          max_coins?: number
          min_coins?: number
          required_referrals?: number
        }
        Relationships: []
      }
      prize_redemptions: {
        Row: {
          coins_at_redemption: number
          coins_consumed: number
          created_at: string | null
          id: string
          notes: string | null
          prize_level: Database["public"]["Enums"]["user_level"]
          product_id: string | null
          product_name: string | null
          redemption_type: string
          referrals_at_redemption: number
          referrals_consumed: number
          status: string
          updated_at: string | null
          user_id: string
          user_level_at_redemption: Database["public"]["Enums"]["user_level"]
        }
        Insert: {
          coins_at_redemption: number
          coins_consumed?: number
          created_at?: string | null
          id?: string
          notes?: string | null
          prize_level: Database["public"]["Enums"]["user_level"]
          product_id?: string | null
          product_name?: string | null
          redemption_type: string
          referrals_at_redemption: number
          referrals_consumed?: number
          status?: string
          updated_at?: string | null
          user_id: string
          user_level_at_redemption: Database["public"]["Enums"]["user_level"]
        }
        Update: {
          coins_at_redemption?: number
          coins_consumed?: number
          created_at?: string | null
          id?: string
          notes?: string | null
          prize_level?: Database["public"]["Enums"]["user_level"]
          product_id?: string | null
          product_name?: string | null
          redemption_type?: string
          referrals_at_redemption?: number
          referrals_consumed?: number
          status?: string
          updated_at?: string | null
          user_id?: string
          user_level_at_redemption?: Database["public"]["Enums"]["user_level"]
        }
        Relationships: []
      }
      product_likes: {
        Row: {
          created_at: string
          id: string
          like_count: number
          product_id: string
          share_count: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          like_count?: number
          product_id: string
          share_count?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          like_count?: number
          product_id?: string
          share_count?: number
          updated_at?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          affiliate_link: string
          campaign_id: string
          click_count: number | null
          created_at: string | null
          display_order: number | null
          id: string
          image_url: string
          is_active: boolean | null
          label: string
          like_count: number | null
          platform: string
          section_id: string
          share_count: number | null
          stamp: string | null
          updated_at: string | null
        }
        Insert: {
          affiliate_link: string
          campaign_id: string
          click_count?: number | null
          created_at?: string | null
          display_order?: number | null
          id?: string
          image_url: string
          is_active?: boolean | null
          label: string
          like_count?: number | null
          platform: string
          section_id: string
          share_count?: number | null
          stamp?: string | null
          updated_at?: string | null
        }
        Update: {
          affiliate_link?: string
          campaign_id?: string
          click_count?: number | null
          created_at?: string | null
          display_order?: number | null
          id?: string
          image_url?: string
          is_active?: boolean | null
          label?: string
          like_count?: number | null
          platform?: string
          section_id?: string
          share_count?: number | null
          stamp?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      promo_banners: {
        Row: {
          affiliate_link: string
          campaign_id: string
          click_count: number | null
          created_at: string | null
          desktop_url: string
          display_order: number | null
          id: string
          is_active: boolean | null
          like_count: number | null
          mobile_url: string | null
          section_id: string
          share_count: number | null
          tablet_url: string | null
          updated_at: string | null
        }
        Insert: {
          affiliate_link: string
          campaign_id: string
          click_count?: number | null
          created_at?: string | null
          desktop_url: string
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          like_count?: number | null
          mobile_url?: string | null
          section_id: string
          share_count?: number | null
          tablet_url?: string | null
          updated_at?: string | null
        }
        Update: {
          affiliate_link?: string
          campaign_id?: string
          click_count?: number | null
          created_at?: string | null
          desktop_url?: string
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          like_count?: number | null
          mobile_url?: string | null
          section_id?: string
          share_count?: number | null
          tablet_url?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "promo_banners_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      push_subscriptions: {
        Row: {
          auth: string
          created_at: string
          endpoint: string
          id: string
          is_active: boolean
          p256dh: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          auth: string
          created_at?: string
          endpoint: string
          id?: string
          is_active?: boolean
          p256dh: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          auth?: string
          created_at?: string
          endpoint?: string
          id?: string
          is_active?: boolean
          p256dh?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      pwa_install_events: {
        Row: {
          browser: string | null
          created_at: string | null
          event_type: string
          id: string
          in_app_browser_name: string | null
          is_in_app_browser: boolean | null
          platform: string | null
          session_id: string | null
          user_agent: string | null
        }
        Insert: {
          browser?: string | null
          created_at?: string | null
          event_type: string
          id?: string
          in_app_browser_name?: string | null
          is_in_app_browser?: boolean | null
          platform?: string | null
          session_id?: string | null
          user_agent?: string | null
        }
        Update: {
          browser?: string | null
          created_at?: string | null
          event_type?: string
          id?: string
          in_app_browser_name?: string | null
          is_in_app_browser?: boolean | null
          platform?: string | null
          session_id?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      referrals: {
        Row: {
          coins_awarded: number
          created_at: string | null
          id: string
          referral_code: string
          referred_id: string
          referrer_id: string
        }
        Insert: {
          coins_awarded?: number
          created_at?: string | null
          id?: string
          referral_code: string
          referred_id: string
          referrer_id: string
        }
        Update: {
          coins_awarded?: number
          created_at?: string | null
          id?: string
          referral_code?: string
          referred_id?: string
          referrer_id?: string
        }
        Relationships: []
      }
      user_favorites: {
        Row: {
          created_at: string | null
          id: string
          product_data: Json
          product_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          product_data: Json
          product_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          product_data?: Json
          product_id?: string
          user_id?: string
        }
        Relationships: []
      }
      user_gamification: {
        Row: {
          coins_consumed: number
          created_at: string | null
          current_level: Database["public"]["Enums"]["user_level"]
          current_level_coins: number
          current_level_referrals: number
          id: string
          prizes_redeemed_count: number
          referral_code: string
          referrals_consumed: number
          referred_by: string | null
          total_coins_earned: number
          total_referrals_ever: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          coins_consumed?: number
          created_at?: string | null
          current_level?: Database["public"]["Enums"]["user_level"]
          current_level_coins?: number
          current_level_referrals?: number
          id?: string
          prizes_redeemed_count?: number
          referral_code: string
          referrals_consumed?: number
          referred_by?: string | null
          total_coins_earned?: number
          total_referrals_ever?: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          coins_consumed?: number
          created_at?: string | null
          current_level?: Database["public"]["Enums"]["user_level"]
          current_level_coins?: number
          current_level_referrals?: number
          id?: string
          prizes_redeemed_count?: number
          referral_code?: string
          referrals_consumed?: number
          referred_by?: string | null
          total_coins_earned?: number
          total_referrals_ever?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_gamification_referred_by_fkey"
            columns: ["referred_by"]
            isOneToOne: false
            referencedRelation: "user_gamification"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_referral_code: { Args: never; Returns: string }
      get_level_from_coins: {
        Args: { total_coins: number }
        Returns: Database["public"]["Enums"]["user_level"]
      }
    }
    Enums: {
      user_level: "colegas" | "amigos" | "familia" | "socios"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      user_level: ["colegas", "amigos", "familia", "socios"],
    },
  },
} as const
