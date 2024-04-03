export interface Role {
    credit_id: string;
    character: string;
    episode_count: number;
  }
  
  export interface CastMember {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    roles: Role[];
    total_episode_count: number;
    order: number;
  }
  
 export default interface RepartoSerieResponse {
    cast: CastMember[];
  }