export type TEvents = 'generateData' | 'filterData' | 'loading'

export const generateColumns = (props?: any) => [
  ...Array.from({ length: 7 }).map((_, columnIndex) => ({
    ...props,
    key: `column-${columnIndex}`,
    dataKey: `column-${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150
  })),
  {
    key: 'column-7',
    dataKey: 'column-7',
    title: 'Count',
    width: 150
  }
]

export const generateData = (columns: TElementPlus['Column'][]) => Array.from({ length: 1000000 }).map((_, rowIndex) => {
  return columns.reduce((acc, col, colIndex) => {
    acc[col.dataKey as string] = colIndex < 7
      ? `Row ${rowIndex} - Col ${colIndex}`
      : Math.floor(Math.random() * 10) + 1

    return acc
  },
  { id: `row-${rowIndex}` } as { id: string;[key: string]: string | number })
})
