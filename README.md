Personal Wellness Engagement App.

This app will serve as a bridge between healthcare providers and both prospective and discharged patients by offering value-added features that foster long-term relationships, promote health literacy, and enable personalized care, while adhering to HIPAA security and privacy standards.

Objectives
Attract new patients through a consumer-friendly, AI-powered mobile application.
Maintain ongoing engagement with discharged patients to encourage return visits, follow-up care, and improved health outcomes.
Enable secure storage and management of patient health information (PHI) including vital signs, medications, and general physician notes.
Provide AI-assisted health coaching and physician recommendations via a Retrieval-Augmented Generation (RAG) system connected to a local or commercial LLM.
Open additional revenue streams through targeted advertising, wellness partnerships, and white-labelling opportunities.
Key Features
Patient-Centered Functions
HIPAA-Compliant PHI Storage: Secure repository for vital signs, medications, and general health notes.
Wellness Dashboard: Tracks health goals, medications, vitals, and exercise.
AI Health Agent: Offers health tips, general guidance, and recommends physicians based on user preferences and health profiles using a RAG database.
Wellness Features: Integration with fitness trackers, diet logs, mental health check-ins, and reminders for appointments or medications.
Patient Onboarding & Reactivation: Allows storage of inactive or prospective patient data for future engagement.
AI & Data Integration
RAG-Enabled Vector Database: Collects structured and unstructured patient data to support intelligent AI interactions.
AI-Powered Recommendations: Suggests local physicians, wellness programs, and health resources.
Secure Local or Commercial LLM Integration: Ensures data remains within privacy constraints while leveraging advanced AI capabilities.
SW architecture
1. Frontend (Mobile/Web App)
Tech Stack: React Native (Android/iOS), React.js (Web)

Functions:
2FA Login & Signup (Supabase Authentication)
Dashboard: Vitals, Medications, Wellness Logs
Group Chat function with AI Health Agent including history log
Notifications & Reminders
Onboarding Flows: Self-join or provider-invited
2. Backend (Supabase-Powered)
Supabase: PostgreSQL (DB), Authentication, Storage, Realtime

Functions:
User management, 2FA, and session handling
API for PHI storage and retrieval
Vector database using pgvector for RAG
Storage buckets for user files (e.g., physician notes, wearable data)
3. AI & RAG Layer
Vector Database: pgvector (built into Supabase)
LLM Integration: Local or Commercial (e.g., OpenAI, Mistral)
RAG Pipeline: Retrieve wellness articles, patient history, or previous interactions
Voice-to-Text Phase: ElevenLabs, Whisper API, or Android/iOS native speech services
4. Logging Phases for Medications, Vitals, and Wellness
Phase Input Method Tools
Phase 1 Manual Text Entry Mobile UI Forms
Phase 2 Voice Logging ElevenLabs API, Whisper, or similar
Phase 3 Wearable Integration Fitbit API, Apple Health, Google Fit
5. Database Schema (Supabase - PostgreSQL)
Table Fields

Users user_id (PK), email, hashed_password, role (patient, caretaker), 2FA_enabled, created_at
Patients patient_id (PK), user_id (FK), birthdate, gender, contact_info, onboarding_method (self/provider)
Caretakers caretaker_id (PK), user_id (FK), patient_id (FK), relationship_type
Vitals vital_id (PK), patient_id (FK), type (BP, HR), value, entry_method (manual, voice, wearable), recorded_at
Medications med_id (PK), patient_id (FK), name, dosage, frequency, start_date, entry_method
Wellness Logs log_id (PK), patient_id (FK), type (exercise, mood), entry, entry_method, logged_at
Providers provider_id (PK), name, specialty, contact_info
Physician Notes note_id (PK), patient_id (FK), note_text, provider_id (FK), created_at
AI Interactions interaction_id (PK), patient_id (FK), question, response, created_at
Vectors (RAG) vector_id (PK), patient_id (FK), embedding (vector), metadata
Ads ad_id (PK), partner_id (FK), content, target_conditions, active
Partners partner_id (PK), name, type (pharmacy, gym), contact_info
**tbc chat history db
