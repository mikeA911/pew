export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          user_id: string
          email: string
          role: 'patient' | 'caretaker' | 'provider'
          two_fa_enabled: boolean
          created_at: string
        }
        Insert: {
          user_id?: string
          email: string
          role?: 'patient' | 'caretaker' | 'provider'
          two_fa_enabled?: boolean
          created_at?: string
        }
        Update: {
          user_id?: string
          email?: string
          role?: 'patient' | 'caretaker' | 'provider'
          two_fa_enabled?: boolean
        }
      }
      patients: {
        Row: {
          patient_id: string
          user_id: string
          birthdate: string
          gender: string
          contact_info: any
          onboarding_method: 'self' | 'provider'
          created_at: string
        }
        Insert: {
          patient_id?: string
          user_id: string
          birthdate: string
          gender: string
          contact_info?: any
          onboarding_method?: 'self' | 'provider'
          created_at?: string
        }
        Update: {
          birthdate?: string
          gender?: string
          contact_info?: any
          onboarding_method?: 'self' | 'provider'
        }
      }
      caretakers: {
        Row: {
          caretaker_id: string
          user_id: string
          patient_id: string
          relationship_type: string
          created_at: string
        }
        Insert: {
          caretaker_id?: string
          user_id: string
          patient_id: string
          relationship_type: string
          created_at?: string
        }
        Update: {
          relationship_type?: string
        }
      }
      vitals: {
        Row: {
          vital_id: string
          patient_id: string
          type: string
          value: any
          entry_method: 'manual' | 'voice' | 'wearable'
          recorded_at: string
        }
        Insert: {
          vital_id?: string
          patient_id: string
          type: string
          value: any
          entry_method?: 'manual' | 'voice' | 'wearable'
          recorded_at?: string
        }
        Update: {
          type?: string
          value?: any
          entry_method?: 'manual' | 'voice' | 'wearable'
        }
      }
      medications: {
        Row: {
          med_id: string
          patient_id: string
          name: string
          dosage: string
          frequency: string
          start_date: string
          entry_method: 'manual' | 'voice' | 'wearable'
          created_at: string
        }
        Insert: {
          med_id?: string
          patient_id: string
          name: string
          dosage: string
          frequency: string
          start_date: string
          entry_method?: 'manual' | 'voice' | 'wearable'
          created_at?: string
        }
        Update: {
          name?: string
          dosage?: string
          frequency?: string
          start_date?: string
          entry_method?: 'manual' | 'voice' | 'wearable'
        }
      }
      wellness_logs: {
        Row: {
          log_id: string
          patient_id: string
          type: string
          entry: any
          entry_method: 'manual' | 'voice' | 'wearable'
          logged_at: string
        }
        Insert: {
          log_id?: string
          patient_id: string
          type: string
          entry: any
          entry_method?: 'manual' | 'voice' | 'wearable'
          logged_at?: string
        }
        Update: {
          type?: string
          entry?: any
          entry_method?: 'manual' | 'voice' | 'wearable'
        }
      }
      providers: {
        Row: {
          provider_id: string
          name: string
          specialty: string
          contact_info: any
          created_at: string
        }
        Insert: {
          provider_id?: string
          name: string
          specialty: string
          contact_info?: any
          created_at?: string
        }
        Update: {
          name?: string
          specialty?: string
          contact_info?: any
        }
      }
      physician_notes: {
        Row: {
          note_id: string
          patient_id: string
          note_text: string
          provider_id: string
          created_at: string
        }
        Insert: {
          note_id?: string
          patient_id: string
          note_text: string
          provider_id: string
          created_at?: string
        }
        Update: {
          note_text?: string
          provider_id?: string
        }
      }
      ai_interactions: {
        Row: {
          interaction_id: string
          patient_id: string
          question: string
          response: string
          created_at: string
        }
        Insert: {
          interaction_id?: string
          patient_id: string
          question: string
          response: string
          created_at?: string
        }
        Update: {
          question?: string
          response?: string
        }
      }
      vectors: {
        Row: {
          vector_id: string
          patient_id: string
          embedding: number[]
          metadata: any
          created_at: string
        }
        Insert: {
          vector_id?: string
          patient_id: string
          embedding: number[]
          metadata?: any
          created_at?: string
        }
        Update: {
          embedding?: number[]
          metadata?: any
        }
      }
      ads: {
        Row: {
          ad_id: string
          partner_id: string
          content: string
          target_conditions: string[]
          active: boolean
          created_at: string
        }
        Insert: {
          ad_id?: string
          partner_id: string
          content: string
          target_conditions?: string[]
          active?: boolean
          created_at?: string
        }
        Update: {
          content?: string
          target_conditions?: string[]
          active?: boolean
        }
      }
      partners: {
        Row: {
          partner_id: string
          name: string
          type: 'pharmacy' | 'gym' | 'clinic' | 'other'
          contact_info: any
          created_at: string
        }
        Insert: {
          partner_id?: string
          name: string
          type: 'pharmacy' | 'gym' | 'clinic' | 'other'
          contact_info?: any
          created_at?: string
        }
        Update: {
          name?: string
          type?: 'pharmacy' | 'gym' | 'clinic' | 'other'
          contact_info?: any
        }
      }
    }
  }
}