export interface DvQuantity {
  '|magnitude': number|string
  '|unit': string
}

export interface DvProportion {
  '|numerator': number|string
  '|denominator': number|string
}

export interface DvCodedText {
  '|code': string
  '|value': string
  '|terminology': string
}

export interface DvScale extends DvCodedText {
  '|scale': number
}

export interface DvOrdinal extends DvCodedText {
  '|ordinal': number
}

export type DvCount = number

export type DvText = string

// TODO: How to make this a date string?
export type DvDateTime = string

export type DvBoolean = boolean

export interface DvDuration {
  '|year'?: number
  '|month'?: number
  '|week'?: number
  '|day'?: number
  '|hour'?: number
  '|minute'?: number
  '|second'?: number
}
