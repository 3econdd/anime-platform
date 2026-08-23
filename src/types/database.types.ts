export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string;
          avatar_url: string | null;
          preferred_lang: 'ka' | 'en';
          role: 'user' | 'admin';
          created_at: string;
        };
        Insert: {
          id?: string;
          username: string;
          avatar_url?: string | null;
          preferred_lang?: 'ka' | 'en';
          role?: 'user' | 'admin';
          created_at?: string;
        };
        Update: {
          id?: string;
          username?: string;
          avatar_url?: string | null;
          preferred_lang?: 'ka' | 'en';
          role?: 'user' | 'admin';
          created_at?: string;
        };
      };
      animes: {
        Row: {
          id: string;
          slug: string;
          title_ka: string;
          title_en: string;
          synopsis_ka: string;
          synopsis_en: string;
          poster_url: string;
          banner_url: string;
          trailer_url: string | null;
          rating: number;
          release_year: number;
          status: 'ongoing' | 'completed';
          genres: string[];
          tags: string[];
          views_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title_ka: string;
          title_en: string;
          synopsis_ka: string;
          synopsis_en: string;
          poster_url: string;
          banner_url: string;
          trailer_url?: string | null;
          rating?: number;
          release_year: number;
          status?: 'ongoing' | 'completed';
          genres?: string[];
          tags?: string[];
          views_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title_ka?: string;
          title_en?: string;
          synopsis_ka?: string;
          synopsis_en?: string;
          poster_url?: string;
          banner_url?: string;
          trailer_url?: string | null;
          rating?: number;
          release_year?: number;
          status?: 'ongoing' | 'completed';
          genres?: string[];
          tags?: string[];
          views_count?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      episodes: {
        Row: {
          id: string;
          anime_id: string;
          episode_number: number;
          title_ka: string;
          title_en: string;
          video_url_ka: string;
          video_url_en: string;
          thumbnail_url: string | null;
          duration: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          anime_id: string;
          episode_number: number;
          title_ka: string;
          title_en: string;
          video_url_ka: string;
          video_url_en: string;
          thumbnail_url?: string | null;
          duration?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          anime_id?: string;
          episode_number?: number;
          title_ka?: string;
          title_en?: string;
          video_url_ka?: string;
          video_url_en?: string;
          thumbnail_url?: string | null;
          duration?: number;
          created_at?: string;
        };
      };
      watch_history: {
        Row: {
          id: string;
          user_id: string;
          anime_id: string;
          episode_id: string;
          progress_seconds: number;
          is_completed: boolean;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          anime_id: string;
          episode_id: string;
          progress_seconds?: number;
          is_completed?: boolean;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          anime_id?: string;
          episode_id?: string;
          progress_seconds?: number;
          is_completed?: boolean;
          updated_at?: string;
        };
      };
      bookmarks: {
        Row: {
          id: string;
          user_id: string;
          anime_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          anime_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          anime_id?: string;
          created_at?: string;
        };
      };
      comments: {
        Row: {
          id: string;
          user_id: string;
          episode_id: string;
          content: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          episode_id: string;
          content: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          episode_id?: string;
          content?: string;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
  };
};
