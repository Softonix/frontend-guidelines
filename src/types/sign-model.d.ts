interface ILabel {
  name: string
  color: string
}

interface ILabelMap {
  [key: number]: ILabel
}

type TVariable = number | number[] | number[][] | number[][][] | number[][][][] | number[][][][][] | number[][][][][][]
