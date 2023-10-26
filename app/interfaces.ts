export interface WorkDetails {
  id: number
  src?: string
  fallback?: string
  company: string
  position: string
  startYear: number
  endYear: number | 'Present'
}
