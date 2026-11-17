
export type PotatoClass = 'Potato___healthy' | 'Potato___Early_blight' | 'Potato___Late_blight' | 'Unknown';

export interface PredictionResult {
  label: string;
  confidence: number;
  timestamp: string;
}
