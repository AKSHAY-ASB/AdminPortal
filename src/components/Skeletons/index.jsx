import { Skeleton, Stack } from "@mui/material"

const Skeletons = ({ hWidth, vHeight}) => {
  return (
    <Stack spacing={1} sx={{ p: 1 }}>
       <Skeleton
            variant="text"
            width={hWidth}
            height={vHeight}
          
        />
    </Stack>
  )
}

export default Skeletons