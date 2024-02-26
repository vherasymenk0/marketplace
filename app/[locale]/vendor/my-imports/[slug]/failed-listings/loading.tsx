import { Skeleton, Stack } from '@mui/material'

const Page = () => {
  return (
    <Stack mt={{ xs: 2, md: 4 }}>
      <Skeleton variant="rounded" width="100%" height={40} sx={{ mb: 1.5 }} />
      <Skeleton variant="rounded" width="100%" height={40} sx={{ mb: 1.5 }} />
      <Skeleton variant="rounded" width="100%" height={40} sx={{ mb: 1.5 }} />
      <Skeleton variant="rounded" width="100%" height={40} sx={{ mb: 1.5 }} />
    </Stack>
  )
}

export default Page
