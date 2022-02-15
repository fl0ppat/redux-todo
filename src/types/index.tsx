export interface Task {
  title: string,
  data?: string | Element
  expired?: boolean
  status: boolean
  uuid: string
}