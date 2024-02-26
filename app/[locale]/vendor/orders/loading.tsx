import { Container, Skeleton, Stack } from '@mui/material'

const Page = () => {
  return (
    <Container sx={{ mt: { xs: 5, md: 8 }, mb: 14 }}>
      <Stack mt={{ xs: 2, md: 4 }} gap={2}>
        <Skeleton variant="rounded" width="100%" height={96} />
        <Skeleton variant="rounded" width="100%" height={96} />
        <Skeleton variant="rounded" width="100%" height={96} />
        <Skeleton variant="rounded" width="100%" height={96} />
      </Stack>
    </Container>
  )
}

export default Page
