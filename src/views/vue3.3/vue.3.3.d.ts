export type TDataAttendees = {
  id: number
  completed: boolean
  lms_percentage_completed: string | undefined
  online_course: string
  name: string
  short_description: string
  points: string
}

export interface IUser {
  id: number
  name: string
  university: string
  age: number | string
}
