import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'

export type Item = { label: string; value: string }
export type SelectItem = { item: Item; checked: boolean }

type CheckBoxesProps = {
  items: Item[]
  onChange: (props: SelectItem) => void
}

const CheckBoxes = (props: CheckBoxesProps) => {
  const { items, onChange } = props
  return (
    <Grid container direction='row' spacing={2}>
      {items.map((item) => (
        <Grid item key={item.label} xs={3}>
          <FormControlLabel
            control={<Checkbox />}
            label={item.label}
            value={item.value}
            onChange={(_, checked) => onChange({ item, checked })}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default CheckBoxes
