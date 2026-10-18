
export interface Facility {
  id: number;
  name: string;
  location: string;
  facility_type: string;
  description: string | null;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export interface FacilityApiResponse {
  success: boolean;
  data: Facility[];
}
